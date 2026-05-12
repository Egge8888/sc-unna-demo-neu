import { NextResponse } from "next/server";
import { getAllStandings } from "@/lib/badminton-standings";

// Revalidate cached response every 6 hours
export const revalidate = 21600;

export async function GET() {
  try {
    const data = await getAllStandings();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Standings fetch failed:", err);
    return NextResponse.json(
      { error: "Tabellen konnten nicht geladen werden." },
      { status: 503 }
    );
  }
}
