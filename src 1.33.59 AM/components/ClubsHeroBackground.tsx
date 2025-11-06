import { motion } from 'framer-motion';

export function ClubsHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic status gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #065f46 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #10b981 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #065f46 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Tier progression visualization */}
            <div className="absolute inset-0 opacity-25">
                <svg className="w-full h-full" viewBox="0 0 1200 800">
                    <defs>
                        <linearGradient id="tierGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    {/* Tier levels */}
                    <motion.rect
                        x="100" y="600" width="200" height="60" rx="30"
                        fill="url(#tierGradient)"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />
                    <motion.rect
                        x="400" y="500" width="200" height="60" rx="30"
                        fill="url(#tierGradient)"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    />
                    <motion.rect
                        x="700" y="400" width="200" height="60" rx="30"
                        fill="url(#tierGradient)"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                    />

                    {/* Connection lines */}
                    <motion.line
                        x1="300" y1="630" x2="400" y2="530"
                        stroke="url(#tierGradient)"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    />
                    <motion.line
                        x1="600" y1="530" x2="700" y2="430"
                        stroke="url(#tierGradient)"
                        strokeWidth="3"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2.5 }}
                    />
                </svg>
            </div>

            {/* Floating achievement elements */}
            <div className="absolute inset-0">
                {/* Spark badge */}
                <motion.div
                    className="absolute top-28 left-24 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </motion.div>

                {/* Prime badge */}
                <motion.div
                    className="absolute top-48 right-28 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </motion.div>

                {/* Nova crown */}
                <motion.div
                    className="absolute bottom-48 left-28 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l3-3m0 0l-3-3m3 3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </motion.div>

                {/* Achievement unlock */}
                <motion.div
                    className="absolute bottom-32 right-24 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                        rotateY: [0, 180, 360],
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </motion.div>
            </div>

            {/* Success particles */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-full"
                        style={{
                            left: `${20 + i * 10}%`,
                            top: `${35 + (i % 3) * 25}%`
                        }}
                        animate={{
                            y: [0, -25, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                            duration: 3 + i * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            {/* Status flow streams */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Achievement grid */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
            `,
                        backgroundSize: '35px 35px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '35px 35px']
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-emerald-600/5 to-purple-600/5"
                animate={{
                    opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 