import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenWaitlist: () => void;
}

export function ComingSoonModal({ isOpen, onClose, onOpenWaitlist }: ComingSoonModalProps) {
    const handleJoinWaitlist = () => {
        onClose();
        onOpenWaitlist();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-md mx-auto"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <div className="bg-premium-glass/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="relative p-8 text-center">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                {/* Icon */}
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                    <Download className="text-white" size={36} />
                                </div>

                                {/* Title */}
                                <h2 className="font-heading text-3xl font-bold text-white mb-4">
                                    Coming Soon!
                                </h2>

                                {/* Message */}
                                <p className="text-white/80 text-lg leading-relaxed mb-8">
                                    Our mobile app is in development. Be the first to know when it launches and get exclusive early access.
                                </p>

                                {/* CTA Button */}
                                <Button
                                    onClick={handleJoinWaitlist}
                                    className="w-full btn-premium font-semibold py-4 text-lg"
                                >
                                    Join the Waitlist
                                    <ArrowRight className="ml-2" size={20} />
                                </Button>

                                {/* Additional Info */}
                                <p className="text-white/60 text-sm mt-4">
                                    Get notified when the app is ready for download
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 