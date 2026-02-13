import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Notification from '../components/Notification';

const Contact = () => {
    const { t } = useTranslation();
    const [showNotification, setShowNotification] = useState(false);

    return (
        <div className="min-h-screen">
            <Notification
                message={t('notification.message')}
                submessage={t('notification.submessage')}
                isOpen={showNotification}
                onClose={() => setShowNotification(false)}
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-accent/70 via-accent/50 to-accent/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2560&auto=format&fit=crop" 
                        alt="Contact Us" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wider uppercase backdrop-blur-sm">
                            {t('contact.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                            {t('nav.contact')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                            {t('contact.heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="bg-nature-sand/30 py-12 sm:py-16 lg:py-20">

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-30 -mt-16 md:-mt-12 lg:-mt-20">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 md:space-y-10"
                    >
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-900/5 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 flex items-start gap-4 md:gap-6">
                                <div className="p-3 md:p-4 bg-primary-50 rounded-2xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                                    <MapPin size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-primary-900">{t('contact.visitUs')}</h3>
                                    <p className="text-gray-600 text-base md:text-lg">{t('contact.address')}<br/>{t('contact.country')}</p>
                                    <p className="text-primary-500 font-medium mt-4 text-xs md:text-sm uppercase tracking-wide">
                                        {t('contact.contactForAppointments')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-900/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10 flex items-start gap-4 md:gap-6">
                                <div className="p-3 md:p-4 bg-secondary-50 rounded-2xl text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-colors shrink-0">
                                    <Mail size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-primary-900">{t('contact.emailUs')}</h3>
                                    <p className="text-gray-600 text-base md:text-lg break-all">info@awerdcp.org</p>
                                    <p className="text-gray-600 text-base md:text-lg break-all">support@awerdcp.org</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-900/5 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                             <div className="relative z-10 flex items-start gap-4 md:gap-6">
                                 <div className="p-3 md:p-4 bg-gray-50 rounded-2xl text-gray-600 group-hover:bg-gray-800 group-hover:text-white transition-colors shrink-0">
                                    <Phone size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-primary-900">{t('contact.callUs')}</h3>
                                    <p className="text-gray-600 text-base md:text-lg">{t('contact.contactViaEmail')}</p>
                                    <p className="text-gray-400 mt-2 text-sm">{t('contact.forInquiries')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-primary-900/5"
                    >
                        <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-primary-900">{t('contact.sendMessage')}</h3>
                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); setShowNotification(true); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">{t('contact.fullName')}</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-300 focus:bg-white transition-all outline-none text-sm md:text-base"
                                        placeholder={t('contact.namePlaceholder')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">{t('contact.email')}</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-300 focus:bg-white transition-all outline-none text-sm md:text-base"
                                        placeholder={t('contact.emailPlaceholder')}
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">{t('contact.subject')}</label>
                                <input 
                                    type="text" 
                                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-300 focus:bg-white transition-all outline-none text-sm md:text-base"
                                    placeholder={t('contact.subjectPlaceholder')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">{t('contact.message')}</label>
                                <textarea 
                                    rows={5}
                                    className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary-300 focus:bg-white transition-all outline-none resize-none text-sm md:text-base"
                                    placeholder={t('contact.messagePlaceholder')}
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <button 
                                    onClick={(e) => { e.preventDefault(); setShowNotification(true); }}
                                    type="button"
                                    className="w-full bg-primary-600 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 md:gap-3 group text-base md:text-lg"
                                >
                                    {t('contact.sendButton')}
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 md:mt-20 rounded-3xl overflow-hidden shadow-xl shadow-primary-900/5 border-2 md:border-4 border-white"
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.02705973711!2d-15.9329712!3d23.7142645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc2247e8101737e3%3A0xc4f4477813a30c5e!2sDakhla!5e0!3m2!1sen!2sma!4v1710000000000!5m2!1sen!2sma" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </motion.div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
