import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
    services: [
        { name: "Projektiranje", href: "/services" },
        { name: "DGD dokumentacija", href: "/services" },
        { name: "PZI dokumentacija", href: "/services" },
        { name: "PID dokumentacija", href: "/services" },
        { name: "Inženiring", href: "/services" },
    ],
    company: [
        { name: "O nas", href: "/about" },
        { name: "Storitve", href: "/services" },
        { name: "Kontakt", href: "/contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-secondary text-white relative">
            {/* Bonitet Logo - Bottom Right */}
            <a href="https://www.companywall.si/" target="_blank" rel="noopener noreferrer" className="absolute bottom-40 right-8 w-[300px] h-[150px]">
                <img
                    src="/bonitet-logo.png"
                    alt="Bonitet"
                    className="w-full h-full object-contain"
                />
            </a>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="w-[500px] h-[500px] mb-6 -mt-[200px]">
                                <img
                                    src="/atrial-logo.png"
                                    alt="ATRIAL"
                                    className="w-full h-full object-contain"
                                />
                        </div>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            Specializirano podjetje za projektiranje in inženiring.
                            Zagotavljamo kakovostno projektno dokumentacijo v najkrajšem možnem času.
                        </p>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Požeg 5a, 2327 Rače, Slovenija
                            </p>
                            <p className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                atrial@telemach.net
                            </p>
                            <p className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                040 37 60 69
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Storitve</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Podjetje</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700/50 mt-16 pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ATRIAL. Vse pravice pridržane.
                        </p>
                        <div className="flex gap-6">
                            <span className="text-gray-500 text-sm">ATRIAL, Lucija Kelhar s.p.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}