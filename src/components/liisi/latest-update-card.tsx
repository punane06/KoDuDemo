import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { liisiText, liisiControls, liisiColors } from "@/components/liisi/liisi-design-system";

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
        <h2 className="font-inter font-normal text-[15px] text-[#223F43]">Latest update</h2>
        <Link
          href={viewAllHref}
          className="font-inter font-light text-[12px] text-[#223F43] hover:underline"
        >
          View all ({totalCount})
        </Link>
      </div>
      <Link href={viewAllHref} className="block">
        <Card className="overflow-hidden transition hover:shadow-md rounded-2xl">
          <div className="relative w-full -mt-4 " style={{ aspectRatio: '2.5/1' }}>
            <Image
              src={imageUrl}
              alt="Latest construction update"
              fill
              className="object-cover rounded-t-2xl" 
              sizes="(max-width: 640px) 100vw, 400px"
            />
          </div>
          <CardContent className="pt-3 pb-4">
            <div className="flex items-center mb-1">
              <span className="font-inter font-light text-[12px] text-[#6b6b6b]">{date}</span>
              <span
                className="inline-block align-middle mx-1"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#e0e0e0',
                  padding: '0 4px 3px 4px',
                  lineHeight: 1,
                  verticalAlign: 'middle',
                }}
              >
                &bull;
              </span>
              <span className="font-inter font-light text-[12px] text-[#6b6b6b]">{category}</span>
            </div>
            <p className="font-inter font-light text-[12px] text-[#6b6b6b]">{text}</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
