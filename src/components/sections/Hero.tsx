"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 py-2 bg-primary/10 text-primary font-medium text-xs sm:text-sm rounded-full mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Inženiring in projektiranje
            </motion.span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-secondary mb-4 sm:mb-6 leading-tight">
              Kakovostna{" "}
              <span className="text-primary">projektna</span>{" "}
              dokumentacija
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Specializirano podjetje za celovite rešitve na področju projektiranja,
              inženiringa in pridobivanja dokumentacije za gradnjo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <Link href="/contact">
                <Button size="lg" className="shadow-lg shadow-primary/25 w-full sm:w-auto">Brezplačna ponudba</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-gray-500 text-secondary hover:bg-primary hover:text-white w-full sm:w-auto">
                  Naše storitve
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                alt="Modern architecture"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}