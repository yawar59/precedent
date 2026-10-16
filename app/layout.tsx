import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(sfPro.variable, inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div
            className="fixed h-screen w-full bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
            data-testid="background-gradient"
          />
          <Suspense fallback="...">
            <Navbar />
          </Suspense>
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
          <VercelAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
