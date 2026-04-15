"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    title: "Kakovost",
    description: "Se trudimo za najvišje standarde v vsakem projektu, ki ga prevzamemo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Zanesljivost",
    description: "Držimo se rokov in obljub, ki jih damo našim strankam.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Strokovnost",
    description: "Naša ekipa ima leta izkušenj in nenehno sledi novim trendom v panogi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Oseben pristop",
    description: "Vsako stranko obravnavamo individualno in prilagodimo rešitve njenim potrebam.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "2010", title: "Začetek delovanja", description: "Podjetje je bilo ustanovljeno z namenom zagotavljanja kakovostnih projektnih rešitev." },
  { year: "2015", title: "Razširitev storitev", description: "Dodali smo nove storitve in okrepili ekipo z izkušenimi inženirji." },
  { year: "2020", title: "Vodilna pozicija", description: "Postali smo prepoznaven partner na področju projektiranja v regiji." },
  { year: "2024", title: "Nenehni razvoj", description: "Nadaljujemo z rastjo in uvajanjem novih tehnologij." },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-24 bg-neutral relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Architecture background"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral/50 via-neutral/60 to-neutral/50" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-8">
                O nas
              </span>
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Gradimo prihodnost z{" "}
                <span className="text-primary">strokovnostjo</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                ATRIAL je specializirano podjetje za projektiranje in inženiring,
                ki že več kot 15 let nudi celovite rešitve na področju gradnje
                in prostorskega načrtovanja.
              </p>
              <div className="flex gap-5">
                <Link href="/contact">
                  <Button size="lg" className="shadow-lg shadow-primary/25">Kontaktirajte nas</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-5">Naša misija</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zagotavljati kakovostno projektno dokumentacijo v najkrajšem možnem
                  času, z vsemi potrebnimi podatki za nemoteno izvedbo gradnje.
                  Prizadevamo si za dolgoročne odnose z našimi strankami.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-5">Naša vizija</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Postati vodilni partner na področju projektiranja in inženiringa
                  v Sloveniji, znan po odličnosti, zanesljivosti in inovativnih
                  rešitvah za naše stranke.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-28 bg-neutral relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
              alt="Timeline background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-neutral/60" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-6">
                Naša pot
              </span>
              <h2 className="text-4xl font-bold text-secondary">
                Ključni mejniki
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="text-6xl font-bold text-primary mb-5 group-hover:text-primary/80 transition-colors">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-6">
                Naše vrednote
              </span>
              <h2 className="text-4xl font-bold text-secondary">
                Kar nas definira
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Spoznajte nas osebno
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Radi bomo spoznali vaš projekt in vam pomagali uresničiti vaše načrte.
              </p>
              <Link href="/contact">
                <Button className="bg-white !text-primary hover:bg-gray-100 font-medium">
                  Kontaktirajte nas
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}