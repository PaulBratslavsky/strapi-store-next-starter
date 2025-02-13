export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";


export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  url: string;
}

interface NavItem {
  id: number;
  label: string;
  href: string;
  external: boolean;
  variant: ButtonVariant | null;
  icon: string;
};

interface Cta {
  id: number;
  label: string;
  href: string;
  external: boolean;
  variant: ButtonVariant | null;
  icon: string;
}

interface Logo {
  id: number;
  text: string;
  image: Image;
}

export interface HeaderData {
  id: number;
  documentId: string;
  logo: Logo;
  navItems: NavItem[];
  cta: Cta[];
}

export interface ProductResponse {
  data: ProductData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ProductData {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  featured?: boolean;
  price: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: Image[];
  banner?: Image;
  quantity: number;
  basePath: string;
  className?: string;
  features: {
    id: number;
    text: string;
  }[];
} 


