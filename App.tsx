
import React, { useState } from 'react';
import { Header } from './components/Header';
import { SummaryCards } from './components/SummaryCards';
import { QuickActions } from './components/QuickActions';
import { ExtractSection } from './components/ExtractSection';
import { BottomNav } from './components/BottomNav';
import { NewTransactionModal } from './components/NewTransactionModal';
import { RefreshCcw } from 'lucide-react';
import { Period } from './types';

const App: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('7d');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const periods: Period[] = ['Hoje', '7d', '30d', '3m', 'Ano'];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-12 overflow-x-hidden">
      <Header />
      
      <main className="max-w-xl mx-auto animate-in fade-in duration-700">
        {/* Title and Period Selector */}
        <section className="px-4 pt-6">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Fluxo Financeiro</h1>
          <p className="text-sm text-slate-400 font-medium">Visão consolidada do seu caixa</p>
          
          <div className="mt-6 flex items-center gap-3">
            <div className="flex-1 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex gap-1">
              {periods.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedPeriod === p 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-emerald-600 transition-colors">
              <RefreshCcw className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Dashboard Sections */}
        <SummaryCards />
        
        <QuickActions />

        <div className="h-4" /> {/* Spacer */}

        {/* Main Extract Centralized */}
        <ExtractSection onOpenNew={() => setIsModalOpen(true)} />

      </main>

      <BottomNav onOpenNew={() => setIsModalOpen(true)} />
      
      <NewTransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
