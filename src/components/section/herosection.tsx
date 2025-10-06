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
        className: string;
        anchor: keyof typeof phoneAnchors;
        content: React.ReactNode;
        w?: number;       // optional width estimate
        h?: number;       // optional height estimate
        end?: { x: number; y: number }; // optional path end override (corner)
    };

    // Cards with exact coordinates (center points) – tune as needed
    const cards: CardDef[] = [
        {
            id: "aov",
            x: -25,
            y: 140, // moved up
            anchor: "topLeft",
            className: "bg-purple-500/80 text-white",
            w: 190,
            h: 120, // adjusted height estimate for better line alignment
            end: {
                x: 25 + 190 / 2,          // same x corner
                y: 150 - 5           // new y so quadratic path meets corner
            },
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
            y: 180,
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
            x: 800,
            y: 350,
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
            x: 55,
            y: 520,
            anchor: "bottomLeft",
            className: "bg-lime-400/85 text-gray-900 rounded-full px-6 py-3",
            w: 230,
            h: 64,
            end: {
                x: 45 + 230 / 2,
                y: 550 - 64 / 2
            }, // top-right corner of pill
            content: <span className="text-sm font-semibold">Instant Setup</span>
        },
        {
            id: "langs",
            x: 700,
            y: 520,
            anchor: "bottomRight",
            className: "bg-purple-500/85 text-white rounded-full px-5 py-3",
            w: 230,
            h: 64,
            end: {
                x: 600 + 230 / 2,
                y: 550 - 55 / 2
            },
            content: <span className="text-sm font-medium">95+ Languages</span>
        }
    ];

    // Build connector paths between phone anchor and card center
    const buildPath = (from: { x: number; y: number }, to: { x: number; y: number }) => {
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2;
        const cx = mx + (to.x - from.x) * 0.1;
        const cy = my - 40;
        return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
    };

    // Chat animation variants
    const chatContainerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.30,      // slower stagger
                delayChildren: 0.40         // later initial start
            }
        }
    };
    const bubbleVariants = {
        hidden: { opacity: 0, y: 8, scale: 0.97 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 160, damping: 30 } // gentler, slower spring
        }
    };

    return (
        <div className="relative overflow-hidden">
            {/* Background gradients */}
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
                                className={`cursor-pointer relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${active === 0 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"
                                    }`}
                            >
                                Start free trial
                            </button>
                            <button
                                onMouseEnter={() => setHovered(1)}
                                onMouseLeave={() => setHovered(null)}
                                className={`cursor-pointer relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${active === 1 ? "text-[#0f1621]" : "text-gray-700 hover:text-[#0f1621]"
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
                                <linearGradient id="metricLine" x1="0%" y1="0%" x2="120%" y2="0%">
                                    <stop offset="0%" stopColor="#000000ff" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                            {cards.map((c, i) => {
                                const from = phoneAnchors[c.anchor];
                                const to = c.end ? c.end : { x: c.x, y: c.y };
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
                                        transition={{ duration: 2.0, delay: i * 0.20, ease: "easeInOut" }} // slower line draw
                                    />
                                );
                            })}
                        </svg>

                        {/* Localized blue gradient directly behind the phone */}
                        <div
                            className="absolute pointer-events-none rounded-[60px] bg-gradient-to-br from-purple-500/30 via-purple-400/20 to-transparent blur-xl"
                            style={{
                                left: PHONE_X - 40,
                                top: PHONE_Y - 40,
                                width: PHONE_W + 80,
                                height: PHONE_H + 80
                            }}
                        />

                        {/* Phone */}
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.7 }}
                            viewport={{ once: true }}
                            className="absolute z-20 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] w-[320px] h-[600px] rounded-[38px] flex flex-col overflow-hidden border border-white/60 ring-1 ring-black/5 bg-gradient-to-br from-white to-white/90"
                            style={{ left: PHONE_X, top: PHONE_Y }}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[38px] before:absolute before:inset-0 before:rounded-[38px] " />
                            <div className="bg-gray-800/95 py-3 px-4 flex items-center gap-3 rounded-t-[38px]">
                                <div className="w-9 h-9 bg-lime-400 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-800 font-bold text-xs">zc</span>
                                </div>
                                <p className="text-white text-xs font-medium tracking-wide">ZipChat • Live</p>
                            </div>
                            <motion.div
                                className="flex-1 p-4 bg-gray-50 space-y-3 overflow-y-auto"
                                variants={chatContainerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                    <p className="text-sm text-gray-800">Do you have sunglasses with green lenses?</p>
                                </motion.div>
                                <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[70%]">
                                    <p className="text-sm font-medium">Yes sure!</p>
                                </motion.div>
                                <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                    <p className="text-sm text-gray-800">Are you looking for a model for men or women?</p>
                                </motion.div>
                                <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[50%]">
                                    <p className="text-sm font-medium">Men</p>
                                </motion.div>
                                <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                    <p className="text-sm text-gray-800">Glasses, here are the top selling green lens...</p>
                                </motion.div>
                                <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[50%]">
                                    <p className="text-sm font-medium">Thank you</p>
                                </motion.div>
                            </motion.div>
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
                        <motion.div
                            className="flex-1 p-4 bg-gray-50 space-y-3 overflow-y-auto"
                            variants={chatContainerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-3 max-w-[85%] shadow-sm">
                                <p className="text-xs text-gray-800">Do you have sunglasses with green lenses?</p>
                            </motion.div>
                            <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-3 py-2 ml-auto max-w-[70%]">
                                <p className="text-xs font-medium">Yes sure!</p>
                            </motion.div>
                            <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-3 max-w-[85%] shadow-sm">
                                <p className="text-xs text-gray-800">Are you looking for a model for men or women?</p>
                            </motion.div>
                            <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-3 py-2 ml-auto max-w-[50%]">
                                <p className="text-xs font-medium">Men</p>
                            </motion.div>
                            <motion.div variants={bubbleVariants} className="bg-white rounded-2xl p-4 max-w-[85%] shadow-sm">
                                <p className="text-sm text-gray-800">Glasses, here are the top selling green lens...</p>
                            </motion.div>
                            <motion.div variants={bubbleVariants} className="bg-purple-500 text-white rounded-2xl px-4 py-3 ml-auto max-w-[50%]">
                                <p className="text-sm font-medium">Thank you</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Scrolling company logos (unchanged) */}
                <motion.section
                    className="py-10 border-t border-white/10 mt-12 relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="marquee flex gap-20 items-center will-change-transform">
                            {logos.concat(logos).map((l, i) => (
                                <span
                                    key={i + l}
                                    className="text-gray-600 font-semibold text-lg opacity-70 hover:opacity-100 transition"
                                >
                                    {l}
                                </span>
                            ))}
                        </div>
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
            `}
            </style>
        </div>
    );
}
