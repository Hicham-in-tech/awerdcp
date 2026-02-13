import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, MapPin, Users, Target, CheckCircle } from 'lucide-react';
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
    const [selectedActivity, setSelectedActivity] = useState<any>(null);

    const openModal = (activity: any) => {
        setSelectedActivity(activity);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedActivity(null);
        document.body.style.overflow = 'unset';
    };

    const activities = [
        { 
            title: t('activities.act1.title'), 
            date: t('activities.act1.date'), 
            location: t('activities.act1.location'),
            category: t('activities.act1.category'), 
            desc: t('activities.act1.desc'),
            details: t('activities.act1.details', { returnObjects: true }),
            image: "./assets/images/act1/act1.1.jpeg",
            galleryImages: [
                "./assets/images/act1/act1.1.jpeg",
                "./assets/images/act1/act1.2.jpeg",
                "./assets/images/act1/act1.3.jpeg",
                "./assets/images/act1/act1.4.jpeg",
                "./assets/images/act1/act1.5.jpeg",
                "./assets/images/act1/act1.6.jpeg",
                "./assets/images/act1/act1.7.jpeg",
                "./assets/images/act1/act1.8.jpeg"
            ]
        },
        { 
            title: t('activities.act2.title'), 
            date: t('activities.act2.date'), 
            location: t('activities.act2.location'),
            category: t('activities.act2.category'), 
            desc: t('activities.act2.desc'),
            details: t('activities.act2.details', { returnObjects: true }),
            image: "./assets/images/act3/galury-img-1.jpg",
            galleryImages: [
                "./assets/images/act3/galury-img-1.jpg",
                "./assets/images/act3/galury-img-2.jpg",
                "./assets/images/act3/galury-img-4.jpg",
                "./assets/images/act3/galury-img-5.jpg"
            ]
        },
        { 
            title: t('activities.act3.title'), 
            date: t('activities.act3.date'), 
            location: t('activities.act3.location'),
            category: t('activities.act3.category'), 
            desc: t('activities.act3.desc'),
            details: t('activities.act3.details', { returnObjects: true }),
            image: "https://f.hellowork.com/obs-static-images/seo/ObsJob/jardinier.jpg"
        },
        { 
            title: t('activities.act4.title'), 
            date: t('activities.act4.date'), 
            location: t('activities.act4.location'),
            category: t('activities.act4.category'), 
            desc: t('activities.act4.desc'),
            details: t('activities.act4.details', { returnObjects: true }),
            image: "./assets/images/act4/act4.jpg",
            galleryImages: [
                "./assets/images/act4/act4.jpg",
                "./assets/images/act4/galury-img-17.jpeg",
                "./assets/images/act4/galury-img-18.jpeg"
            ]
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
            
            {/* Modal Popup */}
            <AnimatePresence>
                {selectedActivity && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4, type: "spring", damping: 25 }}
                            className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="relative p-6 sm:p-8 border-b border-gray-100">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-all hover:scale-110 shadow-sm z-10"
                                >
                                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                <div className="flex flex-col-reverse sm:flex-row gap-6 items-start">
                                    {/* Title and Info on Left */}
                                    <div className="flex-1 min-w-0 pt-2">
                                        <div className="inline-block py-1 px-3 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-3">
                                            {selectedActivity.category}
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-3 pr-8">
                                            {selectedActivity.title}
                                        </h2>
                                        <div className="flex items-center gap-3 text-gray-600 text-sm flex-wrap mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={16} className="text-primary-500" />
                                                {selectedActivity.date}
                                            </span>
                                            <span className="text-gray-300">•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={16} className="text-primary-500" />
                                                {selectedActivity.location}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                            {selectedActivity.desc}
                                        </p>
                                    </div>

                                    {/* Small Image on Right */}
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 mt-2 sm:mt-0">
                                        <img 
                                            src={selectedActivity.image} 
                                            alt={selectedActivity.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto max-h-[calc(90vh-22rem)] p-6 sm:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {selectedActivity.details && typeof selectedActivity.details === 'object' && (
                                        <>
                                            <div className="space-y-6">
                                                {(selectedActivity.details as any).description && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Target size={16} className="text-primary-500" /> Description
                                                        </h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{(selectedActivity.details as any).description}</p>
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).objectives && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Target size={16} className="text-primary-500" /> Objectives
                                                        </h4>
                                                        {renderList((selectedActivity.details as any).objectives)}
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).project && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Target size={16} className="text-primary-500" /> Project
                                                        </h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{(selectedActivity.details as any).project}</p>
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).participant && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Users size={16} className="text-primary-500" /> Participant
                                                        </h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{(selectedActivity.details as any).participant}</p>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="space-y-6">
                                                {(selectedActivity.details as any).partners && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Users size={16} className="text-primary-500" /> Partners
                                                        </h4>
                                                        {renderList((selectedActivity.details as any).partners)}
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).actions && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <CheckCircle size={16} className="text-primary-500" /> Actions
                                                        </h4>
                                                        {renderList((selectedActivity.details as any).actions)}
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).recommendations && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <CheckCircle size={16} className="text-primary-500" /> Recommendations
                                                        </h4>
                                                        {renderList((selectedActivity.details as any).recommendations)}
                                                    </div>
                                                )}
                                                {(selectedActivity.details as any).presentation && (
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <Target size={16} className="text-primary-500" /> Presentation
                                                        </h4>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{(selectedActivity.details as any).presentation}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Gallery in Modal */}
                                {selectedActivity.galleryImages && selectedActivity.galleryImages.length > 0 && (
                                    <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                                        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                                            <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Activity Gallery
                                        </h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {selectedActivity.galleryImages.map((imgSrc: string, imgIndex: number) => (
                                                <div 
                                                    key={imgIndex} 
                                                    className="aspect-square rounded-xl bg-gray-200 overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-all"
                                                >
                                                    <img 
                                                        src={imgSrc} 
                                                        alt={`${selectedActivity.title} - Image ${imgIndex + 1}`} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            variants={itemVariants}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
                            onClick={() => openModal(activity)}
                        >
                            <div className="relative overflow-hidden h-56 shrink-0">
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary-800 z-10 shadow-sm border border-primary-100">
                                    {activity.category}
                                </div>
                                <img 
                                    src={activity.image} 
                                    alt={activity.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>
                            
                            <div className="p-6 md:p-8 flex flex-col grow">
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
                                
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base line-clamp-3">
                                    {activity.desc}
                                </p>

                                <button 
                                    className="flex items-center gap-2 text-primary-700 font-bold text-sm uppercase tracking-wide hover:text-primary-800 transition-all mt-auto pt-6 border-t border-gray-100 w-full justify-between group/btn"
                                >
                                    <span className="group-hover/btn:translate-x-1 transition-transform">{t('activities.viewDetails')}</span>
                                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Activities;
