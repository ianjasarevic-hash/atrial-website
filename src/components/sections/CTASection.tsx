"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pripravljeni začeti svoj projekt?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stopite v stik z nami in skupaj bomo uresničili vaše načrte.
            Nudimo brezplačno posvetovanje in oceno projekta.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white !text-primary hover:bg-gray-100 shadow-lg"
              >
                Kontaktirajte nas
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Oglejte si storitve
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}