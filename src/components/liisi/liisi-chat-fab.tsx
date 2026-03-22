import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { liisiControls } from "@/components/liisi/liisi-design-system";

export function LiisiChatFab() {
  return (
    <Link href="/liisi/chat" aria-label="Start chat" className={liisiControls.chatFab}>
      <MessageCircle size={22} />
    </Link>
  );
}
