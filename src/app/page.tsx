import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const roleCards = [
  {
    href: "/liisi",
    title: "Liisi View",
    description: "Customer side, mobile-first experience.",
    accent: "bg-emerald-700",
  },
  {
    href: "/anu",
    title: "Anu View",
    description: "Developer side, tablet-first dashboard.",
    accent: "bg-amber-700",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6">
      <div className="mb-8 rounded-3xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Garage48 Empowering Women Hackathon</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">KoDu Working Prototype</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Choose a side to demo: Liisi for customer mobile flow and Anu for developer tablet flow.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {roleCards.map((role) => (
          <Card key={role.href} className="border border-border/80">
            <CardHeader>
              <div className={`h-1.5 w-24 rounded-full ${role.accent}`} />
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={role.href}
                className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium transition hover:bg-muted"
              >
                Open view
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
