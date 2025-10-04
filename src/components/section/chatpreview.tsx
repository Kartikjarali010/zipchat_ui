"use client";

import { motion } from "framer-motion";

export default function ChatPreview() {
    return (
        <div className="hero-gradient relative overflow-hidden -mt-32 pt-32">
            <div className="max-w-7xl mx-auto px-6">
                <section className="relative flex justify-center items-center py-20 min-h-[80vh]">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-[600px] h-[600px] bg-gradient-to-br from-purple-300/40 via-purple-400/30 to-blue-300/20 rounded-full blur-[120px]" />
                    </div>

                    {/* Central Phone Mockup */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative bg-white rounded-[25px] shadow-2xl w-[280px] h-[480px] z-20 flex flex-col overflow-hidden border border-gray-200"
                    >
                        {/* Phone Header */}
                        <div className="bg-gray-50 py-3 px-4 flex items-center gap-2 border-b border-gray-200">
                            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">zc</span>
                            </div>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 p-4 bg-gray-50">
                            <div className="bg-white rounded-xl p-3 mb-3 shadow-sm">
                                <p className="text-sm text-gray-800">Do you have sunglasses with green lenses?</p>
                            </div>

                            <div className="bg-purple-500 text-white rounded-xl px-4 py-2 mb-4 ml-auto max-w-[80%]">
                                <p className="text-sm">Yes sure!</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Elements */}

                    {/* 27%+ AOV Increase - Top Left */}
                    <motion.div
                        className="absolute left-[8%] top-[15%] bg-purple-500 text-white px-4 py-3 rounded-2xl shadow-xl z-30 min-w-[200px]"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-lime-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                �
                            </div>
                            <div>
                                <p className="font-bold text-lg">27% +</p>
                                <p className="text-xs opacity-90">Average AOV Increase</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Shopping Cart Icon - Top Right */}
                    <motion.div
                        className="absolute right-[15%] top-[20%] bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-30"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        🛒
                    </motion.div>

                    {/* 16.3% Conversion Rate - Right Side */}
                    <motion.div
                        className="absolute right-[5%] top-[40%] bg-lime-400 text-gray-900 px-4 py-3 rounded-2xl shadow-xl z-30 min-w-[180px]"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-xl">💬</div>
                            <div>
                                <p className="font-bold text-lg">16.3%</p>
                                <p className="text-xs">Average Chat Conversion Rate</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Instant Setup - Bottom Left */}
                    <motion.div
                        className="absolute left-[12%] bottom-[25%] bg-lime-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-lg z-30"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Instant Setup
                    </motion.div>

                    {/* Website Builder Interface - Bottom Center */}
                    <motion.div
                        className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-xl p-3 shadow-xl z-30 flex items-center gap-2"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="bg-white text-gray-800 rounded w-8 h-8 flex items-center justify-center font-bold">
                            W.
                        </div>
                        <div className="flex gap-1 text-xs">
                            <span className="bg-lime-400 text-gray-800 px-2 py-1 rounded">Creator</span>
                            <span>Font & Color</span>
                            <span>Details</span>
                            <span>Elements</span>
                            <span>Score</span>
                            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded">Visit Site</span>
                        </div>
                    </motion.div>

                    {/* 95+ Languages - Bottom Right */}
                    <motion.div
                        className="absolute right-[8%] bottom-[30%] bg-purple-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg z-30"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        95+ Languages Supported
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
