"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/animations/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="overflow-hidden bg-gray-700 min-h-screen">
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 "
      >
        <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Welcome to Maqesense!
        </div>
        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          This is our internal tools site! gtfo if you not supposed to be here
        </div>
        <Link href="/portfolio">
          <Button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Portfolio
          </Button>
        </Link>
        <Link href="/test">
          <Button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Test
          </Button>
        </Link>
      </motion.div>
    </AuroraBackground>
    // </main>
  );
}
