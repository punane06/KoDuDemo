import { InteriorDesignOptions } from "@/components/liisi/interior-design-options";
import { designPackages } from "@/lib/mockData";

export default function LiisiDesignPage() {
  return <InteriorDesignOptions packages={designPackages} />;
}
