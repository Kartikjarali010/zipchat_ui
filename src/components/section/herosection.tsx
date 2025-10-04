"use client";
import { motion } from "framer-motion";
import { useState } from "react"; // <-- added

export default function HeroSection() {
    const [hovered, setHovered] = useState<number | null>(null);
    const active = hovered ?? 0; // 0 = first button default
    return (
        <div className="relative">
            {/* gradient blob */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[820px] h-[620px] bg-gradient-to-br from-purple-400/40 via-purple-500/30 to-blue-400/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10">
                {/* Header text */}
                <section className="text-center">
                    <br></br>
                    <br></br>
                    <motion.h1
                        className="text-5xl md:text-[56px] font-bold max-w-4xl mx-auto leading-tight text-[#17202b] mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        The AI Agent for Ecom that<br />
                        turns Browsers into Buyers
                    </motion.h1>

                    {/* Button pill group */}
                    <div className="flex justify-center mb-14">
                        <div className="relative inline-flex items-center rounded-full bg-white/70 border border-gray-200 p-1 backdrop-blur-sm shadow-sm">
                            {/* Sliding highlight */}
                            <div
                                className="absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-8px)] rounded-full bg-[#b9fd33] shadow transition-transform duration-300 ease-out"
                                style={{ transform: active === 0 ? "translateX(0)" : "translateX(100%)" }}
                            />
                            <button
                                onMouseEnter={() => setHovered(0)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200
                                            ${active === 0 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"}`}
                            >
                                Start free trial
                            </button>
                            <button
                                onMouseEnter={() => setHovered(1)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200
                                            ${active === 1 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"}`}
                            >
                                Book a demo
                            </button>
                        </div>
                    </div>
                </section>

                {/* Chat Interface Section */}
                <section className="relative flex justify-center items-center py-8 min-h-[60vh]">
                    {/* Central Phone Mockup */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-[25px] shadow-2xl w-[320px] h-[580px] z-20 flex flex-col overflow-hidden border border-gray-200"
                    >
                        {/* Phone Header */}
                        <div className="bg-gray-800 py-3 px-4 flex items-center gap-3 rounded-t-[25px]">
                            <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
                                <span className="text-gray-800 font-bold text-xs">zc</span>
                            </div>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 p-4 bg-gray-50 space-y-3">
                            <div className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                <p className="text-sm text-gray-800">Do you have sunglasses with green lenses?</p>
                            </div>

                            <div className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[70%]">
                                <p className="text-sm font-medium">Yes sure!</p>
                            </div>

                            <div className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                <p className="text-sm text-gray-800">Are you looking for a model for men or women?</p>
                            </div>

                            <div className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[50%]">
                                <p className="text-sm font-medium">Men</p>
                            </div>

                            <div className="bg-purple-500 text-white rounded-2xl p-4 max-w-[90%] shadow-sm">
                                <p className="text-sm">Glasses, here are the top selling green lens...</p>
                                <div className="bg-white/20 rounded-xl p-3 mt-3">
                                    <p className="text-xs">Thank you</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connecting Lines - SVG */}
                    <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 600">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e5e7eb" />
                                <stop offset="50%" stopColor="#9ca3af" />
                                <stop offset="100%" stopColor="#e5e7eb" />
                            </linearGradient>
                        </defs>

                        {/* Lines connecting elements */}
                        <path d="M120 150 Q200 200 350 250" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
                        <path d="M680 180 Q600 220 450 280" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
                        <path d="M150 450 Q250 400 350 380" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
                        <path d="M650 420 Q550 380 450 360" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
                    </svg>

                    {/* Floating Elements */}

                    {/* 27%+ AOV Increase - Top Left */}
                    <motion.div
                        className="absolute left-[8%] top-[10%] bg-purple-500 text-white p-4 rounded-2xl shadow-xl z-30 max-w-[200px]"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-lime-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                📊
                            </div>
                            <div className="bg-lime-400 text-black px-2 py-1 rounded text-xs font-bold">+</div>
                        </div>
                        <p className="font-bold text-xl">27% +</p>
                        <p className="text-xs opacity-90">Average AOV<br />Increase</p>
                    </motion.div>

                    {/* Shopping Cart Icon - Top Right */}
                    <motion.div
                        className="absolute right-[15%] top-[15%] bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-30"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </motion.div>

                    {/* 16.3% Conversion Rate - Right Side */}
                    <motion.div
                        className="absolute right-[5%] top-[35%] bg-lime-400 text-gray-900 p-4 rounded-2xl shadow-xl z-30 max-w-[200px]"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="text-xl">💬</div>
                            <div className="text-gray-800 text-xl font-bold">✕</div>
                        </div>
                        <p className="font-bold text-xl text-gray-900">16.3%</p>
                        <p className="text-xs text-gray-700">Average Chat<br />Conversion Rate</p>
                    </motion.div>

                    {/* Instant Setup - Bottom Left */}
                    <motion.div
                        className="absolute left-[12%] bottom-[25%] bg-lime-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-lg z-30"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Instant Setup
                    </motion.div>

                    {/* 95+ Languages - Bottom Right */}
                    <motion.div
                        className="absolute right-[8%] bottom-[20%] bg-purple-500 text-white px-4 py-3 rounded-full font-medium text-sm shadow-lg z-30"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        95+ Languages Supported
                    </motion.div>
                </section>

                {/* Company Logos Section */}
                <motion.section
                    className="py-8 border-t border-gray-200 mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="flex justify-center items-center gap-8 md:gap-12 opacity-60">
                        <div className="text-gray-600 font-bold text-lg">commerce</div>
                        <div className="text-gray-600 font-bold text-lg">bexit</div>
                        <div className="text-gray-600 font-bold text-lg italic">flex</div>
                        <div className="text-gray-600 font-bold text-lg italic">Shopify</div>
                        <div className="text-gray-600 font-bold text-lg">LE PETIT</div>
                        <div className="text-gray-600 font-bold text-lg">PHARMA</div>
                        <div className="text-gray-600 font-bold text-lg">POLICE</div>
                        <div className="text-gray-600 font-bold text-lg">Tropicfeel</div>
                        <div className="text-gray-600 font-bold text-lg">the</div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
