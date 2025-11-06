import { motion } from 'framer-motion';

export function ProductHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic tech gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Circuit board pattern */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1200 800">
                    <defs>
                        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    {/* Circuit paths */}
                    <motion.path
                        d="M100,100 L300,100 L300,200 L500,200 L500,300 L700,300 L700,400 L900,400"
                        stroke="url(#circuitGradient)"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 1 }}
                    />
                    <motion.path
                        d="M200,150 L400,150 L400,250 L600,250 L600,350 L800,350"
                        stroke="url(#circuitGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 2 }}
                    />
                    <motion.path
                        d="M150,300 L350,300 L350,400 L550,400 L550,500 L750,500"
                        stroke="url(#circuitGradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 4, ease: "easeOut", delay: 3 }}
                    />

                    {/* Circuit nodes */}
                    {[...Array(12)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={150 + i * 80}
                            cy={150 + (i % 3) * 100}
                            r="4"
                            fill="url(#circuitGradient)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 2 + i * 0.1 }}
                        />
                    ))}
                </svg>
            </div>

            {/* Floating tech elements */}
            <div className="absolute inset-0">
                {/* Credit card chip */}
                <motion.div
                    className="absolute top-32 left-20 w-16 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"
                    animate={{
                        rotateY: [0, 180, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="grid grid-cols-2 gap-1">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full" />
                        ))}
                    </div>
                </motion.div>

                {/* Data flow arrows */}
                <motion.div
                    className="absolute top-48 right-24 w-20 h-20 border border-emerald-400/40 rounded-lg bg-emerald-400/10 flex items-center justify-center"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </motion.div>

                {/* Innovation spark */}
                <motion.div
                    className="absolute bottom-48 left-24 w-16 h-16 border border-purple-400/40 rounded-full bg-purple-400/10 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </motion.div>

                {/* Security shield */}
                <motion.div
                    className="absolute bottom-32 right-20 w-14 h-16 border border-blue-400/40 rounded-lg bg-blue-400/10 flex items-center justify-center"
                    animate={{
                        y: [0, -15, 0],
                        rotateY: [0, 180, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </motion.div>
            </div>

            {/* Data streams */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating innovation particles */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${25 + (i % 2) * 30}%`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>

            {/* Tech grid overlay */}
            <div className="absolute inset-0 opacity-15">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
            `,
                        backgroundSize: '30px 30px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '30px 30px']
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-600/5 to-purple-600/5"
                animate={{
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 