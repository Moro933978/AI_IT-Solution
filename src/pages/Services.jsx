import React from 'react';

const SERVICES_DATA = [
    {
        id: 1,
        title: 'Computer Services',
        desc: 'Professional hardware and software repairs, system optimization, and network troubleshooting setup.',
        icon: '💻',
        imgSrc: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=600&auto=format&fit=crop',
        features: ['Hardware & Software Repair', 'System Performance Optimization', 'Network Troubleshooting'],
        badgeBg: 'from-blue-500/20 to-cyan-500/20',
        badgeText: 'text-cyan-400',
        btnBg: 'from-blue-500/10 to-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:from-blue-500 hover:to-cyan-500 hover:shadow-cyan-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(6,182,212,0.18)] hover:border-cyan-500/30',
        delay: '0'
    },
    {
        id: 2,
        title: 'IT Maintenance',
        desc: 'Regular and preventative system checkups to ensure your technical infrastructure works smoothly 24/7.',
        icon: '🛠️',
        imgSrc: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop',
        features: ['Component Diagnostics', 'Device Deep Cleaning', 'System Infrastructure Upgrades'],
        badgeBg: 'from-purple-500/20 to-indigo-500/20',
        badgeText: 'text-purple-400',
        btnBg: 'from-purple-500/10 to-indigo-500/10 border-purple-500/30 text-purple-400 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(168,85,247,0.18)] hover:border-purple-500/30',
        delay: '150'
    },
    {
        id: 3,
        title: 'CCTV Installation',
        desc: 'Integrated modern security systems and high-tech smart cameras to secure and monitor your assets.',
        icon: '🛡️',
        imgSrc: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop',
        features: ['Full Camera Deployment', 'Remote Stream Setup', 'Continuous Support & Maintenance'],
        badgeBg: 'from-pink-500/20 to-rose-500/20',
        badgeText: 'text-pink-400',
        btnBg: 'from-pink-500/10 to-rose-500/10 border-pink-500/30 text-pink-400 hover:from-pink-500 hover:to-rose-500 hover:shadow-pink-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(244,63,94,0.18)] hover:border-pink-500/30',
        delay: '300'
    },
    {
        id: 4,
        title: 'Website Development',
        desc: 'Crafting fully interactive, modern, ultra-responsive, and pixel-perfect corporate portfolios and web apps.',
        icon: '🚀',
        imgSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
        features: ['Responsive UI/UX Development', 'SEO & Performance Tweaks', '1-Year Full Technical Support'],
        badgeBg: 'from-amber-500/20 to-orange-500/20',
        badgeText: 'text-amber-400',
        btnBg: 'from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-400 hover:from-amber-500 hover:to-orange-500 hover:shadow-amber-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(245,158,11,0.18)] hover:border-amber-500/30',
        delay: '0'
    },
    {
        id: 5,
        title: 'IT Consulting',
        desc: 'Strategic consultation to optimize your business operations and securely guide your digital transformation.',
        icon: '🧠',
        imgSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
        features: ['Requirements Analysis', 'Infrastructure Auditing', 'Advanced Security Evaluation'],
        badgeBg: 'from-emerald-500/20 to-teal-500/20',
        badgeText: 'text-emerald-400',
        btnBg: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-400 hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(16,185,129,0.18)] hover:border-emerald-500/30',
        delay: '150'
    },
    {
        id: 6,
        title: 'Premium Pre-owned Laptops',
        desc: 'High-quality, meticulously tested tech hardware and enterprise laptops at highly affordable prices.',
        icon: '🔌',
        imgSrc: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
        features: ['Certified High-Tier Devices', 'Budget-Friendly Pricing', 'Free Post-Purchase Consultation'],
        badgeBg: 'from-fuchsia-500/20 to-violet-500/20',
        badgeText: 'text-fuchsia-400',
        btnBg: 'from-fuchsia-500/10 to-violet-500/10 border-fuchsia-500/30 text-fuchsia-400 hover:from-fuchsia-500 hover:to-violet-500 hover:shadow-fuchsia-500/30',
        glowColor: 'hover:shadow-[0_25px_60px_rgba(217,70,239,0.18)] hover:border-fuchsia-500/30',
        delay: '300'
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 px-[4vw] sm:px-[5vw] lg:px-[4vw] font-sans relative z-10 space-y-16 overflow-hidden">

            <ServicesHeader />

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {SERVICES_DATA.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
}

function ServicesHeader() {
    return (
        <div className="w-full text-center flex flex-col items-center space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2" data-aos="fade-down" data-aos-once="false">
                <div className="w-6 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#A044FF]/50 rounded-full" />
                <span className="text-sm sm:text-base uppercase font-extrabold tracking-widest bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] bg-clip-text text-transparent">
                    What We Offer
                </span>
                <div className="w-6 h-[2px] bg-gradient-to-l from-[#FF5F6D] to-[#A044FF]/50 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111625] tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="100" data-aos-once="false">
                Our Premium <span className="bg-gradient-to-r from-[#FF5F6D] via-[#D84BF7] to-[#A044FF] bg-clip-text text-transparent font-extrabold">IT Services</span>
            </h2>

            <p className="text-slate-500/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-xl" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                We provide next-generation technological solutions engineered to optimize your IT infrastructure, enhance cyber security, and accelerate your business digital transformation.
            </p>
        </div>
    );
}

function ServiceCard({ service }) {
    const baseDelay = parseInt(service.delay);

    return (
        <div
            className={`group relative bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[32px] flex flex-col justify-between overflow-hidden transition-all duration-700 ease-out ${service.glowColor}`}
            data-aos="fade-up"
            data-aos-delay={service.delay}
            data-aos-once="false"
        >
            <div>
                <div
                    className="relative w-full aspect-[16/10] overflow-hidden p-4"
                    data-aos="zoom-in"
                    data-aos-delay={baseDelay + 100}
                    data-aos-once="false"
                >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/50 shadow-md">
                        <img
                            src={service.imgSrc}
                            alt={service.title}
                            className="w-full h-full object-cover select-none transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    </div>
                    <div
                        className={`absolute bottom-7 left-7 w-12 h-12 rounded-xl bg-gradient-to-br ${service.badgeBg} backdrop-blur-lg border border-white/50 flex items-center justify-center text-xl shadow-lg select-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out z-20`}
                        data-aos="zoom-out"
                        data-aos-delay={baseDelay + 250}
                        data-aos-once="false"
                    >
                        {service.icon}
                    </div>
                </div>

                <div className="px-6 sm:px-8 pb-3 pt-2 space-y-4">
                    <h3
                        className="text-lg sm:text-xl font-bold text-[#111625] tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#FF5F6D] group-hover:to-[#A044FF] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
                        data-aos="fade-right"
                        data-aos-delay={baseDelay + 150}
                        data-aos-once="false"
                    >
                        {service.title}
                    </h3>

                    <p
                        className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal min-h-[44px]"
                        data-aos="fade-up"
                        data-aos-delay={baseDelay + 200}
                        data-aos-once="false"
                    >
                        {service.desc}
                    </p>

                    <div className="w-full h-px bg-slate-200/50 my-2" />

                    <ul className="space-y-2.5 pt-1">
                        {service.features.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2.5 text-[12px] sm:text-xs text-slate-500 font-medium leading-tight"
                                data-aos="fade-up"
                                data-aos-delay={baseDelay + 250 + (i * 60)}
                                data-aos-once="false"
                            >
                                <span className={`inline-block mt-0.5 font-bold ${service.badgeText}`}>✓</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4"
                data-aos="fade-up"
                data-aos-delay={baseDelay + 400}
                data-aos-once="false"
            >
                <button className={`w-full group/btn py-3 px-5 bg-gradient-to-r ${service.btnBg} hover:text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transform active:scale-[0.97] transition-all duration-500 ease-out cursor-pointer`}>
                    <span>Explore Service</span>
                    <span className="inline-block transform group-hover/btn:translate-x-1.5 transition-transform duration-500 ease-out">→</span>
                </button>
            </div>
        </div>
    );
}