"use client";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function HeroSection() {
    const [hovered, setHovered] = useState<number | null>(null);
    const active = hovered ?? 0;

    const logos = useMemo(
        () => ["commerce", "bexit", "flex", "Shopify", "LE PETIT", "PHARMA", "POLICE", "Tropicfeel", "the"],
        []
    );

    // Scene constants
    const VIEW_W = 800;
    const VIEW_H = 600;
    const PHONE_W = 320;
    const PHONE_H = 600;
    const PHONE_X = (VIEW_W - PHONE_W) / 2; // 240
    const PHONE_Y = 0;

    // Anchor points on phone edge (where lines originate)
    const phoneAnchors = {
        topLeft: { x: PHONE_X, y: 210 },
        topRight: { x: PHONE_X + PHONE_W, y: 210 },
        midRight: { x: PHONE_X + PHONE_W, y: 330 },
        bottomLeft: { x: PHONE_X, y: 430 },
        bottomRight: { x: PHONE_X + PHONE_W, y: 460 }
    };

    type CardDef = {
        id: string;
        x: number;
        y: number;
        title?: string;
        subtitle?: string;
        icon?: string;
        className: string;
        anchor: keyof typeof phoneAnchors;
        content: React.ReactNode;
    };

    // Cards with exact coordinates (center points) – tune as needed
    const cards: CardDef[] = [
        {
            id: "aov",
            x: 125,
            y: 165,
            anchor: "topLeft",
            className: "bg-purple-500/80 text-white",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-lime-400 text-black w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">📊</span>
                        <span className="bg-lime-400 text-black px-2 py-0.5 rounded text-[10px] font-bold">+</span>
                    </div>
                    <p className="font-bold text-lg leading-none">27% +</p>
                    <p className="text-[11px] mt-1 leading-snug opacity-90">Average AOV Increase</p>
                </div>
            )
        },
        {
            id: "cart",
            x: 680,
            y: 160,
            anchor: "topRight",
            className: "bg-gray-900/90 text-white w-14 h-14 flex items-center justify-center p-0",
            content: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
            )
        },
        {
            id: "conversion",
            x: 690,
            y: 330,
            anchor: "midRight",
            className: "bg-lime-400/85 text-gray-900",
            content: (
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">💬</span>
                        <span className="text-gray-800 text-lg font-bold">✕</span>
                    </div>
                    <p className="font-bold text-lg leading-none">16.3%</p>
                    <p className="text-[11px] mt-1 leading-snug">Chat Conversion Rate</p>
                </div>
            )
        },
        {
            id: "setup",
            x: 165,
            y: 430,
            anchor: "bottomLeft",
            className: "bg-lime-400/85 text-gray-900 rounded-full px-6 py-3",
            content: <span className="text-sm font-semibold">Instant Setup</span>
        },
        {
            id: "langs",
            x: 620,
            y: 470,
            anchor: "bottomRight",
            className: "bg-purple-500/85 text-white rounded-full px-5 py-3",
            content: <span className="text-sm font-medium">95+ Languages</span>
        }
    ];

    // Build connector paths between phone anchor and card center
    const buildPath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2;
        // slight curve control point offset
        const cx = mx + (to.x - from.x) * 0.1;
        const cy = my - 40;
        return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
    };

    return (
        <div className="relative overflow-hidden">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.35),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.30),transparent_65%)] mix-blend-screen" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(163,230,53,0.25),transparent_70%)] mix-blend-screen" />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
            </div>
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none" />

            <div className="relative z-10">
                {/* Hero Copy */}
                <section className="text-center">
                    <br />
                    <br />
                    <motion.h1
                        className="text-5xl md:text-[56px] font-bold max-w-4xl mx-auto leading-tight text-[#17202b] mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        The AI Agent for Ecom that<br />turns Browsers into Buyers
                    </motion.h1>
                    <div className="flex justify-center mb-14">
                        <div className="relative inline-flex items-center rounded-full bg-white/70 border border-gray-200 p-1 backdrop-blur-sm shadow-sm">
                            <div
                                className="absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-8px)] rounded-full bg-[#b9fd33] shadow transition-transform duration-300 ease-out"
                                style={{ transform: active === 0 ? "translateX(0)" : "translateX(100%)" }}
                            />
                            <button
                                onMouseEnter={() => setHovered(0)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${active === 0 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"
                                    }`}
                            >
                                Start free trial
                            </button>
                            <button
                                onMouseEnter={() => setHovered(1)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${active === 1 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"
                                    }`}
                            >
                                Book a demo
                            </button>
                        </div>
                    </div>
                </section>

                {/* Scene (desktop) */}
                <section className="relative hidden md:block">
                    <div className="relative mx-auto" style={{ width: VIEW_W, height: VIEW_H }}>
                        {/* SVG connectors */}
                        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}>
                            <defs>
                                <linearGradient id="metricLine" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="50%" stopColor="#84cc16" />
                                    <stop offset="100%" stopColor="#6366f1" />
                                </linearGradient>
                            </defs>
                            {cards.map((c, i) => {
                                const from = phoneAnchors[c.anchor];
                                const to = { x: c.x, y: c.y };
                                return (
                                    <motion.path
                                        key={c.id}
                                        d={buildPath(from, to)}
                                        stroke="url(#metricLine)"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.4, delay: i * 0.15, ease: "easeInOut" }}
                                    />
                                );
                            })}
                        </svg>

                        {/* Phone */}
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="absolute shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] w-[320px] h-[600px] rounded-[38px] flex flex-col overflow-hidden border border-white/60 ring-1 ring-black/5 bg-gradient-to-br from-white to-white/90"
                            style={{ left: PHONE_X, top: PHONE_Y }}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[38px] before:absolute before:inset-0 before:rounded-[38px] before:bg-[linear-gradient(120deg,rgba(255,255,255,0.6),rgba(255,255,255,0)_40%,rgba(0,0,0,0.05))]" />
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/80 rounded-full flex items-center justify-center">
                                <div className="w-16 h-2 rounded bg-gradient-to-r from-gray-700 to-gray-600" />
                            </div>
                            <div className="bg-gray-800/95 py-3 px-4 flex items-center gap-3 rounded-t-[38px]">
                                <div className="w-9 h-9 bg-lime-400 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-800 font-bold text-xs">zc</span>
                                </div>
                                <p className="text-white text-xs font-medium tracking-wide">ZipChat • Live</p>
                            </div>
                            <div className="flex-1 p-4 bg-gray-50 space-y-3 overflow-y-auto">
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
                            <div className="p-3 border-t bg-white/70 backdrop-blur flex gap-2">
                                <div className="flex-1">
                                    <div className="h-9 bg-gray-100 rounded-xl flex items-center px-3 text-xs text-gray-500">
                                        Type a message...
                                    </div>
                                </div>
                                <button className="w-9 h-9 rounded-xl bg-purple-500 text-white text-xs font-semibold">
                                    ➤
                                </button>
                            </div>
                        </motion.div>

                        {/* Cards */}
                        {cards.map((c, i) => (
                            <motion.div
                                key={c.id}
                                initial={{ y: 12, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                                className={`absolute rounded-2xl shadow-lg backdrop-blur-md border border-white/30 px-4 py-4 text-xs ${c.className}`}
                                style={{
                                    left: `${(c.x / VIEW_W) * 100}%`,
                                    top: `${(c.y / VIEW_H) * 100}%`,
                                    transform: "translate(-50%,-50%)"
                                }}
                            >
                                {c.content}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Mobile simplified (no lines) */}
                <section className="md:hidden px-6 pb-16">
                    <motion.div
                        initial={{ scale: 0.94, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative mx-auto bg-white rounded-[32px] shadow-xl w-[280px] h-[540px] flex flex-col overflow-hidden border border-gray-200"
                    >
                        <div className="bg-gray-800 py-3 px-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-lime-400 rounded-xl flex items-center justify-center">
                                <span className="text-gray-800 font-bold text-xs">zc</span>
                            </div>
                            <p className="text-white text-xs font-medium tracking-wide">ZipChat • Live</p>
                        </div>
                        <div className="flex-1 p-4 bg-gray-50 space-y-3 overflow-y-auto">
                            <div className="bg-white rounded-2xl p-3 max-w-[85%] shadow-sm">
                                <p className="text-xs text-gray-800">Do you have sunglasses with green lenses?</p>
                            </div>
                            <div className="bg-purple-500 text-white rounded-2xl px-3 py-2 ml-auto max-w-[70%]">
                                <p className="text-xs font-medium">Yes sure!</p>
                            </div>
                            <div className="bg-white rounded-2xl p-3 max-w-[85%] shadow-sm">
                                <p className="text-xs text-gray-800">Are you looking for a model for men or women?</p>
                            </div>
                            <div className="bg-purple-500 text-white rounded-2xl px-3 py-2 ml-auto max-w-[50%]">
                                <p className="text-xs font-medium">Men</p>
                            </div>
                            <div className="bg-purple-500 text-white rounded-2xl p-3 max-w-[90%] shadow-sm">
                                <p className="text-xs">Glasses, here are the top selling green lens...</p>
                                <div className="bg-white/20 rounded-xl p-2 mt-2">
                                    <p className="text-[10px]">Thank you</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className="mt-8 grid gap-4 text-center">
                        <div className="text-sm font-semibold text-purple-700">27%+ AOV Increase</div>
                        <div className="text-sm font-semibold text-lime-600">16.3% Chat Conversion</div>
                        <div className="text-sm font-semibold text-purple-600">95+ Languages</div>
                    </div>
                </section>

                {/* Scrolling company logos (unchanged) */}
                <motion.section
                    className="py-10 border-t border-gray-200 mt-12 relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="marquee flex gap-12 items-center will-change-transform">
                            {logos.concat(logos).map((l, i) => (
                                <span
                                    key={i + l}
                                    className="text-gray-600 font-semibold text-lg opacity-70 hover:opacity-100 transition"
                                >
                                    {l}
                                </span>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
                    </div>
                </motion.section>
            </div>

            <style jsx>{`
                .marquee {
                    animation: scroll 26s linear infinite;
                    width: max-content;
                    padding-left: 2rem;
                }
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
}
