"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full mb-10">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#0f1621] flex items-center justify-center text-white font-bold text-sm">
                        zc
                    </div>
                    <span className="font-semibold text-[#17202b] text-xl">zipchat</span>
                </div>

                {/* Nav links pill */}
                <nav className="hidden md:flex items-center gap-1 bg-gray-200/60 rounded-full p-1 backdrop-blur-sm border border-white/40">
                    {[
                        { label: "Product", dropdown: true },
                        { label: "Features", dropdown: true },
                        { label: "ROI calculator" },
                        { label: "Resources", dropdown: true },
                        { label: "Pricing" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className="relative px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-[#b9fd33] hover:text-gray-900 transition-colors"
                        >
                            <span className="flex items-center gap-1">
                                {item.label}
                                {item.dropdown && (
                                    <svg
                                        className="w-3.5 h-3.5 opacity-60"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                )}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-gray-200/70 hover:bg-[#b9fd33] hover:text-gray-900 flex items-center justify-center text-gray-600 transition-colors">
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
                    <button className="px-6 py-2 rounded-full bg-[#0f1621] text-white text-sm font-semibold hover:bg-[#b9fd33] hover:text-[#0f1621] transition-colors">
                        Start free trial
                    </button>
                </div>
            </div>
        </header>
    );
}
