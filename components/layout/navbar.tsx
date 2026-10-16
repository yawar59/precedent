"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { ThemeToggle } from "@/components/theme-toggle";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p className="text-gray-900 dark:text-gray-100">Precedent</p>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="rounded-full border border-black dark:border-gray-300 bg-black dark:bg-gray-800 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black dark:hover:bg-gray-700 opacity-50 cursor-not-allowed">
              Sign In (Demo)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
