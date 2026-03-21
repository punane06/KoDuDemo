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
          <span className={anuControls.subtlePill}>
            {unit.status}
          </span>
          <button className={anuControls.primaryButton}>
            <MessageSquare size={11} />
            Send Message
          </button>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="grid gap-3 lg:grid-cols-[1.04fr_0.96fr]">
          <AnuPanel title="Client" contentClassName="space-y-2.5">
            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2 text-[12px] text-[#565656]">
              <p className="text-[12px] font-medium text-[#2f2f2f]">{detail.clientName}</p>
              <p className="mt-1">Owner: {detail.ownerName}</p>
              <p>Email: {detail.ownerEmail}</p>
              <p>Phone: {detail.ownerPhone}</p>
            </div>

            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] p-2.5">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.05em] text-[#666666]">Recent Messages</p>
              <div className="space-y-2">
                {detail.recentMessages.length > 0 ? detail.recentMessages.map((message) => (
                  <article key={message.id} className="rounded-[6px] border border-[#e3e3e3] bg-[#f6f6f6] p-2">
                    <p className="text-[12px] font-medium text-[#343434]">{message.author}</p>
                    <p className="text-[11px] leading-tight text-[#717171]">{message.text}</p>
                    <p className="mt-1 text-[10px] text-[#8a8a8a]">{message.time}</p>
                  </article>
                )) : <p className={anuText.body}>No recent messages.</p>}
              </div>
            </div>
          </AnuPanel>

          <AnuPanel
            title="Interior Design"
            action={<button className={anuControls.subtleButton}>Edit Selection</button>}
            contentClassName="space-y-2.5"
          >
            <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2">
              <p className={anuText.micro}>Style</p>
              <p className="mt-1 text-[12px] font-medium text-[#2f2f2f]">{detail.style}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2">
                <p className={anuText.micro}>Flooring</p>
                <p className="mt-1 text-[12px] font-medium text-[#2f2f2f]">{detail.flooring}</p>
              </div>
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2">
                <p className={anuText.micro}>Bathroom</p>
                <p className="mt-1 text-[12px] font-medium text-[#2f2f2f]">{detail.bathroom}</p>
              </div>
              <div className="rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2">
                <p className={anuText.micro}>Kitchen</p>
                <p className="mt-1 text-[12px] font-medium text-[#2f2f2f]">{detail.kitchen}</p>
              </div>
            </div>
          </AnuPanel>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <AnuPanel
            title="Files & Plans"
            action={
              <button className={`inline-flex items-center gap-1 ${anuControls.subtleButton}`}>
                <Upload size={11} />
                Upload File
              </button>
            }
            contentClassName="space-y-2"
          >
            {detail.files.map((file) => (
              <article key={file.id} className="flex items-center justify-between rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2">
                <div>
                  <p className="text-[12px] font-medium text-[#313131]">{file.title}</p>
                  <p className="text-[11px] text-[#787878]">{file.date}</p>
                </div>
                <button className={anuControls.subtleButton}>Download</button>
              </article>
            ))}

            {detail.files.length === 0 ? <p className={anuText.body}>No files uploaded yet.</p> : null}

            <div className="grid gap-2 sm:grid-cols-3">
              {detail.quickUploads.map((item) => (
                <button key={item} className="rounded-[6px] border border-[#d6d6d6] bg-[#f6f6f6] px-2 py-1 text-[11px] text-[#5a5a5a]">
                  {item}
                </button>
              ))}
            </div>
          </AnuPanel>

          <AnuPanel title="Unit Notes" contentClassName="space-y-2.5">
            <div className="min-h-28 rounded-[8px] border border-[#dddddd] bg-[#fbfbfb] px-2.5 py-2 text-[12px] text-[#666666]">
              {detail.notes}
            </div>

            <div className="flex justify-end gap-2">
              <Link
                href={`/anu/${projectId}`}
                className={anuControls.subtleButton}
              >
                Back to project
              </Link>
              <button className={anuControls.primaryButton}>Save Notes</button>
            </div>
          </AnuPanel>
        </div>
      </div>
    </AnuViewFrame>
  );
}