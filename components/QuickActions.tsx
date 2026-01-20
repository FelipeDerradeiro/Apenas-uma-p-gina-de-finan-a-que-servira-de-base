
import React from 'react';
import { ShoppingBag, Truck, AlertTriangle, Plus } from 'lucide-react';

export const QuickActions: React.FC = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-emerald-100 p-2 rounded-xl">
          <Plus className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800">Lançamentos Rápidos</h3>
          <p className="text-[10px] text-slate-400">Crie transações com um clique</p>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-3xl group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-2xl shadow-sm text-2xl group-hover:scale-110 transition-transform">💰</div>
            <div className="text-left">
              <p className="font-bold text-emerald-900 text-sm">Venda Rápida</p>
              <p className="text-[10px] text-emerald-600">Registrar entrada</p>
            </div>
          </div>
          <div className="text-emerald-400"><ShoppingBag className="w-5 h-5 rotate-[15deg]" /></div>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-3xl group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-2xl shadow-sm group-hover:scale-110 transition-transform text-2xl">📦</div>
            <div className="text-left">
              <p className="font-bold text-blue-900 text-sm">Pagar Fornecedor</p>
              <p className="text-[10px] text-blue-600">Registrar saída</p>
            </div>
          </div>
          <div className="text-blue-400"><Truck className="w-5 h-5" /></div>
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-3xl group active:scale-[0.98] transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-2xl shadow-sm group-hover:scale-110 transition-transform text-2xl">⚠️</div>
            <div className="text-left">
              <p className="font-bold text-red-900 text-sm">Registrar Quebra</p>
              <p className="text-[10px] text-red-600">Registrar perda</p>
            </div>
          </div>
          <div className="text-red-400"><AlertTriangle className="w-5 h-5" /></div>
        </button>
      </div>
    </div>
  );
};
