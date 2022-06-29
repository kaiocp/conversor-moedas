export interface Conversion {
  date: Date,
  from_currency: string,
  from_amount: number,
  to_currency: string,
  result: number,
  rate: number,
  high: boolean
}
