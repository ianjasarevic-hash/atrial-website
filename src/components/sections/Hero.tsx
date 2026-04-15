"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-neutral">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80"
          alt="Modern architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 py-2 bg-white/20 text-white font-medium text-xs sm:text-sm rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Inženiring in projektiranje
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Kakovostna{" "}
            <span className="text-primary">projektna</span>{" "}
            dokumentacija
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 max-w-lg leading-relaxed">
            Specializirano podjetje za celovite rešitve na področju projektiranja,
            inženiringa in pridobivanja dokumentacije za gradnjo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Brezplačna ponudba</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                Naše storitve
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}