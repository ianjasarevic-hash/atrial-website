"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card from "@/components/ui/Card";
import Image from "next/image";

const services = [
  {
    id: "projektiranje",
    title: "Projektiranje",
    description: "Celovito načrtovanje objektov vseh vrst, od idejne zasnove do izvedbenega načrta. Naša ekipa zagotavlja kreativne in funkcionalne rešitve, prilagojene vašim potrebam.",
    features: [
      "Arhitektonsko projektiranje",
      "Gradbeni načrti",
      "Instalacijski načrti (elektro, strojno, vodovod)",
      "Energetske izračune in certifikate",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    id: "dgd",
    title: "DGD Dokumentacija",
    description: "Projektna dokumentacija za pridobitev mnenj in gradbenega dovoljenja.",
    features: [
      "Idejna zasnova (IDZ)",
      "Projekt za pridobitev gradbenega dovoljenja (DGD)",
      "Situacijski načrt",
      "Tlorisi in prerezi",
      "Pristop k upravnim organom",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "pzi",
    title: "PZI Dokumentacija",
    description: "Projekt za izvedbo z detejlnimi načrti in popisi. Pripravimo izvedbeni načrt z vsemi detajli, ki jih potrebujejo izvajalci za kakovostno izvedbo.",
    features: [
      "Detajlni načrti",
      "Materialni specifikacije",
      "Popis del in analitična cena",
      "Terminski plani",
      "Projektantski nadzor",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: "pid",
    title: "PID Dokumentacija",
    description: "Dokumentacija ki prikazuje dejansko izvedeno stanje objekta po končani gradnji in služi za pridobitev uporabnega dovoljenja.",
    features: [
      "Delavniški načrti",
      "Montažne sheme",
      "Specifikacije materialov",
      "Sestavni načrti",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "inzeniring",
    title: "Inženiring",
    description: "Svetovanje in strokovna podpora skozi celoten gradbeni projekt. Nudimo celovito projektno vodenje in koordinacijo vseh faz.",
    features: [
      "Projektno vodenje",
      "Koordinacija med udeleženci",
      "Svetovanje pri izbiri materialov",
      "Optimizacija stroškov",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "urbanizem",
    title: "Urbanizem",
    description: "Načrtovanje prostora in priprava urbanistične dokumentacije. Pomagamo vam pridobiti vsa potrebna dovoljenja in soglasja.",
    features: [
      "Urbanistični načrti",
      "Prostorsko načrtovanje",
      "Soglasja in dovoljenja",
      "Analize obstoječega stanja",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-36 pb-24 bg-neutral relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
              alt="Construction background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral/60 via-neutral/50 to-neutral/60" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full mb-8">
                Storitve
              </span>
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Celovite rešitve za{" "}
                <span className="text-primary">vaš projekt</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Ponujamo celoten spekter storitev na področju projektiranja in inženiringa.
                Od ideje do realizacije - smo vaš zanesljiv partner.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-16"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={item}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <Card className="lg:sticky lg:top-32 overflow-hidden relative">
                    {service.id === "projektiranje" && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                          alt="Projektiranje"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    {service.id === "dgd" && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                          alt="DGD Dokumentacija"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    {service.id === "pzi" && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                          alt="PZI Dokumentacija"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    {service.id === "pid" && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                          alt="PID Dokumentacija"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    {(service.id === "inzeniring" || service.id === "inženiring") && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                          alt="Inženiring"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    {service.id === "urbanizem" && (
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                          alt="Urbanizem"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/50" />
                      </div>
                    )}
                    <div className="relative z-10">
                    {service.id === "projektiranje" || service.id === "dgd" || service.id === "pzi" || service.id === "pid" || service.id === "inzeniring" || service.id === "inženiring" || service.id === "urbanizem" ? (
                      <>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                          {service.title}
                        </h2>
                        <p className="text-white/80 text-lg mb-6">
                          {service.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-secondary mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                          {service.description}
                        </p>
                      </>
                    )}
                    </div>
                  </Card>

                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-4 p-4 bg-neutral rounded-xl"
                      >
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-secondary font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
                Potrebujete nasvet?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Stopite v stik z nami in skupaj bomo našli najboljšo rešitev za vaš projekt.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Kontaktirajte nas
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}