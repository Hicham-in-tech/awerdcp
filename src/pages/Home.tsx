import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Droplets, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Notification from '../components/Notification';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const [showNotification, setShowNotification] = useState(false);

    const stats = [
        { icon: <Users className="w-6 h-6" />, value: "5000+", label: t('stats.members') },
        { icon: <Leaf className="w-6 h-6" />, value: "120", label: t('stats.cleanups') },
        { icon: <Droplets className="w-6 h-6" />, value: "50", label: t('stats.water') },
        { icon: <ShieldCheck className="w-6 h-6" />, value: "15", label: t('stats.policy') },
    ];

    return (
        <div className="flex flex-col overflow-hidden">
            <Notification
                message={t('notification.message')}
                submessage={t('notification.submessage')}
                isOpen={showNotification}
                onClose={() => setShowNotification(false)}
            />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white overflow-hidden perspective-1000">
                <motion.div 
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
                 
                    <img 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop" 
                        alt="Background" 
                        className="w-full h-[120%] object-cover object-center"
                    />
                </motion.div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ opacity }}
                        className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block py-1 px-3 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-200 text-sm font-semibold mb-6 tracking-wider uppercase"
                        >
                            Dakhla-Oued Eddahab
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-lg px-4">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-4">
                            {t('hero.mission')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold transition-all shadow-xl hover:shadow-primary-600/50 flex items-center justify-center gap-2 group text-base md:text-lg">
                                 {t('hero.cta')} 
                                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                             <button 
                                onClick={() => setShowNotification(true)}
                                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-full font-bold transition-all text-base md:text-lg"
                             >
                             {t('hero.learnMore')}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest opacity-70">{t('hero.scroll')}</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
                </motion.div>
            </section>

             {/* Stats Section with Floating Design */}
             <div className="relative z-30 -mt-20 container mx-auto px-4 md:px-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center p-4">
                            <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-3">
                                {stat.icon}
                            </div>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">{stat.value}</h4>
                            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide font-medium">{stat.label}</p>
                        </div>
                    ))}
                 </div>
             </div>

             {/* Mission / Features Grid */}
             <section className="py-16 md:py-24 bg-nature-sand">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-900 mb-6">{t('pillars.title')}</h2>
                        <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            {t('pillars.description')}
                        </p>
                    </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                         {[
                             { title: t('pillars.consumer.title'), desc: t('pillars.consumer.desc'), icon: <ShieldCheck className="w-10 h-10" />, color: "bg-primary-50 text-primary-600" },
                             { title: t('pillars.environment.title'), desc: t('pillars.environment.desc'), icon: <Leaf className="w-10 h-10" />, color: "bg-secondary-50 text-secondary-600" },
                             { title: t('pillars.research.title'), desc: t('pillars.research.desc'), icon: <Droplets className="w-10 h-10" />, color: "bg-accent/10 text-accent" }
                         ].map((feature, i) => (
                             <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                             >
                                 <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                     {feature.icon}
                                 </div>
                                 <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">{feature.title}</h3>
                                 <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                                 <Link to="/activities" className="inline-flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                                    <button 
                                        onClick={() => setShowNotification(true)}
                                        className="text-primary-600 font-bold flex items-center hover:text-primary-700 transition-colors"
                                    >
                                        {t('hero.learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                 </Link>
                             </motion.div>
                         ))}
                     </div>
                 </div>
             </section>

             {/* Image & Content Section */}
             <section className="py-16 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                            <div className="hidden md:block absolute -top-10 -left-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                            <div className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-auto"
                            >
                                <img src="/assets/images/nature.jpeg" alt="Nature" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <span className="text-primary-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">{t('vision.label')}</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                                {t('vision.title')} <span className="text-primary-600 relative inline-block">{t('vision.highlight')}
                                    <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-primary-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                                {t('vision.description')}
                            </p>
                            
                            <div className="space-y-4">
                                {[t('vision.check1'), t('vision.check2'), t('vision.check3')].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Partners Marquee - DISABLED */}
             {/* <section className="py-16 bg-white border-t border-gray-100">
                 <div className="text-center mb-10">
                    <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm">{t('trustedPartners')}</p>
                 </div>
                 <div className="container mx-auto overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
                    
                    <div className="flex gap-16 animate-scroll w-max hover:[animation-play-state:paused]">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                <span className="text-2xl font-bold text-gray-400">{t('partnerLabel')} {i}</span>
                            </div>
                        ))}
                    </div>
                 </div>
             </section> */}
        </div>
    );
};

export default Home;
