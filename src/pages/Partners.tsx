import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Partners = () => {
    const { t } = useTranslation();
    const partners = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[50vh] lg:h-[70vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2560&auto=format&fit=crop" 
                        alt="Our Partners" 
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
                            {t('partners.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                            {t('nav.partners')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                            {t('partners.heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="bg-nature-sand/30 py-12 sm:py-16 lg:py-20">
            
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {partners.map((item) => (
                        <motion.div 
                            key={item}
                            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 flex items-center justify-center shadow-sm border border-gray-100 aspect-square group transition-all"
                        >
                             <div className="text-center w-full">
                                 <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mx-auto mb-4 group-hover:bg-primary-50 transition-colors flex items-center justify-center text-gray-400 group-hover:text-primary-500">
                                     <span className="font-bold text-lg md:text-xl">{t('partners.logo')}</span>
                                 </div>
                                 <h3 className="font-bold text-gray-800 text-base md:text-lg group-hover:text-primary-800 transition-colors">{t('partners.partnerName')} {item}</h3>
                                 <p className="text-xs md:text-sm text-gray-400 mt-2">{t('partners.strategicAlliance')}</p>
                             </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Partners;
