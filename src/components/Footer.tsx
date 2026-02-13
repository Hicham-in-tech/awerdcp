import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-950 text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-primary-900">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <img src="/logo.png" alt="AWERDCP Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert" />
             <h3 className="text-xl md:text-2xl font-heading font-bold">AWERDCP</h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
             {t('footer.description')}
          </p>
          <div className="flex gap-4">
             {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon size={18} />
                </a>
             ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-heading font-bold mb-4 md:mb-6 text-primary-100">{t('footer.quickNav')}</h4>
          <ul className="space-y-2 md:space-y-3">
            {[{label: t('footer.aboutUs'), key: 'about'}, {label: t('footer.ourActivities'), key: 'activities'}, {label: t('footer.newsEvents'), key: 'news'}, {label: t('nav.gallery'), key: 'gallery'}/* , {label: t('nav.partners'), key: 'partners'} */].map((item) => (
                <li key={item.key}>
                    <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors flex items-center gap-2 text-sm md:text-base">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                         {item.label}
                    </a>
                </li>
            ))}
          </ul>
        </div>

        <div>
           <h4 className="text-lg font-heading font-bold mb-4 md:mb-6 text-primary-100">{t('footer.contactUs')}</h4>
           <div className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
               <p className="flex items-start gap-3">
                   <svg className="w-5 h-5 text-primary-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span>Dakhla-Oued Eddahab, <br/>Morocco</span>
               </p>
               <p className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                   <a href="mailto:info@awerdcp.org" className="hover:text-white transition-colors break-all">info@awerdcp.org</a>
               </p>
               <p className="flex items-center gap-3">
                   <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   <span>+212 600 000 000</span>
               </p>
           </div>
        </div>

        <div>
            <h4 className="text-lg font-heading font-bold mb-4 md:mb-6 text-primary-100">{t('footer.newsletter')}</h4>
            <p className="text-gray-400 mb-4 text-sm">{t('footer.newsletterDesc')}</p>
            <form className="flex">
                <input type="email" placeholder={t('footer.emailPlaceholder')} className="bg-primary-900 border border-primary-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-primary-500 w-full min-w-0" />
                <button type="button" className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-r-lg transition-colors shrink-0">
                    <Send size={18} />
                </button>
            </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-6 md:pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm gap-4 text-center md:text-left">
        <p>{t('footer.rights')}</p>
        <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
