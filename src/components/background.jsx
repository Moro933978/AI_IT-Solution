import React from "react";

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#F5F7FF]">

            <div
                className="
                absolute
                -top-[10%]
                left-1/2
                -translate-x-1/2
                w-[650px]
                h-[650px]
                rounded-full
                bg-gradient-to-tr from-[#C084FC] to-[#A855F7]
                opacity-[0.45]
                blur-[140px]
                "
            />

            <div
                className="
                absolute
                top-[25%]
                -right-[100px]
                w-[550px]
                h-[550px]
                rounded-full
                bg-[#22D3EE]
                opacity-[0.35]
                blur-[130px]
                "
            />

            <div
                className="
                absolute
                top-[50%]
                -left-[150px]
                w-[500px]
                h-[500px]
                rounded-full
                bg-[#A855F7]
                opacity-[0.4]
                blur-[120px]
                "
            />

            <div
                className="
                absolute
                top-[75%]
                right-[10%]
                w-[480px]
                h-[480px]
                rounded-full
                bg-[#FF70C7]
                opacity-[0.35]
                blur-[110px]
                "
            />

            <div
                className="
                absolute
                -bottom-[50px]
                left-[5%]
                w-[300px]
                h-[300px]
                rounded-full
                bg-[#7C9CFF]
                opacity-[0.4]
                blur-[90px]
                "
            />

            <div
                className="
                absolute
                inset-0
                bg-white/[0.08]
                backdrop-blur-[1px]
                "
            />
        </div>
    );
}