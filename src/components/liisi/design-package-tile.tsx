import Image from "next/image";
import { liisiText, liisiSurface, liisiState } from "@/components/liisi/liisi-design-system";

interface DesignPackageTileProps {
  packageLabel: string;
  title: string;
  tags: [string, string];
  imageUrl: string;
}

export function DesignPackageTile({
  packageLabel,
  title,
  tags,
  imageUrl,
}: DesignPackageTileProps) {
  return (
    <article className={liisiSurface.card}>
      <div className="relative h-36 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, 180px"
          className="object-cover"
        />
      </div>

      <div className="space-y-1 px-3 py-2.5">
        <p className={liisiText.labelSoft}>{packageLabel}</p>
        <h3 className={liisiText.cardTitle}>{title}</h3>
        <div className="space-y-1 pt-1">
          <p className={`${liisiState.badge}`}>
            {tags[0]}
          </p>
          <p className="block" />
          <p className={`${liisiState.badge}`}>
            {tags[1]}
          </p>
        </div>
      </div>
    </article>
  );
}
