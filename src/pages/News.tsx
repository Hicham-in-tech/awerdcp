import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Notification from '../components/Notification';

const News = () => {
    const { t } = useTranslation();
    const [showNotification, setShowNotification] = useState(false);

    const news = [
        { title: t('news.news1.title'), date: t('news.news1.date'), type: t('news.news1.type'), image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop" },
        { title: t('news.news2.title'), date: t('news.news2.date'), type: t('news.news2.type'), image: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?q=80&w=2671&auto=format&fit=crop" },
        { title: t('news.news3.title'), date: t('news.news3.date'), type: t('news.news3.type'), image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2672&auto=format&fit=crop" },
    ];

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
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/70 via-secondary-900/50 to-secondary-900/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2560&auto=format&fit=crop" 
                        alt="News & Updates" 
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
                            {t('news.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                            {t('nav.news')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                            {t('news.heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="bg-white py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 md:gap-16">
                    {news.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="group flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-transparent"
                        >
                            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl md:rounded-3xl relative h-64 md:h-80 shadow-lg">
                                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 z-10 flex items-center gap-1 shadow-sm">
                                     <Tag size={12} className="text-secondary-500" />
                                     {item.type}
                                 </div>
                                 <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                 />
                            </div>
                            <div className="w-full md:w-1/2 md:p-2 lg:p-6">
                                 <div className="flex items-center gap-2 text-gray-400 mb-2 md:mb-4 text-xs md:text-sm font-medium">
                                     <Calendar size={14} className="md:w-4 md:h-4" />
                                     <span>{item.date}</span>
                                 </div>
                                 <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4 text-gray-900 leading-tight group-hover:text-primary-700 transition-colors">
                                     <a href="#" className="flex items-start md:items-center gap-2 md:gap-3">
                                         {item.title}
                                         <ArrowUpRight size={24} className="text-gray-300 group-hover:text-primary-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0 md:w-7 md:h-7" />
                                     </a>
                                 </h3>
                                 <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg leading-relaxed line-clamp-3">
                                     {t('news.loremDesc')}
                                 </p>
                                 <button 
                                    onClick={() => setShowNotification(true)}
                                    className="px-5 py-2.5 md:px-6 md:py-3 border border-gray-200 rounded-full text-gray-600 font-semibold hover:bg-gray-900 hover:text-white transition-all text-sm md:text-base"
                                 >
                                     {t('news.readFullStory')}
                                 </button>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
