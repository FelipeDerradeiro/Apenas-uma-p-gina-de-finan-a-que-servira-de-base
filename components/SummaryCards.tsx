
import React from 'react';
import { ArrowUpRight, ArrowDownRight, Percent, BarChart3, TrendingUp } from 'lucide-react';

export const SummaryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-4">
      <div className="bg-[#10b981] p-4 rounded-3xl text-white shadow-lg shadow-emerald-100 flex flex-col justify-between h-40">
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-2 rounded-lg">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            1
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold opacity-80 tracking-wider">Faturamento</p>
          <p className="text-xl font-bold">R$ 32.3M</p>
          <p className="text-[10px] mt-1 opacity-70">Últimos 7 dias</p>
        </div>
      </div>

      <div className="bg-[#f59e0b] p-4 rounded-3xl text-white shadow-lg shadow-orange-100 flex flex-col justify-between h-40">
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-2 rounded-lg">
            <Percent className="w-5 h-5" />
          </div>
          <div className="bg-white/20 p-2 rounded-lg">
            <BarChart3 className="w-4 h-4" />
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold opacity-80 tracking-wider">Margem Líquida</p>
          <p className="text-xl font-bold">91.4%</p>
          <p className="text-[10px] mt-1 opacity-70">Resultado: R$ 29.5M</p>
        </div>
      </div>

      <div className="bg-[#3b82f6] p-4 rounded-3xl text-white shadow-lg shadow-blue-100 flex flex-col justify-between h-40">
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-2 rounded-lg">
            <ArrowDownRight className="w-5 h-5" />
          </div>
          <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold opacity-80 tracking-wider">Despesas</p>
          <p className="text-xl font-bold">R$ 2.6M</p>
          <p className="text-[10px] mt-1 opacity-70">Média: R$ 854.8k</p>
        </div>
      </div>

      <div className="bg-[#475569] p-4 rounded-3xl text-white shadow-lg shadow-slate-200 flex flex-col justify-between h-40">
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 rotate-180" />
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold opacity-80 tracking-wider">Taxa de Perdas</p>
          <p className="text-xl font-bold">0.7%</p>
          <p className="text-[10px] mt-1 opacity-70">Meta: 3% | R$ 223.2k</p>
        </div>
      </div>
    </div>
  );
};
