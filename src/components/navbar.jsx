import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // تحديث حالة الخلفية الشفافة/المضغوطة
            setIsScrolled(currentScrollY > 20);

            // حساب السكشن الحالي النشط بناءً على التمرير
            const scrollPosition = currentScrollY + 250;
            NAV_LINKS.forEach((link) => {
                const el = document.getElementById(link.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(link.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b ${isScrolled
                ? 'bg-white/40 backdrop-blur-md shadow-[0_12px_40px_-15px_rgba(0,0,0,0.03)] border-slate-200/40 py-3.5'
                : 'bg-transparent border-transparent py-4'
                }`}
        >
            <div className="w-full flex justify-between items-center px-6 md:px-12 transition-all duration-500 ease-out">
                <Logo />

                <DesktopMenu activeSection={activeSection} />

                <MobileMenuButton
                    isOpen={isMobileMenuOpen}
                    toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </div>

            <MobileDropdown
                isOpen={isMobileMenuOpen}
                activeSection={activeSection}
                closeMenu={() => setIsMobileMenuOpen(false)}
            />
        </nav>
    );
}

function Logo() {
    return (
        <a href="#home" className="flex items-center justify-center gap-3 group focus:outline-none shrink-0">
            <img
                src="/Logo.png"
                alt="NEXA Solution Logo"
                className="w-12 h-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
                <span className="font-extrabold text-sm md:text-base lg:text-lg tracking-tight text-slate-900 leading-none mb-1">
                    NEXA Solution
                </span>
                <span className="text-[9px] text-slate-400 font-medium tracking-wider uppercase">
                    Premium IT Partner
                </span>
            </div>
        </a>
    );
}

function DesktopMenu({ activeSection }) {
    return (
        <div className="hidden md:flex items-center gap-8 lg:gap-10 transition-all duration-500 ease-out">
            {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-300 relative py-2 shrink-0 group/link ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                            }`}
                    >
                        {link.name}
                        <span
                            className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#FF5F6D] to-[#A044FF] rounded-full transition-all duration-300 ease-out ${isActive
                                ? 'w-full opacity-100'
                                : 'w-0 opacity-0 group-hover/link:w-full group-hover/link:opacity-100'
                                }`}
                        />
                    </a>
                );
            })}
        </div>
    );
}

function MobileMenuButton({ isOpen, toggleMenu }) {
    return (
        <button
            className="md:hidden p-2 text-slate-600 focus:outline-none rounded-lg hover:bg-slate-100/50 transition-colors duration-300"
            onClick={toggleMenu}
        >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
            </div>
        </button>
    );
}

function MobileDropdown({ isOpen, activeSection, closeMenu }) {
    return (
        <div
            className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-xl px-6 py-6 flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
        >
            {NAV_LINKS.map((link, index) => (
                <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`font-semibold py-2 border-b border-slate-50 last:border-none transition-all duration-500 ${activeSection === link.id ? 'text-[#A044FF]' : 'text-slate-600'
                        }`}
                    style={{
                        transitionDelay: isOpen ? `${index * 40}ms` : '0ms',
                        transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                        opacity: isOpen ? 1 : 0
                    }}
                    onClick={closeMenu}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}