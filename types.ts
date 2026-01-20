
export enum TransactionType {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
  PERDA = 'PERDA',
  MARGEM = 'MARGEM'
}

export interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  category: string;
  date: string;
  value: number;
  status: 'Pago' | 'Recebido' | 'Pendente' | 'Perda';
}

export interface TrendData {
  day: string;
  entradas: number;
  saidas: number;
}

export type Period = 'Hoje' | '7d' | '30d' | '3m' | 'Ano';
