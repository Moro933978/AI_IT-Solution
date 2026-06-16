import React from 'react';

const WHY_US_DATA = [
    {
        id: 1,
        title: 'Enterprise Scalability',
        desc: 'We architect next-generation digital solutions engineered to scale. Our infrastructure grows seamlessly with your business traffic and operational demands.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        glowClass: 'hover:shadow-[0_30px_60px_rgba(168,85,247,0.2)] hover:border-purple-500/40',
        iconGlow: 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]',
        titleColor: 'text-[#111625] group-hover:text-purple-500',
        delay: '0'
    },
    {
        id: 2,
        title: 'High-Velocity Delivery',
        desc: 'Time-to-market is critical. Our agile deployment pipelines ensure your digital products, software updates, and cloud systems launch rapidly without friction.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        glowClass: 'hover:shadow-[0_30px_60px_rgba(255,112,199,0.2)] hover:border-pink-500/40',
        iconGlow: 'bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,112,199,0.4)]',
        titleColor: 'text-[#111625] group-hover:text-pink-500',
        delay: '150'
    },
    {
        id: 3,
        title: 'Cutting-Edge Innovation',
        desc: 'We integrate advanced tech-stacks, secure frameworks, and smart automation to keep your corporate ecosystem ahead of the digital curve 24/7.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        glowClass: 'hover:shadow-[0_30px_60px_rgba(34,211,238,0.2)] hover:border-cyan-500/40',
        iconGlow: 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]',
        titleColor: 'text-[#111625] group-hover:text-cyan-500',
        delay: '300'
    }
];

export default function WhyUsSection() {
    return (
        <section id="why-us" className="py-24 px-[4vw] sm:px-[5vw] lg:px-[6vw] font-sans relative z-10 space-y-20 overflow-hidden">

            <div className="w-full text-center flex flex-col items-center space-y-4 max-w-3xl mx-auto">
                <div className="flex items-center gap-2" data-aos="fade-down" data-aos-once="false" data-aos-duration="800">
                    <div className="w-6 h-[2px] bg-gradient-to-r from-[#FF70C7] to-[#A855F7]/50 rounded-full" />
                    <span className="text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-gradient-to-r from-[#FF70C7] to-[#A855F7] bg-clip-text text-transparent">
                        Why Partner With Us
                    </span>
                    <div className="w-6 h-[2px] bg-gradient-to-l from-[#FF70C7] to-[#A855F7]/50 rounded-full" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111625] tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="200" data-aos-once="false" data-aos-duration="1000">
                    Next-Gen <span className="bg-gradient-to-r from-[#FF70C7] via-[#D84BF7] to-[#A855F7] bg-clip-text text-transparent font-extrabold">Digital Solutions</span>
                </h2>

                <p className="text-slate-500/90 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl" data-aos="fade-up" data-aos-delay="400" data-aos-once="false" data-aos-duration="1200">
                    We empower enterprise-tier brands by deploying premium tech infrastructure, highly secure architectures, and disruptive digital strategies.
                </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {WHY_US_DATA.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative bg-white/40 backdrop-blur-2xl border border-white/70 rounded-[28px] p-8 flex flex-col space-y-6 hover:-translate-y-3.5 ${item.glowClass}`}
                        style={{
                            transition: 'all 1000ms cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        data-aos="fade-up"
                        data-aos-delay={item.delay}
                        data-aos-once="false"
                        data-aos-duration="1000"
                    >
                        <div
                            className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100"
                            style={{ transition: 'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        />

                        <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/60 group-hover:rotate-6 group-hover:scale-110 shadow-sm transition-all duration-500 ease-out ${item.iconGlow}`}
                            data-aos="zoom-in"
                            data-aos-delay={parseInt(item.delay) + 150}
                            data-aos-once="false"
                            data-aos-duration="600"
                        >
                            {item.icon}
                        </div>

                        <div className="space-y-3">
                            <h3
                                className={`text-xl font-bold tracking-tight transition-colors duration-500 ${item.titleColor}`}
                                data-aos="fade-right"
                                data-aos-delay={parseInt(item.delay) + 300}
                                data-aos-once="false"
                                data-aos-duration="700"
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal"
                                data-aos="fade-up"
                                data-aos-delay={parseInt(item.delay) + 450}
                                data-aos-once="false"
                                data-aos-duration="800"
                            >
                                {item.desc}
                            </p>
                        </div>

                        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                ))}
            </div>

        </section>
    );
}