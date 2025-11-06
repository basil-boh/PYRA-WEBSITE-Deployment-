import { motion } from 'framer-motion';

export function AboutHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #334155 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Flowing data streams */}
            <div className="absolute inset-0">
                {/* Top data stream */}
                <motion.div
                    className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-32 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Bottom data streams */}
                <motion.div
                    className="absolute bottom-32 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Growing financial charts */}
            <div className="absolute inset-0">
                {/* Chart 1 - Growing line */}
                <svg className="absolute top-40 left-20 w-32 h-20 opacity-30" viewBox="0 0 128 80">
                    <motion.path
                        d="M0,80 L20,60 L40,40 L60,30 L80,20 L100,15 L120,10 L128,5"
                        stroke="url(#chartGradient1)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 1 }}
                    />
                    <defs>
                        <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Chart 2 - Bar chart */}
                <svg className="absolute top-60 right-32 w-24 h-20 opacity-30" viewBox="0 0 96 80">
                    <motion.rect
                        x="10" y="60" width="8" height="20"
                        fill="url(#chartGradient2)"
                        initial={{ height: 0, y: 80 }}
                        animate={{ height: 20, y: 60 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
                    />
                    <motion.rect
                        x="25" y="50" width="8" height="30"
                        fill="url(#chartGradient2)"
                        initial={{ height: 0, y: 80 }}
                        animate={{ height: 30, y: 50 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2.2 }}
                    />
                    <motion.rect
                        x="40" y="40" width="8" height="40"
                        fill="url(#chartGradient2)"
                        initial={{ height: 0, y: 80 }}
                        animate={{ height: 40, y: 40 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2.4 }}
                    />
                    <motion.rect
                        x="55" y="30" width="8" height="50"
                        fill="url(#chartGradient2)"
                        initial={{ height: 0, y: 80 }}
                        animate={{ height: 50, y: 30 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2.6 }}
                    />
                    <motion.rect
                        x="70" y="20" width="8" height="60"
                        fill="url(#chartGradient2)"
                        initial={{ height: 0, y: 80 }}
                        animate={{ height: 60, y: 20 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2.8 }}
                    />
                    <defs>
                        <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Chart 3 - Pie chart */}
                <svg className="absolute bottom-40 left-32 w-20 h-20 opacity-30" viewBox="0 0 80 80">
                    <motion.circle
                        cx="40" cy="40" r="30"
                        fill="transparent"
                        stroke="url(#chartGradient3)"
                        strokeWidth="8"
                        strokeDasharray="47 188"
                        initial={{ strokeDasharray: "0 188" }}
                        animate={{ strokeDasharray: "47 188" }}
                        transition={{ duration: 3, ease: "easeOut", delay: 3 }}
                    />
                    <defs>
                        <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating financial icons */}
            <div className="absolute inset-0">
                {/* Credit card icon */}
                <motion.div
                    className="absolute top-24 right-20 w-12 h-8 border border-cyan-400/30 rounded-lg bg-cyan-400/10"
                    animate={{
                        y: [-10, 10, -10],
                        rotateY: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Dollar sign */}
                <motion.div
                    className="absolute top-48 left-16 w-10 h-10 border border-emerald-400/30 rounded-full bg-emerald-400/10 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <span className="text-emerald-400 text-lg font-bold">$</span>
                </motion.div>

                {/* Trending up icon */}
                <motion.div
                    className="absolute bottom-48 right-16 w-12 h-12 border border-blue-400/30 rounded-lg bg-blue-400/10 flex items-center justify-center"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </motion.div>

                {/* Shield icon */}
                <motion.div
                    className="absolute bottom-32 left-20 w-10 h-12 border border-purple-400/30 rounded-lg bg-purple-400/10 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotateY: [0, 180, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-5 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </motion.div>
            </div>

            {/* Dynamic grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Floating particles representing data points */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + (i % 3) * 20}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-emerald-600/5"
                animate={{
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 