import { AnuPageShell } from "@/components/anu/anu-page-shell";
import { AnuProjectCard } from "@/components/anu/anu-project-card";
import { developerProjects } from "@/lib/mockData";

export default function AnuPage() {
  return (
    <AnuPageShell projectCount={developerProjects.length}>
      {developerProjects.map((project) => (
        <AnuProjectCard key={project.id} project={project} />
      ))}
    </AnuPageShell>
  );
}