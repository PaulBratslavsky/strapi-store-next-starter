import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Header, Footer } from "@/components/layout";
import { notFound } from "next/navigation";

import { getGlobalPageData } from "@/lib/data/loaders";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Store",
  description: "E-commerce example built with Next.js and Strapi",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getGlobalPageData();
  if (!data) notFound();



  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header header={data?.header} />
            <main className="flex-1 wrapper pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
