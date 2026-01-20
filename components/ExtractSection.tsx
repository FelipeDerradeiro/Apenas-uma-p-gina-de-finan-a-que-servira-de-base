
import React, { useState } from 'react';
import { Search, Plus, ChevronDown, ChevronUp, ShoppingCart, Target } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_TRANSACTIONS, MOCK_TREND } from '../constants';
import { TransactionType } from '../types';

interface ExtractSectionProps {
  onOpenNew: () => void;
}

export const ExtractSection: React.FC<ExtractSectionProps> = ({ onOpenNew }) => {
  const [activeFilter, setActiveFilter] = useState<TransactionType | 'TODOS'>('TODOS');
  const [showChart, setShowChart] = useState(true);

  const filters = [
    { label: 'Todos', value: 'TODOS', count: 5 },
    { label: 'Entradas', value: TransactionType.ENTRADA, count: 1 },
    { label: 'Saídas', value: TransactionType.SAIDA, count: 3 },
    { label: 'Perdas', value: TransactionType.PERDA, count: 1 },
    { label: 'Margem', value: TransactionType.MARGEM, count: null },
  ];

  const filteredTransactions = MOCK_TRANSACTIONS.filter(t => 
    activeFilter === 'TODOS' ? true : activeFilter === TransactionType.MARGEM ? true : t.type === activeFilter
  );

  return (
    <div className="px-4 mb-24">
      {/* Search and Action Bar */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar transações..." 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <button className="bg-slate-900 text-white p-3 rounded-2xl">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button 
          onClick={onOpenNew}
          className="bg-emerald-600 text-white flex items-center gap-2 px-4 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-200"
        >
          <Plus className="w-5 h-5" />
          <span>Novo</span>
        </button>
      </div>

      {/* Main Container for Extract */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        {/* Header of Extract */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Extrato de Movimentações</h2>
              <p className="text-xs text-slate-400">Visão detalhada do seu fluxo financeiro</p>
            </div>
          </div>
          
          {/* Filters Scrollable */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-4 -mx-2 px-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeFilter === f.value 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' 
                    : 'bg-slate-50 text-slate-500 border border-slate-100'
                }`}
              >
                {f.label} {f.count !== null && <span className={`opacity-60`}>({f.count})</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Integrated Chart Segment */}
        <div className="px-6 pb-6">
          <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 p-1.5 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">Tendência do Período</span>
              </div>
              <button onClick={() => setShowChart(!showChart)} className="text-slate-400">
                {showChart ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {showChart && (
              <div className="h-48 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_TREND}>
                    <defs>
                      <linearGradient id="colorEntradas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} />
                    <YAxis hide />
                    <Tooltip />
                    <Area type="monotone" dataKey="entradas" stroke="#10b981" fillOpacity={1} fill="url(#colorEntradas)" />
                    <Area type="monotone" dataKey="saidas" stroke="#ef4444" fill="transparent" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>

        {/* Margem Líquida Context Segment (Conditional) */}
        {activeFilter === TransactionType.MARGEM && (
          <div className="px-6 pb-6">
             <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-xl">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">Cálculo de Margem Líquida</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-orange-100 pb-3">
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-700">Faturamento (Entradas)</span>
                    </div>
                    <span className="text-lg font-bold text-emerald-600">R$ 32.3M</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <ArrowDownRight className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-medium text-blue-700">(-) Custos Totais</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">R$ 2.8M</span>
                  </div>
                </div>
             </div>
          </div>
        )}

        {/* Transaction List */}
        <div className="border-t border-slate-50">
          <div className="px-6 py-4 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-1/4">Status / Entidade</span>
            <span className="w-1/4">Categoria</span>
            <span className="w-1/4">Data</span>
            <span className="w-1/4 text-right">Valor</span>
          </div>
          
          <div className="divide-y divide-slate-50">
            {filteredTransactions.map((t) => (
              <div key={t.id} className="px-6 py-4 flex items-center hover:bg-slate-50 transition-colors">
                <div className="w-1/4">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 ${
                    t.status === 'Recebido' ? 'bg-emerald-100 text-emerald-700' :
                    t.status === 'Pago' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {t.status}
                  </span>
                  <p className="text-sm font-bold text-slate-800">{t.description}</p>
                </div>
                <div className="w-1/4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-bold">
                    {t.category}
                  </span>
                </div>
                <div className="w-1/4 text-xs font-medium text-slate-400">
                  {t.date}
                </div>
                <div className="w-1/4 text-right">
                  <p className={`text-sm font-black ${t.value > 0 ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {t.value > 0 ? '+' : '-'} R$ {Math.abs(t.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-slate-50/50 text-center">
          <button className="text-emerald-600 text-xs font-bold hover:underline">Ver extrato completo</button>
        </div>
      </div>
    </div>
  );
};

import { BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';
