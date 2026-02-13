import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = i18n.dir(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.activities'), path: '/activities' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.gallery'), path: '/gallery' },
    // { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header 
      className={clsx(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg py-2 md:py-3" : "bg-gradient-to-b from-black/80 to-transparent py-4 md:py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className={clsx("text-xl md:text-2xl font-heading font-bold flex items-center gap-2 md:gap-3 transition-colors shrink-0", scrolled ? "text-primary-900" : "text-white")}>
           <img src="/logo.png" alt="AWERDCP Logo" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain" />
           <span className="hidden sm:inline tracking-tight">AWERDCP</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={clsx(
                "font-medium text-xs xl:text-sm uppercase tracking-wider relative group transition-colors",
                scrolled ? "text-gray-600 hover:text-primary-600" : "text-white/90 hover:text-white"
              )}
            >
              {item.name}
              <span className={clsx(
                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                scrolled ? "bg-primary-600" : "bg-white"
              )}></span>
            </Link>
          ))}
          
          <div className="relative group ml-4">
            <button className={clsx("flex items-center gap-1 transition-colors outline-none", scrolled ? "text-gray-700 hover:text-primary-600" : "text-white hover:text-white/80")}>
              <Globe size={18} />
              <span className="uppercase text-sm font-medium">{i18n.language.split('-')[0]}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform origin-top-right">
              <div className="flex flex-col bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 p-1 min-w-[150px]">
                 <button onClick={() => changeLanguage('en')} className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors text-left w-full">English</button>
                 <button onClick={() => changeLanguage('fr')} className="px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors text-left w-full">Français</button>
              </div>
            </div>
          </div>
        </nav>
        
      {/* Mobile Menu Button - positioned absolutely to be on top of overlay */}
      <button 
        className={clsx(
          "lg:hidden p-2 z-50 transition-colors relative",
          // Hide this button when menu is open because the overlay has its own close button now
          isOpen ? "opacity-0 pointer-events-none" : (scrolled ? "text-primary-900" : "text-white")
        )} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <Menu size={28} />
      </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col justify-center px-8 h-screen w-screen overflow-hidden"
            style={{ top: 0, left: 0, position: 'fixed' }}
          >
            <div className="absolute top-6 right-6">
              <button 
                onClick={toggleMenu}
                className="p-2 text-gray-900"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6">
               {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      onClick={() => setIsOpen(false)}
                      className="text-gray-800 hover:text-primary-600 font-bold text-4xl block transition-colors tracking-tighter"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-100"
                >
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Language</p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => changeLanguage('en')} 
                        className={clsx(
                          "px-6 py-2 rounded-lg text-sm font-medium transition-all", 
                          i18n.language.startsWith('en') 
                            ? "bg-gray-900 text-white shadow-lg" 
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        English
                      </button>
                      <button 
                        onClick={() => changeLanguage('fr')} 
                        className={clsx(
                          "px-6 py-2 rounded-lg text-sm font-medium transition-all", 
                          i18n.language.startsWith('fr') 
                            ? "bg-gray-900 text-white shadow-lg" 
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        Français
                      </button>
                    </div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
