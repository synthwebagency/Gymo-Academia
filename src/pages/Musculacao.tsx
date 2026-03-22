import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Users, Building, GraduationCap, User } from 'lucide-react';

const Musculacao: React.FC = () => {
  const categories = [
    { name: 'Normal/Individual', icon: <User />, desc: 'Para quem treina sozinho.' },
    { name: 'Familiar', icon: <Users />, desc: '2–6+ membros da família.' },
    { name: 'Corporativo', icon: <Building />, desc: 'Pessoas da mesma empresa.' },
    { name: 'Estudante', icon: <GraduationCap />, desc: '2–4 estudantes.' },
  ];

  const pricingData = [
    { period: 'Mensal', normal: '1.900,00', familiar: '1.750,00', corporativo: '1.600,00', estudante: '1.300,00' },
    { period: 'Trimestral', normal: '5.000,00', familiar: '4.600,00', corporativo: '4.800,00', estudante: '4.300,00' },
    { period: 'Anual', normal: '20.000,00', familiar: '18.000,00', corporativo: '18.000,00', estudante: '15.000,00' },
    { period: 'Semanal', normal: '750,00', familiar: '650,00', corporativo: '750,00', estudante: '600,00' },
    { period: 'Quinzenal', normal: '1.100,00', familiar: '1.000,00', corporativo: '1.000,00', estudante: '750,00' },
    { period: 'Diário', normal: '200,00', familiar: '150,00', corporativo: '150,00', estudante: '150,00' },
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Musculação</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Planos flexíveis desenhados para se adaptar ao seu estilo de vida e objetivos de treino.
          </p>
          
          {/* Image Placeholder */}
          <div className="max-w-5xl mx-auto aspect-video bg-zinc-900 border border-white/5 flex items-center justify-center group overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/musculacao-hero.jpg`} 
              alt="Musculação Gymo" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-700 font-black text-2xl uppercase tracking-widest">Espaço para Imagem de Musculação</span>';
              }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-950 border border-white/5 text-center hover:border-neon-orange/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-neon-orange/10 flex items-center justify-center text-neon-orange mx-auto mb-6">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4">{cat.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-zinc-950 border border-white/5 overflow-hidden mb-24">
          <div className="p-8 border-b border-white/5 bg-white/5">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Tabela de Preços</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/50">
                  <th className="p-6 text-neon-orange font-bold uppercase tracking-widest text-xs border-b border-white/5">Período</th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs border-b border-white/5">Normal</th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs border-b border-white/5">Familiar</th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs border-b border-white/5">Corporativo</th>
                  <th className="p-6 text-white font-bold uppercase tracking-widest text-xs border-b border-white/5">Estudante</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.period} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6 text-white font-bold border-b border-white/5 bg-black/20">{row.period}</td>
                    <td className="p-6 text-gray-400 border-b border-white/5 group-hover:text-neon-orange transition-colors">{row.normal} MT</td>
                    <td className="p-6 text-gray-400 border-b border-white/5 group-hover:text-neon-orange transition-colors">{row.familiar} MT</td>
                    <td className="p-6 text-gray-400 border-b border-white/5 group-hover:text-neon-orange transition-colors">{row.corporativo} MT</td>
                    <td className="p-6 text-gray-400 border-b border-white/5 group-hover:text-neon-orange transition-colors">{row.estudante} MT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 bg-neon-orange text-black">
            <div className="flex items-center space-x-4 mb-6">
              <Info size={32} />
              <h3 className="text-2xl font-black uppercase tracking-tight">Inscrição</h3>
            </div>
            <p className="text-4xl font-black mb-4">250,00 MT</p>
            <p className="font-bold uppercase tracking-widest text-sm opacity-80">Aplicável a todos os planos de musculação.</p>
          </div>
          <div className="p-12 bg-zinc-950 border border-white/5">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">O que está incluído?</h3>
            <ul className="space-y-4">
              {[
                'Acesso total à sala de musculação',
                'Orientação de instrutores qualificados',
                'Planos de treino personalizados',
                'Ambiente climatizado e motivador',
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <Check size={20} className="text-neon-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musculacao;
