import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Award, BookOpen } from 'lucide-react';
import { useState } from 'react';
import Notification from '../components/Notification';

const About = () => {
    const { t } = useTranslation();
    const [showNotification, setShowNotification] = useState(false);

    const objectives = [
        t('about.obj1'),
        t('about.obj2'),
        t('about.obj3'),
        t('about.obj4'),
        t('about.obj5'),
        t('about.obj6'),
        t('about.obj7'),
        t('about.obj8'),
        t('about.obj9'),
        t('about.obj10')
    ];

    const board = [
        { 
            name: "Dr. Aicha SAAD", 
            role: t('about.president'), 
            title: t('about.presidentTitle'), 
            desc: t('about.presidentDesc'),
            photo: "/assets/board/presidant.jpeg",
            color: "bg-primary-50 text-primary-600"
        },
        { 
            name: "Dr. Zohra SAAD", 
            role: t('about.generalSecretary'), 
            title: t('about.secretaryTitle'),
            desc: t('about.secretaryDesc'),
            photo: "/assets/board/zehra.jpeg",
            color: "bg-secondary-50 text-secondary-600"
        },
        { 
            name: "Mr. Mahmoud EL KHATTAT", 
            role: t('about.treasurer'), 
            title: t('about.treasurerTitle'), 
            desc: t('about.treasurerDesc'),
            photo: "/assets/board/mahmoud.jpeg",
            color: "bg-accent-50 text-accent-600"
        }
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
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/70 z-10"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop" 
                        alt="About AWERDCP" 
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
                            {t('about.badge')}
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                            {t('about.title')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md px-4">
                            {t('about.heroSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        
                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg text-gray-600 leading-relaxed max-w-none"
                    >
                        <h3 className="text-3xl font-heading font-bold text-primary-800 mb-6">{t('about.whoWeAre')}</h3>
                        <p className="text-lg mb-6" dangerouslySetInnerHTML={{ __html: t('about.description1') }} />
                        <p className="mb-8">
                             {t('about.description2')}
                        </p>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-primary-500" />
                                {t('about.objectivesTitle')}
                            </h4>
                            <ul className="space-y-4">
                                {objectives.map((obj, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base">
                                        <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0 mt-1" />
                                        <span>{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    
                    <div className="space-y-10">
                         <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
                            <div className="relative bg-gray-200 rounded-3xl h-80 overflow-hidden shadow-xl">
                                <img src="/assets/images/dakhla-region.jpg" alt="Dakhla Region" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <div className="bg-primary-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                             <div className="relative z-10">
                                <h3 className="text-2xl font-heading font-bold mb-4">{t('about.joinTitle')}</h3>
                                <p className="text-primary-100 mb-6">{t('about.joinDescription')}</p>
                                <button 
                                    onClick={() => setShowNotification(true)}
                                    className="px-6 py-3 bg-white text-primary-900 font-bold rounded-xl hover:bg-primary-50 transition-colors"
                                >
                                    {t('about.becomePartner')}
                                </button>
                             </div>
                             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
                        </div>
                    </div>
                </div>

                {/* Board Members Section */}
                <div className="mb-20">
                     <div className="text-center mb-12">
                        <span className="text-secondary-600 font-bold uppercase tracking-widest text-sm mb-2 block">{t('about.teamLabel')}</span>
                        <h2 className="text-4xl font-heading font-bold text-primary-900">{t('about.boardTitle')}</h2>
                     </div>
                     
                     <div className="grid md:grid-cols-3 gap-8">
                        {board.map((member, idx) => (
                             <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-20 h-20 ${member.color} rounded-bl-full -mr-10 -mt-10 opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                                
                                <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto border-2 border-gray-100 shadow-sm">
                                     <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                
                                <div className="text-center">
                                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wide mb-4 border border-primary-100">
                                        {member.role}
                                    </span>
                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-700 text-sm flex items-center justify-center gap-2">
                                            <Award size={14} className="text-secondary-500" /> {member.title}
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};

export default About;
