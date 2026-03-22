import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Users, Building, GraduationCap, User, Heart, Apple, Stethoscope, Activity } from 'lucide-react';

const Aerobica: React.FC = () => {
  const categories = [
    { name: 'Normal/Individual', icon: <User />, desc: 'Para quem treina sozinho.' },
    { name: 'Familiar', icon: <Users />, desc: '2–6+ membros da família.' },
    { name: 'Corporativo', icon: <Building />, desc: 'Pessoas da mesma empresa.' },
    { name: 'Estudante', icon: <GraduationCap />, desc: '2–4 estudantes.' },
  ];

  const pricingData = [
    { period: 'Mensal', normal: '1.100,00', familiar: '950,00', corporativo: '1.000,00', estudante: '850,00' },
    { period: 'Trimestral', normal: '3.000,00', familiar: '2.500,00', corporativo: '2.800,00', estudante: '2.400,00' },
    { period: 'Anual', normal: '12.000,00', familiar: '10.000,00', corporativo: '11.000,00', estudante: '9.000,00' },
    { period: 'Semanal', normal: '400,00', familiar: '350,00', corporativo: '400,00', estudante: '350,00' },
    { period: 'Diário', normal: '150,00', familiar: '150,00', corporativo: '150,00', estudante: '150,00' },
  ];

  const services = [
    { name: 'Consulta Médica', icon: <Stethoscope />, desc: 'Avaliação de saúde regular.' },
    { name: 'Seguimento Nutricional', icon: <Apple />, desc: 'Planos alimentares personalizados.' },
    { name: 'Assistência Psicológica', icon: <Heart />, desc: 'Apoio ao bem-estar mental.' },
    { name: 'Acompanhamento de Pressão Arterial', icon: <Activity />, desc: 'Monitorização constante da saúde.' },
  ];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">Aeróbica</h1>
          <div className="w-32 h-2 bg-neon-orange mx-auto mb-12" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Aulas dinâmicas que combinam ritmo, energia e saúde cardiovascular.
          </p>
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

        {/* Additional Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Serviços Adicionais Incluídos</h2>
            <p className="text-gray-500">Cuidamos de si de forma integral.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-zinc-950 border border-white/5 text-center hover:border-neon-orange/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-neon-orange/10 flex items-center justify-center text-neon-orange mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4 leading-tight">{service.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
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
            <p className="font-bold uppercase tracking-widest text-sm opacity-80">Aplicável a todos os planos de aeróbica.</p>
          </div>
          <div className="p-12 bg-zinc-950 border border-white/5">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Porquê Aeróbica na Gymo?</h3>
            <ul className="space-y-4">
              {[
                'Instrutores certificados e motivadores',
                'Aulas dinâmicas com música atual',
                'Foco na queima calórica e resistência',
                'Acompanhamento de saúde integral incluído',
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

export default Aerobica;
