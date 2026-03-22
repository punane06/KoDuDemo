export type Apartment = {
  id: string;
  title: string;
  address: string;
  sizeM2: number;
  rooms: number;
  floor: number;
  completionDate: string;
  budgetTotalEur: number;
  budgetUsedEur: number;
  progressPercent: number;
  status: "planning" | "in-progress" | "ready";
};

export type DesignPackage = {
  id: string;
  name: string;
  subtitle: string;
  priceEur: number;
  description: string;
  highlights: string[];
  recommended?: boolean;
};

export type UserDocument = {
  id: string;
  title: string;
  category: "contract" | "invoice" | "plan" | "warranty" | "other";
  uploadedBy: string;
  uploadedAt: string;
  fileType: "pdf" | "jpg" | "png" | "docx";
  url: string;
};

export type GalleryPhoto = {
  id: string;
  room: string;
  caption: string;
  url: string;
};

export type ProgressGalleryPhoto = {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  url: string;
};

export type DeveloperProject = {
  id: string;
  name: string;
  unitCount: number;
  currentStage: string;
  progressPercent: number;
  pendingDesigns: number;
  clientUpdates: number;
  lastUpdated: string;
  estimatedCompletion: string;
};

export type ConstructionStage = {
  id: string;
  label: string;
  done: boolean;
  current?: boolean;
};

export type ProjectUnit = {
  id: string;
  name: string;
  status: string;
  designStage: string;
  packageName: string;
  progressPercent?: number;
};

export type DeveloperProjectDetail = {
  projectId: string;
  stageSummary: string;
  nextStage: string;
  stageDate: string;
  constructionStages: ConstructionStage[];
  photoUrls: string[];
  units: ProjectUnit[];
};

export type UnitMessage = {
  id: string;
  author: string;
  text: string;
  time: string;
};

export type UnitDetail = {
  unitId: string;
  clientName: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  recentMessages: UnitMessage[];
  style: string;
  flooring: string;
  bathroom: string;
  kitchen: string;
  files: Array<{
    id: string;
    title: string;
    date: string;
  }>;
  quickUploads: string[];
  notes: string;
};

export type ConstructionUpdate = {
  id: string;
  date: string;
  title: string;
  description: string;
};

export const apartment: Apartment = {
  id: "apt-001",
  title: "Sipelga 14",
  address: "Sipelga 14",
  sizeM2: 74,
  rooms: 3,
  floor: 5,
  completionDate: "September 2026",
  budgetTotalEur: 32000,
  budgetUsedEur: 19200,
  progressPercent: 60,
  status: "in-progress",
};

export const liisiConstructionStages: ConstructionStage[] = [
  { id: "st-foundation", label: "Foundation", done: true },
  { id: "st-structure",  label: "Structure",  done: true },
  { id: "st-exterior",   label: "Exterior",   done: true },
  { id: "st-interior",   label: "Interior",   done: false, current: true },
  { id: "st-handover",   label: "Handover",   done: false },
];

export const liisiLatestUpdate = {
  date: "Mar 18",
  category: "Interior Works",
  imageUrl: "/images/1.jpg",
  text: "We have completed painting your feature wall in the living room. The soft beige tone creates a warm and elegant atmosphere.",
  totalCount: 4,
};

export const liisiProgressGallery: ProgressGalleryPhoto[] = [
  {
    id: "progress-001",
    title: "Feature wall painting completed",
    category: "Interior",
    date: "Mar 18",
    description:
      "We have completed painting your feature wall in the living room. The soft beige tone creates a warm and elegant atmosphere.",
    url: "/images/Feature-wall-painting-completed.jpg",
  },
  {
    id: "progress-002",
    title: "Kitchen installation in progress",
    category: "Interior",
    date: "Mar 16",
    description:
      "Kitchen base units are installed and countertop templating has been completed for final fitting.",
    url: "/images/Kitchen-installation-in-progress.jpg",
  },
  {
    id: "progress-003",
    title: "Bathroom tiling completed",
    category: "Interior",
    date: "Mar 14",
    description:
      "Bathroom wall and floor tiles are now complete. Grouting and fixture installation are next.",
    url: "/images/Bathroom-tiling-completed.jpg",
  },
  {
    id: "progress-004",
    title: "Electrical finalization stage",
    category: "Technical",
    date: "Mar 12",
    description:
      "Switches, sockets and lighting points are being finalized across all completed interior zones.",
    url: "/images/Electrical-finalization-stage.jpg",
  },
];

export const recentUpdates: ConstructionUpdate[] = [
  {
    id: "upd-001",
    date: "Mar 18",
    title: "Tiling in progress",
    description: "Bathroom and kitchen tiling work has started.",
  },
  {
    id: "upd-002",
    date: "Mar 15",
    title: "Electrical wiring completed",
    description: "All electrical installations on floors 1-3 are complete.",
  },
  {
    id: "upd-003",
    date: "Mar 10",
    title: "Plumbing installed",
    description: "Water and sewage systems have been installed.",
  },
];

export const designPackages: DesignPackage[] = [
  {
    id: "pkg-essential",
    name: "Essential",
    subtitle: "Clean and practical",
    priceEur: 4900,
    description: "A practical baseline package with durable materials and a neutral look.",
    highlights: ["Layout consultation", "Material shortlist", "Basic lighting plan"],
  },
  {
    id: "pkg-balanced",
    name: "Balanced",
    subtitle: "Comfort + style",
    priceEur: 7900,
    description: "Balanced package for modern comfort with better finishes and custom touches.",
    highlights: ["3D room previews", "Furniture suggestions", "Color and textile set"],
    recommended: true,
  },
  {
    id: "pkg-signature",
    name: "Signature",
    subtitle: "Premium details",
    priceEur: 11900,
    description: "Premium package focused on high-impact visual identity and elevated materials.",
    highlights: ["Custom millwork concept", "Premium material board", "Styling session"],
  },
  {
    id: "pkg-bespoke",
    name: "Bespoke",
    subtitle: "Fully tailored",
    priceEur: 16900,
    description: "Fully custom design process for a one-of-a-kind home tailored to your routines.",
    highlights: ["Weekly design calls", "Vendor coordination", "End-to-end room concepts"],
  },
];

export const documents: UserDocument[] = [
  {
    id: "doc-001",
    title: "Kitchen Layout Plan v2",
    category: "plan",
    uploadedBy: "Architect",
    uploadedAt: "2026-03-18T10:20:00Z",
    fileType: "pdf",
    url: "https://example.com/docs/kitchen-layout-v2.pdf",
  },
  {
    id: "doc-002",
    title: "Electrical Plan",
    category: "plan",
    uploadedBy: "Interior Designer",
    uploadedAt: "2026-03-19T14:05:00Z",
    fileType: "pdf",
    url: "https://example.com/docs/electrical-plan.pdf",
  },
  {
    id: "doc-003",
    title: "Personal Notes - Wishlist",
    category: "other",
    uploadedBy: "Liisi",
    uploadedAt: "2026-03-20T08:45:00Z",
    fileType: "docx",
    url: "https://example.com/docs/wishlist.docx",
  },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "img-001",
    room: "Living Room",
    caption: "Reference style for sofa wall",
    url: "https://picsum.photos/400/300?random=101",
  },
  {
    id: "img-002",
    room: "Kitchen",
    caption: "Material inspiration: warm oak + matte black",
    url: "https://picsum.photos/400/300?random=102",
  },
  {
    id: "img-003",
    room: "Bedroom",
    caption: "Soft lighting reference",
    url: "https://picsum.photos/400/300?random=103",
  },
  {
    id: "img-004",
    room: "Bathroom",
    caption: "Tile pattern candidate",
    url: "https://picsum.photos/400/300?random=104",
  },
  {
    id: "img-005",
    room: "Hallway",
    caption: "Storage inspiration",
    url: "https://picsum.photos/400/300?random=105",
  },
  {
    id: "img-006",
    room: "Kids Room",
    caption: "Color palette option",
    url: "https://picsum.photos/400/300?random=106",
  },
];

export const activityFeed = [
  {
    id: "act-001",
    title: "New kitchen plan uploaded",
    time: "2h ago",
    type: "document",
  },
  {
    id: "act-002",
    title: "Balanced package marked as favorite",
    time: "1d ago",
    type: "package",
  },
  {
    id: "act-003",
    title: "Budget updated by designer",
    time: "2d ago",
    type: "budget",
  },
] as const;

export const developerProjects: DeveloperProject[] = [
  {
    id: "proj-iseara-sipelga",
    name: "Sipelga Residence",
    unitCount: 24,
    currentStage: "Interior Works",
    progressPercent: 58,
    pendingDesigns: 5,
    clientUpdates: 3,
    lastUpdated: "Yesterday",
    estimatedCompletion: "Aug 15, 2026",
  },
  {
    id: "proj-tammeka",
    name: "Tammekalda Residence",
    unitCount: 34,
    currentStage: "Finishing",
    progressPercent: 72,
    pendingDesigns: 3,
    clientUpdates: 12,
    lastUpdated: "2d ago",
    estimatedCompletion: "May 30, 2026",
  },
  {
    id: "proj-river-park",
    name: "River Park Homes",
    unitCount: 18,
    currentStage: "Exterior Works",
    progressPercent: 35,
    pendingDesigns: 6,
    clientUpdates: 2,
    lastUpdated: "Today",
    estimatedCompletion: "Oct 20, 2026",
  },
];

export const developerProjectDetails: Record<string, DeveloperProjectDetail> = {
  "proj-iseara-sipelga": {
    projectId: "proj-iseara-sipelga",
    stageSummary: "Construction Control",
    nextStage: "Finishing",
    stageDate: "Aug 15, 2026",
    constructionStages: [
      { id: "stage-1", label: "Foundation", done: true },
      { id: "stage-2", label: "Frame", done: true },
      { id: "stage-3", label: "Exterior", done: true },
      { id: "stage-4", label: "Interior", done: false, current: true },
      { id: "stage-5", label: "Finishing", done: false },
      { id: "stage-6", label: "Complete", done: false },
    ],
    photoUrls: [
      "/images/1Anu.png",
      "/images/2Anu.png",
      "/images/3Anu.png",
    ],
    units: [
      { id: "unit-14-9", name: "Iseara Sipelga 14-9", status: "Sold", designStage: "Not selected", packageName: "Light and Modern", progressPercent: 58 },
      { id: "unit-2-12", name: "Iseara Sipelga 2-12", status: "Sold", designStage: "Selected", packageName: "Dark and Premium" },
      { id: "unit-3-5", name: "Iseara Sipelga 3-5", status: "Reserved", designStage: "Selected", packageName: "Custom", progressPercent: 75 },
      { id: "unit-4-8", name: "Iseara Sipelga 4-8", status: "Sold", designStage: "Not selected", packageName: "Custom" },
      { id: "unit-1-3", name: "Iseara Sipelga 1-3", status: "Available", designStage: "Selected", packageName: "Not Selected" },
      { id: "unit-1-5", name: "Iseara Sipelga 1-5", status: "Sold", designStage: "Not selected", packageName: "Classic and Neutral" },
    ],
  },
  "proj-tammeka": {
    projectId: "proj-tammeka",
    stageSummary: "Construction Control",
    nextStage: "Complete",
    stageDate: "May 30, 2026",
    constructionStages: [
      { id: "stage-1", label: "Foundation", done: true },
      { id: "stage-2", label: "Frame", done: true },
      { id: "stage-3", label: "Exterior", done: true },
      { id: "stage-4", label: "Interior", done: true },
      { id: "stage-5", label: "Finishing", done: false, current: true },
      { id: "stage-6", label: "Complete", done: false },
    ],
    photoUrls: [
      "/images/1Anu.png",
      "/images/2Anu.png",
      "/images/3Anu.png",
    ],
    units: [
      { id: "unit-t-1", name: "Tammekalda Residence 1-4", status: "Sold", designStage: "Finishing", packageName: "Balanced" },
      { id: "unit-t-2", name: "Tammekalda Residence 2-1", status: "Sold", designStage: "Finishing", packageName: "Signature" },
    ],
  },
  "proj-river-park": {
    projectId: "proj-river-park",
    stageSummary: "Construction Control",
    nextStage: "Interior",
    stageDate: "Oct 20, 2026",
    constructionStages: [
      { id: "stage-1", label: "Foundation", done: true },
      { id: "stage-2", label: "Frame", done: true },
      { id: "stage-3", label: "Exterior", done: false, current: true },
      { id: "stage-4", label: "Interior", done: false },
      { id: "stage-5", label: "Finishing", done: false },
      { id: "stage-6", label: "Complete", done: false },
    ],
    photoUrls: [
      "/images/1Anu.png",
      "/images/2Anu.png",
      "/images/3Anu.png",
    ],
    units: [
      { id: "unit-r-1", name: "River Park Homes 1-1", status: "Available", designStage: "Planning", packageName: "Not Selected" },
      { id: "unit-r-2", name: "River Park Homes 2-3", status: "Reserved", designStage: "Planning", packageName: "Essential" },
    ],
  },
};

export const unitDetails: Record<string, UnitDetail> = {
  "unit-14-9": {
    unitId: "unit-14-9",
    clientName: "Sipelga 14-9",
    ownerName: "Mari Tamm",
    ownerEmail: "mari.tamm@example.com",
    ownerPhone: "+372 512 3457",
    recentMessages: [
      {
        id: "msg-1",
        author: "Mari Tamm",
        text: "When will the kitchen installation begin? I'm excited to see the progress.",
        time: "2h ago",
      },
      {
        id: "msg-2",
        author: "System",
        text: "2 unread messages",
        time: "Now",
      },
    ],
    style: "Light and Modern",
    flooring: "Natural Oak",
    bathroom: "Soft Beige",
    kitchen: "Warm White",
    files: [
      { id: "file-1", title: "Floor Plan.pdf", date: "11.15.2024" },
      { id: "file-2", title: "Electrical Plan.pdf", date: "12.20.2024" },
      { id: "file-3", title: "Plumbing Plan.pdf", date: "12.20.2024" },
    ],
    quickUploads: ["Floor Plan", "Electrical", "Plumbing"],
    notes: "Add notes about this unit internally. Client prefers darker finishes and wants updates before flooring is ordered.",
  },
  "unit-2-12": {
    unitId: "unit-2-12",
    clientName: "Karl",
    ownerName: "Mari Tamm",
    ownerEmail: "mari.tamm@example.com",
    ownerPhone: "+372 512 3457",
    recentMessages: [],
    style: "Dark and Premium",
    flooring: "Dark Oak",
    bathroom: "Marble Black",
    kitchen: "Dark Gray & Black",
    files: [],
    quickUploads: ["Floor Plan", "Electrical", "Plumbing"],
    notes: "Awaiting final client selection.",
  },
};

export function getDeveloperProjectById(projectId: string) {
  return developerProjects.find((project) => project.id === projectId);
}

export function getDeveloperProjectDetailById(projectId: string) {
  return developerProjectDetails[projectId];
}

export function getProjectUnit(projectId: string, unitId: string) {
  const projectDetail = getDeveloperProjectDetailById(projectId);
  return projectDetail?.units.find((unit) => unit.id === unitId);
}

export function getUnitDetailById(unitId: string) {
  return unitDetails[unitId];
}

export function getUnitDetailOrFallback(projectId: string, unitId: string) {
  const explicitDetail = getUnitDetailById(unitId);
  if (explicitDetail) {
    return explicitDetail;
  }

  const unit = getProjectUnit(projectId, unitId);
  if (!unit) {
    return undefined;
  }

  // Fallback keeps existing unit links valid even when full per-unit data is not added yet.
  return {
    unitId: unit.id,
    clientName: unit.name,
    ownerName: "Project Team",
    ownerEmail: "team@kodu.demo",
    ownerPhone: "+372 5550 0000",
    recentMessages: [],
    style: unit.packageName,
    flooring: "Pending",
    bathroom: "Pending",
    kitchen: "Pending",
    files: [],
    quickUploads: ["Floor Plan", "Electrical", "Plumbing"],
    notes: "Detailed unit configuration is pending and will be synced from the design team input.",
  } satisfies UnitDetail;
}
