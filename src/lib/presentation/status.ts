import type { VariantProps } from "class-variance-authority";

import type { badgeVariants } from "@/components/ui/badge";

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

export function mapUnitStatusToBadgeVariant(status: string): BadgeVariant {
  switch (status) {
    case "Sold":
      return "secondary";
    case "Reserved":
      return "outline";
    default:
      return "ghost";
  }
}