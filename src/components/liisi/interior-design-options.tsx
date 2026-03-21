import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { DesignPackage } from "@/lib/mockData";

interface InteriorDesignOptionsProps {
  packages: DesignPackage[];
}

function euro(value: number) {
  return new Intl.NumberFormat("en-EE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function InteriorDesignOptions({ packages }: InteriorDesignOptionsProps) {
  return (
    <main className="mx-auto w-full max-w-sm flex-1 space-y-4 px-4 pt-5 pb-24">
      <header className="flex items-center gap-3">
        <Link
          href="/liisi"
          aria-label="Back to home"
          className="rounded-full border border-border bg-card p-2 text-foreground"
        >
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold">Interior Design</h1>
          <p className="text-xs text-muted-foreground">Select your preferred package</p>
        </div>
      </header>

      <section className="space-y-3">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="p-4">
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold">{pkg.name}</h2>
                <p className="text-xs text-muted-foreground">{pkg.subtitle}</p>
              </div>
              <p className="text-sm font-semibold text-primary">{euro(pkg.priceEur)}</p>
            </div>

            <p className="mb-3 text-sm text-muted-foreground">{pkg.description}</p>

            <ul className="mb-3 space-y-1.5">
              {pkg.highlights.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={[
                "w-full rounded-lg px-3 py-2 text-sm font-medium transition",
                pkg.recommended
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:bg-muted/50",
              ].join(" ")}
            >
              {pkg.recommended ? "Recommended" : "Choose package"}
            </button>
          </Card>
        ))}
      </section>
    </main>
  );
}
