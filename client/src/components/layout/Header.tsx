import type { HeaderData, ButtonVariant } from "@/types";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SheetMenu } from "@/components/layout/SheetMenu";

function IconPicker(icon: string) {
  switch (icon) {
    case "ShoppingCart":
      return <ShoppingCart />;
    case "UserIcon":
      return <UserIcon />;
  }
}

import { Button } from "@/components/ui/button";
import { StrapiImage } from "@/components/custom/StrapiImage";

export function Header({ header }: { header: HeaderData }) {
  if (!header) return null;

  const { logo, navItems, cta } = header;

  const logoUrl = logo?.image?.url;
  const altText = logo?.image?.alternativeText;

  return (
    <header className="w-full border-b p-2">
      <div className="wrapper flex-between">
        <div className="flex-start">
          {logoUrl && (
            <Link href="/" className="flex-start">
              <StrapiImage
                src={logoUrl}
                alt={altText}
                height={40}
                width={40}
                priority
              />
              <span className="hidden sm:block font-bold text-2xl ml-3">
                {logo?.text}
              </span>
            </Link>
          )}
        </div>
        {navItems && (
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {cta.map((item, index) => (
              <Button
                key={index}
                asChild
                variant={item?.variant as ButtonVariant}
              >
                <Link href={item.href}>
                  {item.icon && IconPicker(item.icon)} {item.label}
                </Link>
              </Button>
            ))}
            <ThemeToggle />
          </div>
          <SheetMenu header={header} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
