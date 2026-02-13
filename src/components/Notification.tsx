import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';
import { useEffect } from 'react';

interface NotificationProps {
    message: string;
    submessage?: string;
    isOpen: boolean;
    onClose: () => void;
}

const Notification = ({ message, submessage, isOpen, onClose }: NotificationProps) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] w-full max-w-[400px]"
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex ring-1 ring-black/5">
                        {/* Accent Bar */}
                        <div className="w-2 bg-gradient-to-b from-primary-500 to-primary-700"></div>
                        
                        <div className="flex-1 p-5 flex items-start gap-4">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                                <Info className="text-primary-600" size={20} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-0.5">
                                <h3 className="text-gray-900 font-heading font-bold text-lg leading-tight mb-1">
                                    {message}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {submessage || "Functionality coming soon."}
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-all -mt-1 -mr-1"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
