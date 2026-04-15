"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/Button";

const services = [
  "Projektiranje",
  "DGD Dokumentacija",
  "PZI Dokumentacija",
  "PID Dokumentacija",
  "Inženiring",
  "Urbanizem",
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-6">
            Naše storitve
          </span>
          <h2 className="text-4xl font-bold text-secondary mb-5">
            Celovite rešitve za vaš projekt
          </h2>
        </motion.div>

        {/* Services List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral rounded-xl p-6 flex items-center justify-center group hover:bg-primary/5 transition-colors duration-300"
            >
              <span className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                {service}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg">Oglejte si vse storitve</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}