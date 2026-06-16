import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormField = ({ id, name, label, type = 'text', isTextArea = false }) => {
    const baseClasses = "peer w-full py-4 px-5 bg-white/50 backdrop-blur-md rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#A855F7] focus:bg-white transition-all duration-300";
    const labelClasses = "absolute left-4 top-[22px] text-sm font-medium text-slate-400 tracking-wide pointer-events-none transition-all duration-300 px-1 peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#A855F7] peer-focus:font-bold peer-focus:bg-white peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#A855F7] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:bg-white";

    return (
        <div className="relative pt-2" data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
            {isTextArea ? (
                <textarea
                    name={name}
                    id={id}
                    required
                    rows="4"
                    placeholder=" "
                    className={`${baseClasses} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    id={id}
                    required
                    placeholder=" "
                    className={baseClasses}
                />
            )}
            <label htmlFor={id} className={labelClasses}>
                {label}
            </label>
        </div>
    );
};

const LogoSidebar = () => {
    return (
        <div className="lg:col-span-5 bg-white/10 flex flex-col items-center justify-center relative min-h-[380px] lg:min-h-full overflow-hidden group/logo">
            <div
                className="absolute w-44 h-44 bg-[#A855F7]/20 rounded-full blur-[50px] group-hover/logo:bg-[#FF70C7]/30 transition-all duration-1000 ease-out"
                data-aos="zoom-in"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-once="false"
            />

            <div
                className="relative z-10 flex flex-col items-center space-y-4"
                data-aos="fade-left"
                data-aos-delay="800"
                data-aos-duration="900"
                data-aos-once="false"
            >
                <div className="w-24 h-24 rounded-[24px] overflow-hidden shadow-lg border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md flex items-center justify-center transition-transform duration-700 group-hover/logo:scale-105">
                    <img
                        src="/Logo.png"
                        alt="Tech Hook Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="text-center space-y-1">
                    <h4 className="text-lg font-black tracking-wide text-[#111625] uppercase">Nexa Solution</h4>
                    <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Digital Solutions Platform</p>
                </div>
            </div>

            <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/30 rounded-tl-md" />
            <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/30 rounded-tr-md" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/30 rounded-bl-md" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/30 rounded-br-md" />
        </div>
    );
};

export default function ContactSection() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });


        const SERVICE_ID = 'service_kzhwrng';
        const TEMPLATE_ID = 'template_19rzdbp';
        const PUBLIC_KEY = 'R4rLwfaT9BFDvQCHe';


        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ type: 'success', message: 'Your message has been sent successfully! 🚀' });
                formRef.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again later. ❌' });
                console.error(error.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="w-full py-12 px-[4vw] sm:px-[5vw] lg:px-[4vw] font-sans relative z-10 flex flex-col items-center overflow-hidden gap-16">
            <div
                className="w-full max-w-7xl bg-white/40 backdrop-blur-2xl border border-white/70 rounded-[32px] shadow-xl hover:shadow-[0_30px_60px_rgba(160,68,255,0.1)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
                style={{ transition: 'all 1000ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="false"
            >
                <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-white/40">
                    <div className="space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#FF5F6D] via-[#D84BF7] to-[#A044FF] bg-clip-text text-transparent">
                            Contact Us
                        </h2>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                            Get in touch with our team to discuss your digital transformation needs. We are here to engineer the perfect technological solution for your corporate ecosystem.
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSendEmail} className="space-y-8">
                        <FormField id="user_name" name="name" label="Name" />
                        <FormField id="user_email" name="email" label="Email Address" type="email" />
                        <FormField id="message" name="message" label="Your Message" isTextArea={true} />

                        {status.message && (
                            <div className={`p-4 rounded-xl text-xs font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            data-aos="zoom-in-up"
                            data-aos-delay="900"
                            data-aos-duration="600"
                            data-aos-once="false"
                            className="w-full group/btn py-4 px-5 bg-gradient-to-r from-[#FF5F6D] via-[#D84BF7] to-[#A044FF] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-[0_15px_30px_rgba(216,75,247,0.35)] flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all duration-500 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            ) : (
                                <>
                                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="w-full h-px bg-slate-200/60 my-4" />

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-slate-500 font-medium">
                        <a href="mailto:omar6789123h@gmail.com" className="flex items-center gap-3 hover:text-[#A044FF] transition-colors duration-300">
                            <span>omar6789123h@gmail.com</span>
                        </a>
                        <a href="tel:+201030766113" className="flex items-center gap-3 hover:text-[#A044FF] transition-colors duration-300">
                            <span>+20 01030766113</span>
                        </a>
                    </div>
                </div>

                <LogoSidebar />
            </div>
        </section>
    );
}