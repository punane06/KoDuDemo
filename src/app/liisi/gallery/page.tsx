import { ProgressGalleryViewer } from "@/components/liisi/progress-gallery-viewer";
import { liisiProgressGallery } from "@/lib/mockData";

export default function LiisiGalleryPage() {
  return <ProgressGalleryViewer photos={liisiProgressGallery} />;
}
