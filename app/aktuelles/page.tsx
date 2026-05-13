import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AktuellesClient from "@/components/AktuellesClient";
import { newsItems } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "Aktuelles",
};

export default function AktuellesPage() {
  return (
    <>
      <Navbar current="aktuelles" />

      <main className="max-w-7xl mx-auto px-margin py-xl space-y-xl">
        <section>
          <div className="mb-lg">
            <h1 className="font-display-xl text-display-xl text-on-background mb-sm">
              Aktuelles
            </h1>
            <p className="font-body-lg text-secondary max-w-2xl">
              Neuigkeiten, Berichte und Infobriefe des Sport Club Unna e.V. – hier bleibt ihr immer auf dem Laufenden.
            </p>
          </div>

          <AktuellesClient items={newsItems} />
        </section>
      </main>

      <Footer />
    </>
  );
}
