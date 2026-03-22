import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Trophy, Users, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/boxe.jpg',
      title: 'BOXE',
      subtitle: 'Disciplina e Força',
      description: 'Treinos intensos que desenvolvem o corpo e a mente.',
    },
    {
      image: '/images/futebol.jpg',
      title: 'FUTEBOL',
      subtitle: 'Trabalho em Equipa',
      description: 'A paixão pelo jogo em um ambiente de respeito e amizade.',
    },
    {
      image: '/images/karate.jpg',
      title: 'KARATE',
      subtitle: 'Foco e Autocontrole',
      description: 'Arte marcial milenar para todas as idades.',
    },
    {
      image: '/images/voleibol.jpg',
      title: 'VOLEIBOL',
      subtitle: 'Agilidade e Cooperação',
      description: 'Dinâmica de grupo e coordenação superior.',
    },
    {
      image: '/images/basquetebol.jpg',
      title: 'BASQUETEBOL',
      subtitle: 'Precisão e Estratégia',
      description: 'Desenvolva suas habilidades na quadra.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Slideshow */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl"
                >
                  <span className="inline-block px-3 py-1 bg-neon-orange text-black text-xs font-black tracking-widest uppercase mb-4">
                    {slides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/modalidades"
                      className="px-8 py-4 bg-neon-orange text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center group"
                    >
                      Explorar Modalidades
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-10 right-10 z-30 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 border border-white/20 text-white hover:bg-neon-orange hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-white/20 text-white hover:bg-neon-orange hover:text-black transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                MAIS QUE UMA ACADEMIA, <br />
                <span className="text-neon-orange">UMA FAMÍLIA.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                A Gymo Academia é um espaço onde a energia se encontra com o respeito. Focamos na disciplina para alcançar resultados, mantendo sempre um ambiente acolhedor e familiar para todos os nossos membros.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-neon-orange/10 flex items-center justify-center text-neon-orange">
                    <Zap size={28} />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">Energia</h4>
                  <p className="text-gray-500 text-sm">Ambiente motivador para superar limites.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-neon-orange/10 flex items-center justify-center text-neon-orange">
                    <ShieldCheck size={28} />
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">Respeito</h4>
                  <p className="text-gray-500 text-sm">Valores fundamentais em cada treino.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-900 border border-white/5 overflow-hidden">
                <img
                  src="/images/gym-family.jpg"
                  alt="Ambiente Gymo"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-neon-orange p-8 hidden md:block">
                <p className="text-black font-black text-4xl leading-none">100%<br /><span className="text-sm uppercase tracking-widest">Foco</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Highlight */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Eventos Frequentes</h2>
            <div className="w-20 h-1 bg-neon-orange mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Combates de Boxe', icon: <Zap />, desc: 'Noites de adrenalina e técnica no ringue.' },
              { title: 'Jogos de Futebol', icon: <Trophy />, desc: 'Torneios internos e amigáveis competitivos.' },
              { title: 'Atividades Desportivas', icon: <Users />, desc: 'Eventos comunitários e treinos especiais.' },
            ].map((event, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-black border border-white/5 hover:border-neon-orange/50 transition-all duration-300"
              >
                <div className="text-neon-orange mb-6">{event.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{event.title}</h3>
                <p className="text-gray-500 leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neon-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter uppercase">Pronto para começar?</h2>
          <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto font-medium">
            Junte-se à Gymo Academia hoje e transforme a sua vida através do desporto e da disciplina.
          </p>
          <Link
            to="/modalidades"
            className="inline-block px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
          >
            Ver Modalidades
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
