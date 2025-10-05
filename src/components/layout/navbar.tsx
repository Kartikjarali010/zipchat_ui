"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const items = [
        { label: "Product", dropdown: true },
        { label: "Features", dropdown: true },
        { label: "ROI calculator" },
        { label: "Resources", dropdown: true },
        { label: "Pricing" },
    ];

    return (
        <header className="w-full bg-white">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Zipchat logo"
                        width={300} // increased intrinsic width
                        height={300} // increased intrinsic height
                        priority
                        className="h-14 md:h-16 w-auto transition-all"
                    />
                </Link>

                {/* Center nav pill */}
                <nav
                    aria-label="Main navigation"
                    className="hidden md:flex rounded-full bg-grey px-2 py-1 gap-1"
                >
                    {items.map((i) => (
                        <button
                            key={i.label}
                            className="group flex-none px-7 py-2.5 rounded-full text-sm font-medium
                         flex items-center justify-center gap-2 whitespace-nowrap
                         bg-gray-100 border border-gray-200 text-gray-600
                         transition-colors
                         hover:bg-[#b9fd33] hover:border-[#b9fd33] hover:text-[#0f1621]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9fd33]"
                        >
                            <span>{i.label}</span>
                            {i.dropdown && (
                                <svg
                                    className="w-3.5 h-3.5 text-gray-500 transition-transform duration-300 group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <button
                        aria-label="Account"
                        className="w-10 h-10 rounded-full bg-white border border-gray-200
                       text-gray-600 flex items-center justify-center
                       transition-colors
                       hover:bg-[#b9fd33] hover:border-[#b9fd33] hover:text-[#0f1621]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9fd33]"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c1.5-4 6.5-6 8-6s6.5 2 8 6" />
                        </svg>
                    </button>
                    <button
                        className="px-7 py-2 rounded-full text-sm font-semibold
                       bg-black border border-black text-white
                       transition-colors
                       hover:bg-[#b9fd33] hover:border-[#b9fd33] hover:text-[#0f1621]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b9fd33]"
                    >
                        Start free trial
                    </button>
                </div>
            </div>
        </header>
    );
}