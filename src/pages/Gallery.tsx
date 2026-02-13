import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid, Play, Pause } from 'lucide-react';

const Gallery = () => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [[page, direction], setPage] = useState([0, 0]);
    const [isPlaying, setIsPlaying] = useState(true);

    const images = [
        { src: "/assets/gallery/galury-img-0.jpeg", title: t('gallery.img0') },
        { src: "/assets/gallery/galury-img-1.jpg", title: t('gallery.img1') },
        { src: "/assets/gallery/galury-img-2.jpg", title: t('gallery.img2') },
        { src: "/assets/gallery/galury-img-4.jpg", title: t('gallery.img3') },
        { src: "/assets/gallery/galury-img-5.jpg", title: t('gallery.img4') },
        { src: "/assets/gallery/galury-img-6.jpg", title: t('gallery.img5') },
        { src: "/assets/gallery/galury-img-8.jpeg", title: t('gallery.img6') },
        { src: "/assets/gallery/galury-img-9.jpeg", title: t('gallery.img7') },
        { src: "/assets/gallery/galury-img-10.jpeg", title: t('gallery.img8') },
        { src: "/assets/gallery/galury-img-11.jpeg", title: t('gallery.img9') },
        { src: "/assets/gallery/galury-img-12.jpeg", title: t('gallery.img10') },
        { src: "/assets/gallery/galury-img-13.jpeg", title: t('gallery.img11') },
        { src: "/assets/gallery/galury-img-14.jpeg", title: t('gallery.img12') },
        { src: "/assets/gallery/galury-img-15.jpeg", title: t('gallery.img13') },
        { src: "/assets/gallery/galury-img-16.jpeg", title: t('gallery.img14') },
        { src: "/assets/gallery/galury-img-17.jpeg", title: t('gallery.img15') },
        { src: "/assets/gallery/galury-img-18.jpeg", title: t('gallery.img16') },
        { src: "/assets/gallery/galury-img-19.jpeg", title: t('gallery.img17') },
    ];

    const sliderImages = images.slice(0, 5);

    const imageIndex = ((page % sliderImages.length) + sliderImages.length) % sliderImages.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [page, isPlaying]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        })
    };

    return (
        <div className="min-h-screen bg-nature-light/10">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/80 to-nature-light/10 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop" 
                        alt="Gallery" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-20 container mx-auto px-4 text-center mt-0 md:mt-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 leading-tight drop-shadow-2xl tracking-tight">
                            {t('nav.gallery')}
                        </h1>
                        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-secondary-400 to-accent-400 mx-auto rounded-full"></div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Slider 3D Section */}
            <div className="relative -mt-12 md:-mt-16 lg:-mt-24 xl:-mt-32 pb-16 md:pb-24 z-30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl bg-gray-900 border-2 md:border-4 border-white group/slider">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={page}
                                    src={sliderImages[imageIndex].src}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 }
                                    }}
                                    className="absolute w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            
                            {/* Overlay Gradient with high Z-index */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-10" />

                            {/* Progress Bar */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-white/10 z-20">
                                {isPlaying && (
                                    <motion.div 
                                        key={page}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        className="h-full bg-secondary-500"
                                    />
                                )}
                            </div>

                            {/* Content Content - High Z-index */}
                            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-12 flex flex-col md:flex-row items-end justify-between gap-4 md:gap-6 z-20">
                                <motion.div 
                                    key={`text-${page}`}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="max-w-3xl w-full"
                                >
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                        <span className="px-2 md:px-3 py-1 bg-secondary-500/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-secondary-400">
                                            {t('gallery.featured')}
                                        </span>
                                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 md:px-3 py-1 rounded-full border border-white/10">
                                            <span className="text-white font-mono text-xs md:text-sm font-bold">
                                                {String(imageIndex + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-white/40 text-[10px] md:text-xs">/</span>
                                            <span className="text-white/60 font-mono text-[10px] md:text-xs">
                                                {String(sliderImages.length).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-black/30 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 inline-block w-full md:w-auto">
                                        <h2 className="text-xl sm:text-2xl md:text-5xl font-heading font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                            {sliderImages[imageIndex].title}
                                        </h2>
                                        <p className="text-gray-200 text-sm md:text-lg line-clamp-2 md:line-clamp-none max-w-xl drop-shadow-md hidden sm:block">
                                            {t('gallery.sliderDesc')}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Navigation */}
                                <div className="flex items-center gap-2 md:gap-3 bg-black/40 backdrop-blur-md p-1.5 md:p-2 rounded-full border border-white/10 absolute top-4 right-4 md:static">
                                     <button 
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-900 transition-all active:scale-95"
                                        title={isPlaying ? "Pause" : "Play"}
                                    >
                                        {isPlaying ? <Pause size={16} className="md:w-5 md:h-5" /> : <Play size={16} className="md:w-5 md:h-5" />}
                                    </button>
                                    <div className="w-px h-4 md:h-6 bg-white/20 mx-1"></div>
                                     <button 
                                        onClick={() => {
                                            paginate(-1);
                                            setIsPlaying(false);
                                        }}
                                        className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-900 transition-all active:scale-95"
                                    >
                                        <ChevronLeft size={18} className="md:w-6 md:h-6" />
                                    </button>
                                     <button 
                                        onClick={() => {
                                            paginate(1);
                                            setIsPlaying(false);
                                        }}
                                        className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-900 transition-all active:scale-95"
                                    >
                                        <ChevronRight size={18} className="md:w-6 md:h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Indicators */}
                        <div className="flex justify-center mt-6 md:mt-8 gap-2 md:gap-3">
                            {sliderImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        const newDir = idx > imageIndex ? 1 : -1;
                                        setPage([idx, newDir]);
                                        setIsPlaying(false);
                                    }}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${idx === imageIndex ? 'w-8 md:w-12 bg-primary-600' : 'w-1.5 md:w-2 bg-gray-300 hover:bg-primary-300'}`}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-8 md:mt-12">
                            <button 
                                onClick={() => setShowAll(!showAll)}
                                className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all shadow-xl hover:shadow-2xl border border-gray-100 text-base md:text-lg group"
                            >
                                <Grid size={18} className="text-primary-500 md:w-5 md:h-5" />
                                {showAll ? t('gallery.hideCollection') : t('gallery.exploreCollection')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Gallery Grid */}
            <AnimatePresence>
                {showAll && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-nature-light/20 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 md:mb-12 text-gray-900">{t('gallery.allPhotos')}</h2>
                            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
                                {images.map((image, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.5 }}
                                        className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img 
                                                src={image.src} 
                                                alt={image.title}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                <p className="text-white font-bold text-lg">{image.title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-7xl w-full">
                            <motion.img 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                src={selectedImage.src} 
                                alt={selectedImage.title}
                                className="max-w-full max-h-[85vh] mx-auto object-contain rounded-2xl shadow-2xl"
                            />
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                            >
                                <p className="text-white text-xl font-bold text-center">{selectedImage.title}</p>
                            </motion.div>
                        </div>
                        <button 
                            className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors text-3xl font-light border border-white/20"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
