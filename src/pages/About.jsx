import React from 'react';

// ==========================================
// 1. الداتا الخاصة بالقسم (Static Data)
// ==========================================

const STATS_DATA = [
    { number: '500+', label: 'Happy Clients', icon: '👤', animation: 'fade-up', delay: '0' },
    { number: '1200+', label: 'Projects Completed', icon: '💼', animation: 'fade-up', delay: '150' },
    { number: '8+', label: 'Years of Experience', icon: '🎗️', animation: 'fade-up', delay: '300' },
    { number: '24/7', label: 'Support Available', icon: '🎧', animation: 'fade-up', delay: '450' }
];

const VALUES_DATA = [
    { id: 'mission', icon: '🚀', title: 'Our Mission', desc: 'Deliver innovative IT solutions that drive success and growth for our clients.', bg: 'bg-purple-500/10', text: 'text-purple-600', animation: 'zoom-in-up', delay: '0' },
    { id: 'vision', icon: '👁️', title: 'Our Vision', desc: 'To be the leading IT partner, empowering businesses with smart technology.', bg: 'bg-pink-500/10', text: 'text-pink-600', animation: 'zoom-in-up', delay: '150' },
    { id: 'values', icon: '💎', title: 'Our Values', list: ['Integrity', 'Innovation', 'Reliability'], bg: 'bg-amber-500/10', text: 'text-amber-600', animation: 'zoom-in-up', delay: '300' }
];

// ==========================================
// 2. المكون الرئيسي (Main Component)
// ==========================================

export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-[5vw] lg:px-[6vw] font-sans relative z-10 space-y-16 sm:space-y-20 lg:space-y-28 overflow-hidden">

            {/* الجزء الأول: شبكة الصور والنصوص الترحيبية */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                <AboutImageBlock />
                <AboutTextBlock />
            </div>

            {/* الجزء الثاني: العدادات الرقمية بتأثير طيران متتابع */}
            <StatsCounterBlock />

            {/* الجزء الثالث: الالتزام والقيم الاستراتيجية */}
            <CommitmentAndValuesGrid />

            {/* الجزء الرابع: كارت اتخاذ الإجراء والدعوة للتواصل */}
            <AboutCallToActionBlock />
        </section>
    );
}

// ==========================================
// 3. مكونات الجزء الأول (Main Intro Sub-Components)
// ==========================================

function AboutImageBlock() {
    return (
        <div className="w-full order-2 lg:order-1 flex justify-center lg:justify-start" data-aos="zoom-in-right" data-aos-duration="1200" data-aos-once="false">
            <div className="w-full max-w-[450px] sm:max-w-[520px] lg:max-w-none">
                <div className="relative w-full rounded-2xl sm:rounded-[32px] [perspective:1000px] overflow-hidden bg-white/40 backdrop-blur-md p-2 sm:p-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-white/70 aspect-square transition-transform duration-500 hover:scale-[1.01]">
                    <img
                        src="Team.png"
                        alt="Nexa Solution Team and Office"
                        className="w-full h-full object-cover rounded-xl sm:rounded-[22px] select-none bg-slate-100"
                    />
                </div>
            </div>
        </div>
    );
}

function AboutTextBlock() {
    return (
        <div className="w-full order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start space-y-4 sm:space-y-6">
            <AboutTextBadge />
            <AboutMainHeading />
            <AboutDescriptionText />
            <AboutItalicQuote />
            <AboutLearnMoreButton />
        </div>
    );
}

function AboutTextBadge() {
    return (
        <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="100" data-aos-once="false">
            <span className="text-xl sm:text-2xl uppercase font-extrabold tracking-widest bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] bg-clip-text text-transparent">
                About Us
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#A044FF]/50 rounded-full hidden lg:block" />
        </div>
    );
}

function AboutMainHeading() {
    return (
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111625] tracking-tight leading-[1.15] sm:leading-[1.05]" data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
            We Build Smart IT <br className="hidden sm:inline" /> Solutions For Your{' '}
            <span className="bg-gradient-to-r from-[#FF5F6D] via-[#D84BF7] to-[#A044FF] bg-clip-text text-transparent font-extrabold block sm:inline mt-1 sm:mt-0">
                Business Growth
            </span>
        </h2>
    );
}

function AboutDescriptionText() {
    return (
        <p className="text-slate-500/90 text-sm sm:text-base leading-relaxed font-normal max-w-xl text-center lg:text-left" data-aos="fade-up" data-aos-delay="400" data-aos-once="false">
            NEXA Solution is a trusted IT support and technology partner dedicated to helping businesses and individuals overcome technical challenges with reliable, innovative, and cost-effective solutions.
        </p>
    );
}

function AboutItalicQuote() {
    return (
        <div className="pl-4 lg:pl-5 border-l-4 lg:border-l-2 border-purple-500 max-w-lg" data-aos="fade-left" data-aos-delay="550" data-aos-once="false">
            <p className="text-slate-600 font-medium italic text-sm sm:text-base text-center lg:text-left">
                "We believe technology can make a big impact, and we're here to make it work for you."
            </p>
        </div>
    );
}

function AboutLearnMoreButton() {
    return (
        <div className="w-full sm:w-auto" data-aos="zoom-in-up" data-aos-delay="650" data-aos-once="false">
            <a href="#services">
                <button className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] text-white font-bold text-sm rounded-xl shadow-[0_10px_25px_rgba(160,68,255,0.25)] hover:shadow-[0_15px_30px_rgba(160,68,255,0.4)] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none cursor-pointer">
                    Learn More <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
            </a>
        </div>
    );
}


function StatsCounterBlock() {
    return (
        <div className="w-full">
            <div className="bg-white/55 backdrop-blur-xl border border-white/70 rounded-2xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-6">
                {STATS_DATA.map((stat, idx) => (
                    <StatsSingleCard key={idx} stat={stat} isLast={idx === 3} />
                ))}
            </div>
        </div>
    );
}

function StatsSingleCard({ stat, isLast }) {
    return (
        <div
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 relative px-2 sm:px-4 group text-center sm:text-left justify-center"
            data-aos={stat.animation}
            data-aos-delay={stat.delay}
            data-aos-once="false"
        >
            {!isLast && <StatsDivider />}
            <StatsCardIcon icon={stat.icon} />
            <StatsCardText number={stat.number} label={stat.label} />
        </div>
    );
}

function StatsDivider() {
    return <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-slate-200" />;
}

function StatsCardIcon({ icon }) {
    return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transform group-hover:scale-[1.15] group-hover:rotate-6 transition-transform duration-300 select-none bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {icon}
        </div>
    );
}

function StatsCardText({ number, label }) {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-none mb-1">
                {number}
            </h3>
            <p className="text-slate-500 text-[11px] sm:text-xs font-semibold max-w-[110px] sm:max-w-none">
                {label}
            </p>
        </div>
    );
}

// ==========================================
// 5. مكونات الجزء الثالث (Commitment & Values Components)
// ==========================================

function CommitmentAndValuesGrid() {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            <CommitmentLeftBlock />
            <ValuesRightImageBlock />
        </div>
    );
}

function CommitmentLeftBlock() {
    return (
        <div className="w-full lg:col-span-7 space-y-8 sm:space-y-10 order-2 lg:order-1">
            <CommitmentTextContent />
            <CommitmentValuesGridCards />
        </div>
    );
}

function CommitmentTextContent() {
    return (
        <div className="w-full text-center lg:text-left space-y-3 sm:space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2" data-aos="fade-right" data-aos-once="false">
                <span className="text-lg sm:text-xl uppercase font-extrabold tracking-widest text-[#A044FF]">
                    Our Commitment
                </span>
                <div className="w-6 h-[1.5px] bg-[#A044FF]/50 hidden lg:block" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111625] max-w-xl leading-snug" data-aos="fade-up" data-aos-delay="150" data-aos-once="false">
                Empowering Businesses With <span className="text-[#A044FF] font-extrabold">Reliable IT Solutions</span>
            </h3>
            <p className="text-slate-500/90 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="250" data-aos-once="false">
                Our mission is to deliver top-quality IT services that improve efficiency, security, and productivity. We are committed to building long-term relationships with our clients by providing exceptional support and forward-thinking solutions.
            </p>
        </div>
    );
}

function CommitmentValuesGridCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
            {VALUES_DATA.map((item) => (
                <ValueSingleCard key={item.id} item={item} />
            ))}
        </div>
    );
}

function ValueSingleCard({ item }) {
    return (
        <div
            className="bg-white/55 backdrop-blur-md border border-white/70 p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-[26px] shadow-[0_15px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(158,0,255,0.04)] transition-all duration-300 sm:hover:-translate-y-2 group text-center sm:text-left flex flex-col items-center sm:items-start"
            data-aos={item.animation}
            data-aos-delay={item.delay}
            data-aos-once="false"
        >
            <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.text} mb-4 sm:mb-5 text-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                {item.icon}
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#111625] mb-2">{item.title}</h4>

            {item.desc && <p className="text-[12px] text-slate-400 leading-relaxed font-normal">{item.desc}</p>}
            {item.list && <ValuesListItems list={item.list} />}
        </div>
    );
}

function ValuesListItems({ list }) {
    return (
        <ul className="text-[12px] text-slate-400 space-y-1 list-none sm:list-disc list-inside font-normal">
            {list.map(listItem => (
                <li key={listItem} className="inline sm:block mx-1 sm:mx-0">{listItem}</li>
            ))}
        </ul>
    );
}

function ValuesRightImageBlock() {
    return (
        <div className="w-full lg:col-span-5 order-1 lg:order-2 flex justify-center" data-aos="zoom-in-left" data-aos-duration="1200" data-aos-once="false">
            <div className="relative w-full max-w-[350px] sm:max-w-[420px] lg:max-w-none rounded-2xl sm:rounded-[32px] overflow-hidden bg-white/40 backdrop-blur-md p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.05)] border border-white/70 aspect-square flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]">
                <img
                    src="/Screenshot_2026-06-11_120941-removebg-preview.png"
                    alt="Nexa Solution Cyber Security Concept Shield"
                    className="w-full h-full object-contain rounded-[20px] select-none bg-slate-50/20 p-2 sm:p-4"
                />
            </div>
        </div>
    );
}

// ==========================================
// 6. مكونات الجزء الرابع (Call To Action Components)
// ==========================================

function AboutCallToActionBlock() {
    return (
        <div className="pt-4 sm:pt-6 md:pt-8" data-aos="slide-up" data-aos-offset="50" data-aos-once="false">
            <div className="max-w-4xl mx-auto bg-white/55 backdrop-blur-xl border border-white/70 rounded-2xl sm:rounded-[30px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_-5px_rgba(158,0,255,0.05)] transition-all duration-500">
                <AboutCTALeftInfo />
                <AboutCTARightButton />
            </div>
        </div>
    );
}

function AboutCTALeftInfo() {
    return (
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-md animate-pulse">
                🎧
            </div>
            <div className="space-y-0.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111625]">
                    Let's Work Together
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm md:text-base">
                    Ready to take your business to the next level?
                </p>
            </div>
        </div>
    );
}

function AboutCTARightButton() {
    return (
        <div className="w-full md:w-auto">
            <a href="#contact">
                <button className="group w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] text-white font-bold text-sm rounded-xl shadow-[0_10px_25px_rgba(160,68,255,0.25)] hover:shadow-[0_15px_30px_rgba(160,68,255,0.4)] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none cursor-pointer">
                    Contact Us <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
            </a>
        </div>
    );
}