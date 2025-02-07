"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { StrapiImage } from "@/components/custom/StrapiImage";
import { ShoppingCart, UserIcon, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import type { HeaderData, ButtonVariant } from "@/types";

function IconPicker(icon: string) {
  switch (icon) {
    case "ShoppingCart":
      return <ShoppingCart className="mr-2 h-4 w-4" />;
    case "UserIcon":
      return <UserIcon className="mr-2 h-4 w-4" />;
    default:
      return null;
  }
}

export function SheetMenu({
  header,
  className,
}: {
  header: HeaderData;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!header) return null;

  const { logo, navItems, cta } = header;

  const logoUrl = logo?.image?.url;
  const altText = logo?.image?.alternativeText;

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col h-full">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center justify-between mt-4 mb-8">
                  {logoUrl && (
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={() => setOpen(false)}
                    >
                      <StrapiImage
                        src={logoUrl}
                        alt={altText}
                        height={40}
                        width={40}
                        priority
                      />
                      <span className="font-bold text-2xl ml-3">
                        {logo?.text}
                      </span>
                    </Link>
                  )}
                  <ThemeToggle />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col flex-1">
              <nav className="space-y-4">
                {navItems?.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </nav>
              <div className="mt-auto space-y-4 pb-4">
                {cta?.map((item, index) => (
                  <Button
                    key={index}
                    variant={item?.variant as ButtonVariant}
                    className="w-full justify-start"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.href}>
                      {item.icon && IconPicker(item.icon)} {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
