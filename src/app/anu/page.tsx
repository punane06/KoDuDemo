import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activityFeed, apartment, designPackages, documents, galleryPhotos } from "@/lib/mockData";

const floorPlanUrl = "https://picsum.photos/900/640?random=201";

export default function AnuPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6">
      <header className="mb-5 rounded-2xl border border-border bg-card p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Anu View</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Developer Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Tablet-first view to monitor customer project status and assets.</p>
      </header>

      <section className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm">Customer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">Liisi</p>
            <p className="text-xs text-muted-foreground">{apartment.title}</p>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{apartment.progressPercent}%</p>
            <p className="text-xs text-muted-foreground">Interior phase</p>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm">Packages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{designPackages.length} options</p>
            <p className="text-xs text-muted-foreground">1 preferred by user</p>
          </CardContent>
        </Card>
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-sm">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{documents.length} files</p>
            <p className="text-xs text-muted-foreground">Latest: Kitchen Layout Plan v2</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_1.1fr_1.6fr]">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {documents.map((doc) => (
              <article key={doc.id} className="rounded-lg border border-border/80 bg-background p-3">
                <p className="text-sm font-medium">{doc.title}</p>
                <p className="text-xs text-muted-foreground">{doc.category} · {doc.fileType.toUpperCase()}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Technical files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {galleryPhotos.slice(0, 3).map((photo) => (
              <article key={photo.id} className="rounded-lg border border-border/80 bg-background p-3">
                <p className="text-sm font-medium">{photo.room}</p>
                <p className="text-xs text-muted-foreground">{photo.caption}</p>
              </article>
            ))}
            <article className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">
              Additional files can be uploaded by customer or project team.
            </article>
          </CardContent>
        </Card>

        <Card className="border border-border">
          <CardHeader>
            <CardTitle>Floor plan</CardTitle>
          </CardHeader>
          <CardContent>
            <figure className="overflow-hidden rounded-lg border border-border/80 bg-background">
              <Image src={floorPlanUrl} alt="Project floor plan placeholder" width={900} height={640} className="h-auto w-full object-cover" />
            </figure>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {activityFeed.map((event) => (
                <article key={event.id} className="rounded-lg bg-muted p-2">
                  <p className="text-xs font-medium">{event.title}</p>
                  <p className="text-[11px] text-muted-foreground">{event.time}</p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Link href="/liisi" className="mt-5 inline-flex rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium">
        Open Liisi view
      </Link>
    </main>
  );
}