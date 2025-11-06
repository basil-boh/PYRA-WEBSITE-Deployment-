import { motion } from 'framer-motion';

export function ContactHeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic communication gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-900/20 to-slate-900"
                animate={{
                    background: [
                        "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #0f172a 100%)",
                        "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)"
                    ]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Communication network visualization */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1200 800">
                    <defs>
                        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>

                    {/* Central hub */}
                    <motion.circle
                        cx="600" cy="400" r="40"
                        fill="url(#contactGradient)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    />

                    {/* Connection nodes */}
                    {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * (Math.PI / 180);
                        const x = 600 + Math.cos(angle) * 150;
                        const y = 400 + Math.sin(angle) * 150;
                        return (
                            <motion.circle
                                key={i}
                                cx={x} cy={y} r="20"
                                fill="url(#contactGradient)"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 1 + i * 0.2 }}
                            />
                        );
                    })}

                    {/* Connection lines */}
                    {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * (Math.PI / 180);
                        const x = 600 + Math.cos(angle) * 150;
                        const y = 400 + Math.sin(angle) * 150;
                        return (
                            <motion.line
                                key={i}
                                x1="600" y1="400" x2={x} y2={y}
                                stroke="url(#contactGradient)"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 2.5 + i * 0.1 }}
                            />
                        );
                    })}
                </svg>
            </div>

            {/* Floating communication elements */}
            <div className="absolute inset-0">
                {/* Message bubble */}
                <motion.div
                    className="absolute top-32 left-20 w-20 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                    animate={{
                        y: [-10, 10, -10],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </motion.div>

                {/* Phone icon */}
                <motion.div
                    className="absolute top-48 right-24 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </motion.div>

                {/* Email icon */}
                <motion.div
                    className="absolute bottom-48 left-24 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotateY: [0, 180, 0]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </motion.div>

                {/* Support chat */}
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                </motion.div>
            </div>

            {/* Communication particles */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-500 rounded-full"
                        style={{
                            left: `${15 + i * 8}%`,
                            top: `${25 + (i % 3) * 20}%`
                        }}
                        animate={{
                            y: [0, -25, 0],
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

            {/* Communication flow streams */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Communication grid overlay */}
            <div className="absolute inset-0 opacity-15">
                <motion.div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '50px 50px']
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Animated gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-purple-600/5 to-pink-600/5"
                animate={{
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 