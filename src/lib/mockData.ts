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

export const apartment: Apartment = {
  id: "apt-001",
  title: "Liisi New Home",
  address: "Tartu mnt 25, Tallinn",
  sizeM2: 74,
  rooms: 3,
  floor: 5,
  completionDate: "2026-06-30",
  budgetTotalEur: 32000,
  budgetUsedEur: 14500,
  progressPercent: 46,
  status: "in-progress",
};

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
