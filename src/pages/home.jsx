import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PARTNER_LOGOS = [
    { src: '/logo lenovo2.png', alt: 'Lenovo' },
    { src: '/logo_acer-removebg-preview.png', alt: 'Acer' },
    { src: '/Asus.png', alt: 'Asus' },
    { src: '/logo_cisco-removebg-preview.png', alt: 'Cisco' },
    { src: '/logo_mikrotik-removebg-preview.png', alt: 'MikroTik' },
    { src: '/logo_tp_link-removebg-preview.png', alt: 'TP-Link' }
];

export default function ITSupportFluidHero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
        });
    }, []);

    return (
        <div className="min-h-screen bg-transparent antialiased overflow-hidden font-sans flex flex-col justify-between">
            <HeroHeader />
            <PartnersSection />
        </div>
    );
}

function HeroHeader() {
    return (
        <header
            id="home"
            className="min-h-[85vh] lg:min-h-screen flex items-center justify-center px-[4vw] sm:px-[5vw] lg:px-[4xl] transition-all duration-300"
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch py-4">
                <HeroContentCard />
                <HeroImageCard />
            </div>
        </header>
    );
}

function HeroContentCard() {
    return (
        <div
            className="w-full flex z-10"
            data-aos="fade-right"
            data-aos-delay="100"
        >
            <div className="w-full bg-white/[0.35] backdrop-blur-2xl rounded-[32px] p-10 sm:p-12 lg:p-14 shadow-[0_30px_70px_-15px_rgba(158,0,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.45)] border border-white/20 relative overflow-hidden flex flex-col justify-center transition-all duration-500 hover:shadow-[0_40px_80px_-10px_rgba(158,0,255,0.08)] before:content-[''] before:absolute before:left-5 before:top-8 before:bottom-8 before:w-[5px] before:rounded-full before:bg-gradient-to-b before:from-[#FF5F6D] before:to-[#A044FF] before:shadow-[0_0_15px_rgba(160,68,255,0.4)]">
                <h1 className="text-4xl uppercase sm:text-5xl lg:text-[2.8rem] xl:text-[3.4rem] font-semibold text-[#111625] tracking-tight leading-[1.2] mb-6" data-aos="fade-up" data-aos-delay="200">
                    <span className="font-bold">Fix Your IT Problems</span> <br />
                    <span className="bg-gradient-to-r from-[#FF5F6D] via-[#D84BF7] to-[#A044FF] bg-clip-text text-transparent font-extrabold">
                        Quick And Effectively
                    </span>
                </h1>

                <p className="text-slate-500/90 text-sm sm:text-base md:text-[1.05rem] leading-relaxed mb-10 max-w-xl font-normal tracking-wide" data-aos="fade-up" data-aos-delay="300">
                    We provide complete IT support services including maintenance, website development,
                    CCTV installation, network setup, and technology consulting for businesses and individuals.
                </p>

                <div data-aos="fade-up" data-aos-delay="400">
                    <button className="group px-9 cursor-pointer py-4 bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] text-white font-bold text-sm sm:text-base rounded-xl shadow-[0_10px_25px_rgba(160,68,255,0.3)] hover:shadow-[0_15px_30px_rgba(160,68,255,0.45)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none">
                        Learn More
                        <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

function HeroImageCard() {
    return (
        <div
            className="w-full flex z-10"
            data-aos="fade-left"
            data-aos-delay="200"
        >
            <div className="relative w-full rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-md p-3.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08),0_20px_40px_-10px_rgba(158,0,255,0.03)] border border-white/70 flex transition-all duration-500 hover:shadow-[0_40px_80px_-10px_rgba(0,0,0,0.12)]">
                <img
                    src="/HeroImg.png"
                    alt="IT Support Bekasi System Monitor"
                    className="w-full h-full object-cover rounded-[22px] select-none"
                />
            </div>
        </div>
    );
}

function PartnersSection() {
    return (
        <section
            className="w-full py-10 overflow-hidden select-none"
            data-aos="fade-up"
            data-aos-delay="400"
        >
            <div className="w-full flex flex-col items-center gap-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                    Trusted Technology Partners
                </h2>

                <div className="relative w-full overflow-hidden bg-white/25 backdrop-blur-2xl border-y border-white/60 shadow-[0_20px_60px_rgba(99,102,241,0.06)] py-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-cyan-400/5 pointer-events-none" />
                    <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[#F5F7FF] via-[#F5F7FF]/70 to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[#F5F7FF] via-[#F5F7FF]/70 to-transparent" />

                    <div className="flex items-center gap-20 animate-marquee w-max">
                        {[1, 2, 3, 4].map((group) => (
                            <div key={group} className="flex items-center gap-20 shrink-0">
                                {PARTNER_LOGOS.map((logo, index) => (
                                    <img
                                        key={index}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-9 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-110 transition-all duration-300"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}