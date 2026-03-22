import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre-nos' },
    { name: 'Modalidades', path: '/modalidades' },
    { name: 'Musculação', path: '/musculacao' },
    { name: 'Aeróbica', path: '/aerobica' },
    { name: 'Karate', path: '/karate' },
    { name: 'Voleibol', path: '/voleibol' },
    { name: 'Basquetebol', path: '/basquetebol' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Gymo Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                  GYMO
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-neon-orange uppercase leading-none mt-1">
                  Academia Desportiva
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-neon-orange ${
                    isActive(link.path) ? 'text-neon-orange' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-4 text-base font-semibold rounded-lg ${
                      isActive(link.path)
                        ? 'bg-neon-orange/10 text-neon-orange'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">GYMO ACADEMIA</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Um espaço de energia, respeito e disciplina. Ambiente familiar focado no seu desenvolvimento físico e mental.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neon-orange">Contactos</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} className="text-neon-orange shrink-0" />
                  <span>873788711 / 873789717</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} className="text-neon-orange shrink-0" />
                  <span className="break-all">gymoacademiadesportiva@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={18} className="text-neon-orange mt-1 shrink-0" />
                  <span>Bairro Azul, próximo ao Pasto, Tete, Moçambique</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-neon-orange">Siga-nos</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/gymoacademia_oficial?igsh=MWl0YjZleHpyOHVjbA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-orange hover:text-black transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/share/1EK12sQ6wB/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-orange hover:text-black transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Gymo Academia. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0">Desenvolvido para excelência desportiva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
