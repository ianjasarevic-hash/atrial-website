"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral overflow-hidden">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Modern architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Inženiring in projektiranje
            </motion.span>

            <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Kakovostna{" "}
              <span className="text-primary">projektna</span>{" "}
              dokumentacija
            </h1>

            <p className="text-xl text-gray-700 mb-10 max-w-lg leading-relaxed">
              Specializirano podjetje za celovite rešitve na področju projektiranja,
              inženiringa in pridobivanja dokumentacije za gradnjo.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/contact">
                <Button size="lg" className="shadow-lg shadow-primary/25">Brezplačna ponudba</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-gray-500 text-secondary hover:bg-primary hover:text-white">
                  Naše storitve
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual - Architectural Image - Removed since we have full background now */}
        </div>
      </div>
    </section>
  );
}