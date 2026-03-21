import Image from "next/image";

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
    <article className="overflow-hidden rounded-2xl border border-[#dddddd] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
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
        <p className="text-[13px] text-[#858585]">{packageLabel}</p>
        <h3 className="text-[30px] font-medium leading-tight text-[#2b2b2b]">{title}</h3>
        <div className="space-y-1 pt-1">
          <p className="inline-block rounded-md bg-[#f2f0ed] px-2 py-0.5 text-xs text-[#878787]">
            {tags[0]}
          </p>
          <p className="block" />
          <p className="inline-block rounded-md bg-[#f2f0ed] px-2 py-0.5 text-xs text-[#878787]">
            {tags[1]}
          </p>
        </div>
      </div>
    </article>
  );
}
