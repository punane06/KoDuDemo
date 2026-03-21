"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, MessageCircle } from "lucide-react";

const TABS = [
  { label: "Home",     icon: Home,           href: "/liisi" },
  { label: "Timeline", icon: CalendarDays,   href: "/liisi/timeline" },
  { label: "Chat",     icon: MessageCircle,  href: "/liisi/chat" },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border bg-card shadow-md h-16">
      {TABS.map(({ label, icon: Icon, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={[
              "flex flex-col items-center gap-1 pt-2 px-6 text-[11px] transition-colors",
              active ? "text-primary font-semibold" : "text-muted-foreground",
            ].join(" ")}
          >
            <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
