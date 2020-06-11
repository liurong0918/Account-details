export interface AccountState {
  income: number;
  expenses: number;
  surplus: number;
}

export interface RecordState {
  time: string;
  expenses: string;
  source: string;
  card: string;
  type: string;
  isCredit: boolean;
}
