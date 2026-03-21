import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageSquare, Upload } from "lucide-react";

import { AnuPanel } from "@/components/anu/anu-panel";
import { anuControls, anuText } from "@/components/anu/anu-design-system";
import { AnuViewFrame } from "@/components/anu/anu-view-frame";
import {
  developerProjects,
  getDeveloperProjectById,
  getDeveloperProjectDetailById,
  getProjectUnit,
  getUnitDetailOrFallback,
} from "@/lib/mockData";

type UnitDetailPageProps = {
  params: Promise<{
    projectId: string;
    unitId: string;
  }>;
};

export function generateStaticParams() {
  return developerProjects.flatMap((project) => {
    const details = getDeveloperProjectDetailById(project.id);
    const units = details?.units ?? [];

    return units.map((unit) => ({
      projectId: project.id,
      unitId: unit.id,
    }));
  });
}

export default async function UnitDetailPage({ params }: UnitDetailPageProps) {
  const { projectId, unitId } = await params;
  const project = getDeveloperProjectById(projectId);
  const unit = getProjectUnit(projectId, unitId);
  const detail = getUnitDetailOrFallback(projectId, unitId);

  if (!project || !unit || !detail) {
    notFound();
  }

  return (
    <AnuViewFrame
      title={unit.name}
      backHref={`/anu/${projectId}`}
      actions={
        <div className="flex items-center gap-2">
          <span className={anuControls.subtlePillCompact}>
            {unit.status}
          </span>
          <button className={anuControls.primaryButtonCompact}>
            <MessageSquare size={10} />
            Send Message
          </button>
        </div>
      }
    >
      <div className="space-y-2.5">
        <div className="grid gap-2.5 lg:grid-cols-[1.04fr_0.96fr]">
          <AnuPanel title="Client" titleClassName={anuText.panelHeading} contentClassName="space-y-2">
            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-1.5 text-[11px] text-[#565656]">
              <p className={anuText.fieldValue}>{detail.clientName}</p>
              <p className="mt-1">Owner: {detail.ownerName}</p>
              <p>Email: {detail.ownerEmail}</p>
              <p>Phone: {detail.ownerPhone}</p>
            </div>

            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] p-2">
              <p className={`mb-1.5 ${anuText.panelHeading}`}>Recent Messages</p>
              <div className="space-y-1.5">
                {detail.recentMessages.length > 0 ? detail.recentMessages.map((message) => (
                  <article key={message.id} className="rounded-[6px] border border-[#e3e3e3] bg-[#f6f6f6] p-1.5">
                    <p className={anuText.itemTitle}>{message.author}</p>
                    <p className={anuText.itemBody}>{message.text}</p>
                    <p className={`mt-1 ${anuText.tiny}`}>{message.time}</p>
                  </article>
                )) : <p className={anuText.body}>No recent messages.</p>}
              </div>
            </div>
          </AnuPanel>

          <AnuPanel
            title="Interior Design"
            titleClassName={anuText.panelHeading}
            action={<button className={anuControls.subtleButtonCompact}>Edit Selection</button>}
            contentClassName="space-y-2"
          >
            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5">
              <p className={anuText.micro}>Style</p>
              <p className={`mt-1 ${anuText.fieldValue}`}>{detail.style}</p>
            </div>

            <div className="grid gap-1.5 sm:grid-cols-3">
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5">
                <p className={anuText.micro}>Flooring</p>
                <p className={`mt-1 ${anuText.fieldValue}`}>{detail.flooring}</p>
              </div>
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5">
                <p className={anuText.micro}>Bathroom</p>
                <p className={`mt-1 ${anuText.fieldValue}`}>{detail.bathroom}</p>
              </div>
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5">
                <p className={anuText.micro}>Kitchen</p>
                <p className={`mt-1 ${anuText.fieldValue}`}>{detail.kitchen}</p>
              </div>
            </div>
          </AnuPanel>
        </div>

        <div className="grid gap-2.5 lg:grid-cols-[1.1fr_0.9fr]">
          <AnuPanel
            title="Files & Plans"
            titleClassName={anuText.panelHeading}
            action={
              <button className={`inline-flex items-center gap-1 ${anuControls.subtleButtonCompact}`}>
                <Upload size={10} />
                Upload File
              </button>
            }
            contentClassName="space-y-1.5"
          >
            {detail.files.map((file) => (
              <article key={file.id} className="flex items-center justify-between rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5">
                <div>
                  <p className={anuText.itemTitle}>{file.title}</p>
                  <p className={anuText.itemBody}>{file.date}</p>
                </div>
                <button className={anuControls.subtleButtonCompact}>Download</button>
              </article>
            ))}

            {detail.files.length === 0 ? <p className={anuText.body}>No files uploaded yet.</p> : null}

            <div className="grid gap-1.5 sm:grid-cols-3">
              {detail.quickUploads.map((item) => (
                <button key={item} className="rounded-[6px] border border-[#d6d6d6] bg-[#f6f6f6] px-2 py-0.5 text-[10px] text-[#5a5a5a]">
                  {item}
                </button>
              ))}
            </div>
          </AnuPanel>

          <AnuPanel title="Unit Notes" titleClassName={anuText.panelHeading} contentClassName="space-y-2">
            <div className="min-h-24 rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2 py-1.5 text-[11px] text-[#666666]">
              {detail.notes}
            </div>

            <div className="flex justify-end gap-2">
              <Link
                href={`/anu/${projectId}`}
                className={anuControls.subtleButtonCompact}
              >
                Back to project
              </Link>
              <button className={anuControls.primaryButtonCompact}>Save Notes</button>
            </div>
          </AnuPanel>
        </div>
      </div>
    </AnuViewFrame>
  );
}