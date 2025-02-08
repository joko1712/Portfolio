import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { ScrollShadow } from "@heroui/scroll-shadow";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontPlayfair } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/puck.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
          }}
        >
          <ScrollShadow hideScrollBar>
            <div className="relative flex flex-col h-screen">
              <div className={fontPlayfair.variable}>
                <Navbar />
              </div>
              <main className="w-full px-6">{children}</main>
              <footer className="my-footer w-full flex items-center justify-center py-3">
                <p className="text-default-500">
                  &copy; {new Date().getFullYear()} {siteConfig.name}
                </p>
                <span className="mx-2 text-default-500">•</span>
                <p className="text-default-500">Powered by </p>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current m-2"
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                >
                  <p className="text-primary"> HeroUI</p>
                </Link>
                <p className="text-default-500">+</p>

                <Link
                  isExternal
                  className="flex items-center gap-1 text-current m-2"
                  href="https://nextjs.org/"
                  title="nextjs.com homepage"
                >
                  <p className="text-primary"> NextJs</p>
                </Link>
              </footer>
            </div>
          </ScrollShadow>
        </Providers>
      </body>
    </html>
  );
}
