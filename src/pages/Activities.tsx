import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, ChevronUp, MapPin, Users, Target, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Notification from '../components/Notification';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Activities = () => {
    const { t } = useTranslation();
    const [showNotification, setShowNotification] = useState(false);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedId(expandedId === index ? null : index);
    };

    const activities = [
        { 
            title: t('activities.act1.title'), 
            date: t('activities.act1.date'), 
            location: t('activities.act1.location'),
            category: t('activities.act1.category'), 
            desc: t('activities.act1.desc'),
            details: t('activities.act1.details', { returnObjects: true }),
            image: "./assets/images/act1/act1.1.jpeg" 
        },
        { 
            title: t('activities.act2.title'), 
            date: t('activities.act2.date'), 
            location: t('activities.act2.location'),
            category: t('activities.act2.category'), 
            desc: t('activities.act2.desc'),
            details: t('activities.act2.details', { returnObjects: true }),
            image: "./assets/images/act3/galury-img-1.jpg" 
        },
        { 
            title: t('activities.act3.title'), 
            date: t('activities.act3.date'), 
            location: t('activities.act3.location'),
            category: t('activities.act3.category'), 
            desc: t('activities.act3.desc'),
            details: t('activities.act3.details', { returnObjects: true }),
            image: "./assets/images/act3/galury-img-1.jpg" 
        },
        { 
            title: t('activities.act4.title'), 
            date: t('activities.act4.date'), 
            location: t('activities.act4.location'),
            category: t('activities.act4.category'), 
            desc: t('activities.act4.desc'),
            details: t('activities.act4.details', { returnObjects: true }),
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop" 
        },
        { 
            title: t('activities.act5.title'), 
            date: t('activities.act5.date'), 
            location: t('activities.act5.location'),
            category: t('activities.act5.category'), 
            desc: t('activities.act5.desc'),
            details: t('activities.act5.details', { returnObjects: true }),
            image: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=2574&auto=format&fit=crop" 
        }
    ];

    const renderList = (items: any[]) => {
        if (!Array.isArray(items)) return null;
        return (
            <ul className="list-none space-y-1 mt-2">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle size={14} className="text-primary-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="min-h-screen">
            <Notification
                message={t('notification.message')}
                submessage={t('notification.submessage')}
                isOpen={showNotification}
                onClose={() => setShowNotification(false)}
            />
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/70 via-secondary-900/50 to-secondary-900/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2560&auto=format&fit=crop" 
                        alt="Our Activities" 
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
                            {t('activities.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                            {t('nav.activities')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                            {t('activities.heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-nature-light/20">
            
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start"
            >
                {activities.map((activity, index) => (
                    <motion.div 
                        key={index}
                        layout
                        variants={itemVariants} 
                        className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col ${expandedId === index ? 'md:col-span-2 lg:col-span-3' : ''}`}
                    >
                        <motion.div layout className={`relative overflow-hidden shrink-0 ${expandedId === index ? 'h-64 sm:h-80' : 'h-56'}`}>
                             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-800 z-10 shadow-sm border border-primary-100">
                                 {activity.category}
                             </div>
                             <img 
                                src={activity.image} 
                                alt={activity.title}
                                className="w-full h-full object-cover" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        </motion.div>
                        
                        <motion.div layout className="p-6 md:p-8 flex flex-col grow">
                            <div className="flex items-center gap-2 text-primary-500 mb-3 text-xs md:text-sm font-medium flex-wrap">
                                <Calendar size={16} className="shrink-0" />
                                <span>{activity.date}</span>
                                <span className="text-gray-300">|</span>
                                <MapPin size={16} className="shrink-0" />
                                <span className="text-gray-500 truncate max-w-[200px]">{activity.location}</span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 font-heading text-gray-900 leading-tight group-hover:text-primary-700 transition-colors">
                                {activity.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                {activity.desc}
                            </p>

                            <AnimatePresence>
                                {expandedId === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.4 }}
                                        >
                                            <div className="pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                {/* Details Columns */}
                                                {activity.details && typeof activity.details === 'object' && (
                                                    <>
                                                        <div className="space-y-6">
                                                            {(activity.details as any).description && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Target size={18} /> Description</h4>
                                                                    <p className="text-gray-600 text-sm">{(activity.details as any).description}</p>
                                                                </div>
                                                            )}
                                                            {(activity.details as any).objectives && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Target size={18} /> Objectives</h4>
                                                                    {renderList((activity.details as any).objectives)}
                                                                </div>
                                                            )}
                                                            {(activity.details as any).project && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Target size={18} /> Project</h4>
                                                                    <p className="text-gray-600 text-sm">{(activity.details as any).project}</p>
                                                                </div>
                                                            )}
                                                            {(activity.details as any).participant && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Users size={18} /> Participant</h4>
                                                                    <p className="text-gray-600 text-sm">{(activity.details as any).participant}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                        
                                                        <div className="space-y-6">
                                                            {(activity.details as any).partners && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Users size={18} /> Partners</h4>
                                                                    {renderList((activity.details as any).partners)}
                                                                </div>
                                                            )}
                                                            {(activity.details as any).actions && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} /> Actions</h4>
                                                                    {renderList((activity.details as any).actions)}
                                                                </div>
                                                            )}
                                                            {(activity.details as any).recommendations && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><CheckCircle size={18} /> Recommendations</h4>
                                                                    {renderList((activity.details as any).recommendations)}
                                                                </div>
                                                            )}
                                                            {(activity.details as any).presentation && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Target size={18} /> Presentation</h4>
                                                                    <p className="text-gray-600 text-sm">{(activity.details as any).presentation}</p>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            {/* Activity Images Section */}
                                            <div className="bg-gray-50 rounded-xl p-6 mb-2">
                                                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Activity Gallery</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {[1, 2, 3, 4].map((item) => (
                                                        <div key={item} className="aspect-square rounded-lg bg-gray-200 overflow-hidden relative group cursor-pointer">
                                                            <img 
                                                                src={`https://source.unsplash.com/random/400x400?nature,water&sig=${index}${item}`} 
                                                                alt="Activity Moment" 
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button 
                                onClick={() => toggleExpand(index)}
                                className="flex items-center gap-2 text-primary-700 font-bold text-sm uppercase tracking-wide hover:text-primary-800 transition-all mt-auto pt-6 border-t border-gray-100 w-full justify-between"
                            >
                                <span>{expandedId === index ? 'Show Less' : t('activities.viewDetails')}</span>
                                {expandedId === index ? <ChevronUp size={16} /> : <ChevronRight size={16} />}
                            </button>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        </div>
    );
};

export default Activities;
