// ── products.ts ─────────────────────────────────────────────────────────────
// This data will be replaced by API calls from the admin panel.
// Shape is intentionally flat so it maps directly to a DB schema.

export type ProductCategory = "whole-spices" | "ground-spices";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  origin: string;
  image: string;
  badge?: string; // e.g. "Best Seller" | "Organic" | "Certified"
  highlights: string[];
  specifications: { label: string; value: string }[];
  minOrderQty: string;
  packaging: string[];
  certifications: string[];
  featured: boolean;
}

export const CATEGORIES: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "whole-spices", label: "Whole Spices" },
  { value: "ground-spices", label: "Ground Spices" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "basmati-rice",
    name: "Basmati Rice",
    category: "whole-spices",
    categoryLabel: "Whole Spices",
    tagline: "Extra-long grain aromatic rice, aged for depth",
    description:
      "Sourced exclusively from the fertile Indo-Gangetic plains, our Basmati Rice is aged for a minimum of 12 months to develop its signature long-grain structure and intoxicating floral aroma. Each lot is triple-sorted and moisture-tested before dispatch.",
    origin: "Punjab & Haryana, India",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    highlights: [
      "Extra-long grain length (8.3 mm+)",
      "Aged minimum 12 months",
      "Low moisture ≤12.5%",
      "Triple-cleaned & laser-sorted",
    ],
    specifications: [
      { label: "Grain Length", value: "8.3 mm (cooked: 16+ mm)" },
      { label: "Moisture", value: "≤ 12.5%" },
      { label: "Broken Grains", value: "≤ 1%" },
      { label: "Purity", value: "99.5% min" },
      { label: "Aroma", value: "Class A — Strong" },
      { label: "Processing", value: "Sortex / Steam / Raw" },
    ],
    minOrderQty: "20 MT (1 × 20ft FCL)",
    packaging: [
      "5 kg PP bags",
      "10 kg PP bags",
      "25 kg jute/PP bags",
      "Custom branding available",
    ],
    certifications: ["FSSAI", "APEDA", "ISO 9001:2015", "Halal"],
    featured: true,
  },
  {
    id: "2",
    slug: "sharbati-wheat",
    name: "Sharbati Wheat",
    category: "whole-spices",
    categoryLabel: "Whole Spices",
    tagline: "Golden high-protein wheat from India's Malwa plateau",
    description:
      "Sharbati wheat, known as the 'golden grain', grows in the black cotton soil of Madhya Pradesh's Sehore region. Its naturally high protein content (12–14%) and golden-amber hue make it the preferred choice for premium flour mills worldwide.",
    origin: "Sehore, Madhya Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80",
    badge: "Certified",
    highlights: [
      "Protein content 12–14%",
      "Golden amber grain colour",
      "High gluten quality",
      "Natural sweetness (no additives)",
    ],
    specifications: [
      { label: "Protein", value: "12–14%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Gluten Index", value: "85–95" },
      { label: "Test Weight", value: "78–82 kg/hl" },
      { label: "Admixture", value: "≤ 2%" },
      { label: "Variety", value: "Sharbati / GW496" },
    ],
    minOrderQty: "25 MT (1 × 20ft FCL)",
    packaging: ["25 kg PP bags", "50 kg jute bags", "Bulk (container load)"],
    certifications: ["FSSAI", "APEDA", "ISO 9001:2015"],
    featured: true,
  },
  {
    id: "3",
    slug: "turmeric-finger",
    name: "Turmeric Finger",
    category: "whole-spices",
    categoryLabel: "Whole Spices",
    tagline: "High-curcumin rhizomes from Erode & Salem",
    description:
      "Our Turmeric Fingers are sourced from the Erode belt of Tamil Nadu — the world's largest turmeric trading hub. With curcumin content exceeding 3.5%, these rhizomes deliver vibrant colour and potent bioactivity for food, cosmetic, and nutraceutical applications.",
    origin: "Erode, Tamil Nadu, India",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop&q=80",
    badge: "Organic",
    highlights: [
      "Curcumin content ≥ 3.5%",
      "Moisture ≤ 10%",
      "Steam-sterilised available",
      "Varieties: Erode / Salem / Rajapuri",
    ],
    specifications: [
      { label: "Curcumin", value: "3.5% min" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Volatile Oil", value: "2.5–5%" },
      { label: "Colour (ASTA)", value: "25 min" },
      { label: "Admixture", value: "≤ 1%" },
      { label: "Form", value: "Finger / Bulb / Slice" },
    ],
    minOrderQty: "5 MT",
    packaging: ["10 kg PP bags", "25 kg jute bags", "50 kg jute bags"],
    certifications: [
      "FSSAI",
      "Spices Board India",
      "ISO 22000",
      "Organic (on request)",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    category: "whole-spices",
    categoryLabel: "Whole Spices",
    tagline: "Aromatic whole jeera from Rajasthan's arid fields",
    description:
      "Grown in the sandy soils of Rajasthan and Gujarat, our Cumin Seeds (Jeera) are machine-cleaned and sortexed to achieve uniform brown colour and high volatile oil content. Widely exported to Europe, the Middle East, and North America for culinary and industrial use.",
    origin: "Unjha, Gujarat & Rajasthan, India",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "High volatile oil 3–4%",
      "Machine-cleaned & sortexed",
      "Bold & regular sizes",
      "Low foreign matter ≤0.2%",
    ],
    specifications: [
      { label: "Volatile Oil", value: "3–4%" },
      { label: "Moisture", value: "≤ 9%" },
      { label: "Foreign Matter", value: "≤ 0.2%" },
      { label: "Purity", value: "99% min" },
      { label: "Colour", value: "Uniform brown" },
      { label: "Size", value: "Bold / Regular" },
    ],
    minOrderQty: "5 MT",
    packaging: ["10 kg PP bags", "25 kg PP bags", "50 kg jute bags"],
    certifications: [
      "FSSAI",
      "Spices Board India",
      "ISO 9001:2015",
      "EU Compliant",
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "ground-spices",
    categoryLabel: "Ground Spices",
    tagline: "Vibrant ground turmeric with high colour value",
    description:
      "Milled from select Erode-origin rhizomes in our HACCP-certified facility, our Turmeric Powder offers consistent high colour value (120+ ASTA), making it ideal for food manufacturers, spice blenders, and cosmetic formulators demanding colour consistency batch after batch.",
    origin: "Processed in Ahmedabad, Gujarat",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    highlights: [
      "Colour value 120+ ASTA",
      "Curcumin ≥ 3%",
      "Steam-sterilised for food safety",
      "Consistent batch colour",
    ],
    specifications: [
      { label: "Curcumin", value: "3% min" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "ASTA Colour", value: "120 min" },
      { label: "Mesh Size", value: "40–60 mesh" },
      { label: "Volatile Oil", value: "2–5%" },
      { label: "E. Coli", value: "Absent" },
    ],
    minOrderQty: "5 MT",
    packaging: ["1 kg retail pouches", "5 kg PP bags", "25 kg kraft bags"],
    certifications: ["FSSAI", "HACCP", "ISO 22000", "Halal"],
    featured: false,
  },
  {
    id: "6",
    slug: "coriander-powder",
    name: "Coriander Powder",
    category: "ground-spices",
    categoryLabel: "Ground Spices",
    tagline: "Mildly citrusy ground dhania for global kitchens",
    description:
      "Sourced from Rajasthan's premium coriander-growing belts, our Coriander Powder is cold-ground to retain maximum volatile oil and citrusy-earthy aroma. A staple for curry pastes, spice blends, and ready-meal manufacturers worldwide.",
    origin: "Kota, Rajasthan, India",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "High volatile oil ≥ 0.3 ml/100g",
      "Consistent pale-yellow colour",
      "Low moisture ≤ 10%",
      "Available steam-sterilised",
    ],
    specifications: [
      { label: "Volatile Oil", value: "0.3 ml/100g min" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Total Ash", value: "≤ 8%" },
      { label: "Mesh Size", value: "40 mesh" },
      { label: "Foreign Matter", value: "≤ 0.5%" },
      { label: "Salmonella", value: "Absent/25g" },
    ],
    minOrderQty: "5 MT",
    packaging: ["1 kg retail pouches", "5 kg PP bags", "25 kg kraft bags"],
    certifications: ["FSSAI", "HACCP", "ISO 9001:2015"],
    featured: false,
  },
  {
    id: "7",
    slug: "chilli-powder",
    name: "Red Chilli Powder",
    category: "ground-spices",
    categoryLabel: "Ground Spices",
    tagline: "Deep-red Byadagi & Teja blend — colour & heat",
    description:
      "A carefully crafted blend of Byadagi (high colour, mild heat) and Teja (high heat) chillies, our Red Chilli Powder delivers a deep mahogany-red colour alongside calibrated pungency. Available in multiple SHU grades to suit diverse export markets.",
    origin: "Guntur, Andhra Pradesh & Karnataka, India",
    image:
      "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "ASTA colour 80–180 (grade-wise)",
      "SHU range 10,000–80,000",
      "Steam-sterilised batch",
      "Aflatoxin-tested",
    ],
    specifications: [
      { label: "ASTA Colour", value: "80–180 (grade)" },
      { label: "Moisture", value: "≤ 10%" },
      { label: "Capsaicin", value: "0.1–0.5%" },
      { label: "Total Ash", value: "≤ 8%" },
      { label: "Aflatoxin B1", value: "≤ 5 ppb" },
      { label: "Salmonella", value: "Absent/25g" },
    ],
    minOrderQty: "5 MT",
    packaging: ["1 kg retail pouches", "5 kg PP bags", "25 kg kraft bags"],
    certifications: [
      "FSSAI",
      "HACCP",
      "Spices Board India",
      "EU MRL Compliant",
    ],
    featured: true,
  },
  {
    id: "8",
    slug: "chana-dal",
    name: "Chana Dal",
    category: "whole-spices",
    categoryLabel: "Whole Spices",
    tagline: "Split Bengal gram — high protein, golden-yellow",
    description:
      "Our Chana Dal (split Bengal gram) is machine-processed to achieve a uniform golden-yellow hue with minimal split and broken grains. A high-protein staple grain exported widely to the Middle East, Africa, and Southeast Asia.",
    origin: "Maharashtra & Madhya Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80",
    highlights: [
      "Protein 19–22%",
      "Machine-cleaned & polished",
      "Low admixture ≤ 1%",
      "No artificial colouring",
    ],
    specifications: [
      { label: "Protein", value: "19–22%" },
      { label: "Moisture", value: "≤ 12%" },
      { label: "Foreign Matter", value: "≤ 1%" },
      { label: "Broken", value: "≤ 3%" },
      { label: "Purity", value: "98% min" },
      { label: "Weevilled", value: "Nil" },
    ],
    minOrderQty: "20 MT (1 × 20ft FCL)",
    packaging: ["1 kg retail pouches", "25 kg PP bags", "50 kg jute bags"],
    certifications: ["FSSAI", "APEDA", "ISO 9001:2015"],
    featured: false,
  },
];
