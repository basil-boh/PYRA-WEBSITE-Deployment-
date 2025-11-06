import { motion } from 'framer-motion';

export function CareersHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic team gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #3730a3 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #6366f1 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #3730a3 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Team network visualization */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1200 800">
                    <defs>
                        <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>

                    {/* Team member nodes */}
                    {[...Array(8)].map((_, i) => (
                        <motion.circle
                            key={i}
                            cx={200 + (i % 4) * 200}
                            cy={200 + Math.floor(i / 4) * 200}
                            r="25"
                            fill="url(#teamGradient)"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: i * 0.2 }}
                        />
                    ))}

                    {/* Connection lines */}
                    <motion.line
                        x1="200" y1="200" x2="400" y2="200"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    />
                    <motion.line
                        x1="400" y1="200" x2="600" y2="200"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2.2 }}
                    />
                    <motion.line
                        x1="600" y1="200" x2="800" y2="200"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2.4 }}
                    />
                    <motion.line
                        x1="200" y1="400" x2="400" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2.6 }}
                    />
                    <motion.line
                        x1="400" y1="400" x2="600" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 2.8 }}
                    />
                    <motion.line
                        x1="600" y1="400" x2="800" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 3 }}
                    />

                    {/* Cross connections */}
                    <motion.line
                        x1="300" y1="200" x2="300" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 3.5 }}
                    />
                    <motion.line
                        x1="500" y1="200" x2="500" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 3.7 }}
                    />
                    <motion.line
                        x1="700" y1="200" x2="700" y2="400"
                        stroke="url(#teamGradient)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 3.9 }}
                    />
                </svg>
            </div>

            {/* Floating career elements */}
            <div className="absolute inset-0">
                {/* Growth arrow */}
                <motion.div
                    className="absolute top-32 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                        y: [-15, 15, -15],
                        rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </motion.div>

                {/* Team collaboration */}
                <motion.div
                    className="absolute top-48 right-24 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </motion.div>

                {/* Opportunity door */}
                <motion.div
                    className="absolute bottom-48 left-24 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
                    animate={{
                        rotateY: [0, 180, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m5-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </motion.div>

                {/* Learning curve */}
                <motion.div
                    className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </motion.div>
            </div>

            {/* Growth particles */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                        style={{
                            left: `${15 + i * 8}%`,
                            top: `${30 + (i % 3) * 20}%`
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1.3, 0.5]
                        }}
                        transition={{
                            duration: 4 + i * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            {/* Team flow streams */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-16 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Team grid overlay */}
            <div className="absolute inset-0 opacity-15">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
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

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-pink-600/5"
                animate={{
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 