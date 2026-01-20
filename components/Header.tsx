
import React from 'react';
import { Bell, Menu, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#059669] p-2 rounded-xl">
          <Leaf className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold text-slate-800 tracking-tight">Horti.</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-[#059669] relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-400 hover:text-[#059669]">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
