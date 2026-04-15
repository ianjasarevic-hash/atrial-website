"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Realiziranih projektov" },
  { value: "15+", label: "Let izkušenj" },
  { value: "100%", label: "Zadovoljnih strank" },
  { value: "48h", label: "Povprečen čas odgovora" },
];

const certifications = [
  { name: "Registracija pri GZS", description: "vpis v register poslovnih subjektov" },
  { name: "Pooblastilo za projektiranje", description: "pooblastilo za vodenje projektov" },
  { name: "Certificirani inženirji", description: "stalno strokovno izobraževanje" },
];

export default function TrustSection() {
  return (
    <section className="py-28 bg-neutral">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center md:border-r md:border-gray-200 md:last:border-r-0"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2">{cert.name}</h4>
                <p className="text-gray-500 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}