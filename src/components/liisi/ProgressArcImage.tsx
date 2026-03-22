import Image from "next/image";

interface ProgressArcImageProps {
  percent?: number; // for alt text only
}

export function ProgressArcImage({ percent }: ProgressArcImageProps) {
  return (
    <div className="flex justify-center my-1">
      <Image
        src="/progress-arc.svg"
        alt={percent ? `${percent}% complete` : "Construction progress arc"}
        width={295}
        height={184}
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />
    </div>
  );
}
