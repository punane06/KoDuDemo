import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { activityFeed, apartment, designPackages, documents, galleryPhotos } from "@/lib/mockData";

function euro(value: number) {
  return new Intl.NumberFormat("en-EE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function LiisiPage() {
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-3 py-4 sm:max-w-lg">
      <header className="mb-4 rounded-2xl border border-border bg-card p-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Liisi View</p>
        <h1 className="mt-2 text-2xl font-semibold">{apartment.title}</h1>
        <p className="text-sm text-muted-foreground">{apartment.address}</p>
      </header>

      <Card className="mb-4 border border-border">
        <CardHeader>
          <CardTitle>Project progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <p>Design and build stage</p>
            <p className="font-medium">{apartment.progressPercent}%</p>
          </div>
          <Progress value={apartment.progressPercent} />
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg bg-muted p-2">
              <p className="text-xs text-muted-foreground">Budget used</p>
              <p className="font-medium">{euro(apartment.budgetUsedEur)}</p>
            </div>
            <div className="rounded-lg bg-muted p-2">
              <p className="text-xs text-muted-foreground">Total budget</p>
              <p className="font-medium">{euro(apartment.budgetTotalEur)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 border border-border">
        <CardHeader>
          <CardTitle>Design packages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {designPackages.map((pkg) => (
            <article key={pkg.id} className="rounded-lg border border-border/90 bg-background p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-medium">{pkg.name}</h2>
                  <p className="text-xs text-muted-foreground">{pkg.subtitle}</p>
                </div>
                <p className="text-sm font-semibold">{euro(pkg.priceEur)}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
            </article>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-4 border border-border">
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {documents.map((doc) => (
            <article key={doc.id} className="rounded-lg border border-border/90 bg-background p-3">
              <p className="font-medium">{doc.title}</p>
              <p className="text-xs text-muted-foreground">{doc.category} · {doc.fileType.toUpperCase()} · {doc.uploadedBy}</p>
            </article>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-4 border border-border">
        <CardHeader>
          <CardTitle>Gallery</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2">
          {galleryPhotos.slice(0, 4).map((photo) => (
            <figure key={photo.id} className="overflow-hidden rounded-lg border border-border/90 bg-background">
              <Image src={photo.url} alt={photo.caption} width={400} height={300} className="h-24 w-full object-cover" />
              <figcaption className="p-2 text-xs text-muted-foreground">{photo.room}</figcaption>
            </figure>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-4 border border-border">
        <CardHeader>
          <CardTitle>Activity feed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {activityFeed.map((event) => (
            <article key={event.id} className="rounded-lg bg-muted p-2">
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.time}</p>
            </article>
          ))}
        </CardContent>
      </Card>

      <Link href="/anu" className="mb-4 inline-flex rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium">
        Open Anu view
      </Link>
    </main>
  );
}