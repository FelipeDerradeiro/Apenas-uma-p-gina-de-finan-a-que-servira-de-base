
import React from 'react';
import { LayoutDashboard, Leaf, DollarSign, Target, Plus } from 'lucide-react';

interface BottomNavProps {
  onOpenNew: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenNew }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-3 pb-8 flex items-center justify-between z-50">
      <button className="flex flex-col items-center gap-1 text-slate-400">
        <LayoutDashboard className="w-6 h-6" />
        <span className="text-[10px] font-bold">Painel</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-slate-400">
        <Leaf className="w-6 h-6" />
        <span className="text-[10px] font-bold">Estoque</span>
      </button>

      {/* FIXED POSITION MAIN ACTION BUTTON */}
      <div className="relative -top-8">
        <button 
          onClick={onOpenNew}
          className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center text-white shadow-2xl shadow-emerald-400/50 hover:scale-110 active:scale-95 transition-all"
        >
          <Plus className="w-8 h-8 stroke-[3]" />
        </button>
      </div>

      <button className="flex flex-col items-center gap-1 text-emerald-600">
        <div className="bg-emerald-50 px-3 py-1 rounded-xl flex flex-col items-center gap-1">
          <DollarSign className="w-6 h-6" />
          <span className="text-[10px] font-black uppercase">Finanças</span>
        </div>
      </button>

      <button className="flex flex-col items-center gap-1 text-slate-400">
        <Target className="w-6 h-6" />
        <span className="text-[10px] font-bold">Perdas</span>
      </button>
    </nav>
  );
};
