import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { liisiText, liisiControls } from "@/components/liisi/liisi-design-system";

interface Props {
  date: string;
  category: string;
  imageUrl: string;
  text: string;
  totalCount: number;
  viewAllHref?: string;
}

export function LatestUpdateCard({
  date,
  category,
  imageUrl,
  text,
  totalCount,
  viewAllHref = "/liisi/gallery",
}: Props) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h2 className={liisiText.sectionHeading}>Latest update</h2>
        <Link
          href={viewAllHref}
          className={liisiControls.linkSmall}
        >
          View all ({totalCount})
        </Link>
      </div>
      <Link href={viewAllHref} className="block">
        <Card className="overflow-hidden transition hover:shadow-md">
          <div className="relative h-36 w-full">
            <Image
              src={imageUrl}
              alt="Latest construction update"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <CardContent className="pt-3 pb-4">
            <p className={`mb-1 ${liisiControls.linkSmall}`}>
              {date} &rsaquo; {category}
            </p>
            <p className={liisiText.body}>{text}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
