export type StandingsRow = {
  pos: number;
  team: string;
  played: number;
  points: string;
  isUnna: boolean;
};

export type TeamStandings = {
  rows: StandingsRow[];
  fetchedAt: string;
};

export type AllStandings = {
  senioren1: TeamStandings;
  senioren2: TeamStandings;
  junioren: TeamStandings;
};

const BASE = "https://dbv.turnier.de";
const SEASON_ID = "925D6245-1FA1-496D-9810-1439487E5801";

const TEAMS = {
  senioren1: { teamId: 651 },
  senioren2: { teamId: 652 },
  junioren: { teamId: 1314 },
} as const;

async function getSessionCookie(): Promise<string> {
  const res = await fetch(`${BASE}/cookiewall/Save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0 (compatible; SCUnna/1.0)",
    },
    body: "ReturnUrl=%2F&SettingsOpen=false",
    redirect: "manual",
    cache: "no-store",
  });

  // Node 18+ provides getSetCookie(); fall back to parsing the header string
  const rawCookies: string[] =
    typeof (res.headers as { getSetCookie?: () => string[] }).getSetCookie ===
    "function"
      ? (res.headers as { getSetCookie: () => string[] }).getSetCookie()
      : [res.headers.get("set-cookie") ?? ""];

  const stCookie = rawCookies
    .flatMap((c) => c.split(","))
    .find((c) => c.trim().startsWith("st="));

  return stCookie ? stCookie.trim().split(";")[0] : "";
}

function parseStandingsTable(html: string): StandingsRow[] {
  // Find the standings table by looking for one that contains "Pkt" or "Punkte" in a header
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/gi;
  let tableMatch: RegExpExecArray | null;

  while ((tableMatch = tableRegex.exec(html)) !== null) {
    const tableHtml = tableMatch[1];
    if (!/Pkt|Punkte/i.test(tableHtml)) continue;

    const rows: StandingsRow[] = [];
    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch: RegExpExecArray | null;

    while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
      const rowHtml = rowMatch[1];
      const cells: string[] = [];
      const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi;
      let cellMatch: RegExpExecArray | null;

      while ((cellMatch = cellRegex.exec(rowHtml)) !== null) {
        // Strip all HTML tags and decode basic entities
        const text = cellMatch[1]
          .replace(/<[^>]+>/g, "")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        cells.push(text);
      }

      if (cells.length < 4) continue;
      const pos = parseInt(cells[0]);
      if (isNaN(pos)) continue;

      const team = cells[1];
      const played = parseInt(cells[2]) || 0;
      const points = cells[3];

      if (team) {
        rows.push({
          pos,
          team,
          played,
          points,
          isUnna: /unna/i.test(team),
        });
      }
    }

    if (rows.length > 0) return rows;
  }

  return [];
}

async function fetchTeamStandings(
  teamId: number,
  cookie: string
): Promise<TeamStandings> {
  const url = `${BASE}/sport/team.aspx?id=${SEASON_ID}&team=${teamId}`;
  const res = await fetch(url, {
    headers: {
      Cookie: cookie,
      "User-Agent": "Mozilla/5.0 (compatible; SCUnna/1.0)",
    },
    cache: "no-store",
  });

  const html = await res.text();
  const rows = parseStandingsTable(html);

  return {
    rows,
    fetchedAt: new Date().toISOString(),
  };
}

export async function getAllStandings(): Promise<AllStandings> {
  const cookie = await getSessionCookie();

  const [senioren1, senioren2, junioren] = await Promise.all([
    fetchTeamStandings(TEAMS.senioren1.teamId, cookie),
    fetchTeamStandings(TEAMS.senioren2.teamId, cookie),
    fetchTeamStandings(TEAMS.junioren.teamId, cookie),
  ]);

  return { senioren1, senioren2, junioren };
}
