import { motion } from 'framer-motion';

export function BlogHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic knowledge gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #0f766e 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #14b8a6 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #0f766e 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Flowing text patterns */}
            <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" viewBox="0 0 1200 800">
                    <defs>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14b8a6" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                    </defs>

                    {/* Flowing text lines */}
                    <motion.path
                        d="M50,150 Q300,100 550,150 T1050,150"
                        stroke="url(#textGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 1 }}
                    />
                    <motion.path
                        d="M50,250 Q400,200 750,250 T1150,250"
                        stroke="url(#textGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 1.5 }}
                    />
                    <motion.path
                        d="M50,350 Q350,300 650,350 T1150,350"
                        stroke="url(#textGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 2 }}
                    />
                    <motion.path
                        d="M50,450 Q250,400 550,450 T1050,450"
                        stroke="url(#textGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 2.5 }}
                    />

                    {/* Text nodes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={200 + i * 150}
                            cy={150 + (i % 4) * 100}
                            r="3"
                            fill="url(#textGradient)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 3 + i * 0.1 }}
                        />
                    ))}
                </svg>
            </div>

            {/* Floating knowledge elements */}
            <div className="absolute inset-0">
                {/* Lightbulb idea */}
                <motion.div
                    className="absolute top-28 left-20 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </motion.div>

                {/* Document insights */}
                <motion.div
                    className="absolute top-48 right-24 w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                        y: [-10, 10, -10],
                        rotateY: [0, 180, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </motion.div>

                {/* Knowledge sharing */}
                <motion.div
                    className="absolute bottom-48 left-24 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                </motion.div>

                {/* Analytics chart */}
                <motion.div
                    className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </motion.div>
            </div>

            {/* Knowledge particles */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
                        style={{
                            left: `${10 + i * 7}%`,
                            top: `${20 + (i % 4) * 20}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: 3 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15
                        }}
                    />
                ))}
            </div>

            {/* Knowledge flow streams */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Knowledge grid overlay */}
            <div className="absolute inset-0 opacity-12">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.4) 1px, transparent 1px)
            `,
                        backgroundSize: '45px 45px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '45px 45px']
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-cyan-600/5 to-blue-600/5"
                animate={{
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 