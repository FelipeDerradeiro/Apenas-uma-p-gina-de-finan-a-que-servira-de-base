
import { Transaction, TransactionType, TrendData } from './types';

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: TransactionType.PERDA,
    description: '32',
    category: 'Quebra',
    date: '16/01/2026',
    value: -223232.00,
    status: 'Perda'
  },
  {
    id: '2',
    type: TransactionType.SAIDA,
    description: '543234',
    category: 'Fornecedor',
    date: '16/01/2026',
    value: -232323.00,
    status: 'Pago'
  },
  {
    id: '3',
    type: TransactionType.ENTRADA,
    description: '2w',
    category: 'Vendas',
    date: '16/01/2026',
    value: 32323232.00,
    status: 'Recebido'
  },
  {
    id: '4',
    type: TransactionType.SAIDA,
    description: 'we',
    category: 'Fornecedor',
    date: '16/01/2026',
    value: -2323232.00,
    status: 'Pago'
  }
];

export const MOCK_TREND: TrendData[] = [
  { day: 'Seg', entradas: 4000, saidas: 2400 },
  { day: 'Ter', entradas: 3000, saidas: 1398 },
  { day: 'Qua', entradas: 2000, saidas: 9800 },
  { day: 'Qui', entradas: 2780, saidas: 3908 },
  { day: 'Sex', entradas: 1890, saidas: 4800 },
  { day: 'Sáb', entradas: 2390, saidas: 3800 },
  { day: 'Dom', entradas: 3490, saidas: 4300 },
];
