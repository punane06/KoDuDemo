import { LiisiHeader } from "@/components/liisi/liisi-header";
import { liisiSurface, liisiText, liisiLayout } from "@/components/liisi/liisi-design-system";

export default function LiisiChatPage() {
  return (
    <main className={liisiSurface.pageBackground}>
      <LiisiHeader title="Chat" subtitle="Conversation with KoDu support" backHref="/liisi" variant="inner" />

      <section className={`mx-auto w-full ${liisiLayout.containerWidth} ${liisiLayout.pageMargin} py-4`}>
        <div className={`${liisiSurface.card} p-4`}>
          <p className={liisiText.bodyPlus}>Start a conversation</p>
          <p className={`mt-1 ${liisiText.captionMuted}`}>
            This is your direct line to project support and updates.
          </p>
        </div>
      </section>
    </main>
  );
}
