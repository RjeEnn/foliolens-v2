import Index from "./types/Index";

export default interface TradingDay {
  id: string;
  date: string;
  advancing: Index[];
  declining: Index[];
  trading_firm: Index[];
}
