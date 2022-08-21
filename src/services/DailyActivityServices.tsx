import { Dispatch, SetStateAction } from "react";
import IndexChange from "../models/IndexChange";
import TradingDay from "../models/TradingDay";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

const fetchLatestDate = async () => {
  const dateUrl = `${process.env.REACT_APP_DATABASE_URL}/trading-days/date`;

  const res = await fetch(dateUrl);
  if (res.ok) {
    const data: { date: string } = await res.json();
    return data.date;
  }
  return "";
};

export const fetchLatestIndices = async (setLoading: Dispatcher<boolean>) => {
  setLoading(true);
  const latestDate = await fetchLatestDate();
  const indicesUrl = `${process.env.REACT_APP_DATABASE_URL}/indices/${latestDate}`;

  const res = await fetch(indicesUrl);
  if (res.ok) {
    const data: IndexChange = await res.json();
    if (data?.index_info) {
      return data.index_info;
    }
  }
  return null;
};

export const fetchIndicesByDate = async (
  date: string,
  setLoading: Dispatcher<boolean>
) => {
  setLoading(true);
  const indicesUrl = `${process.env.REACT_APP_DATABASE_URL}/indices/${date}`;

  const res = await fetch(indicesUrl);
  if (res.ok) {
    try {
      const data: IndexChange = await res.json();
      return data.index_info;
    } catch (err) {}
  }
  return null;
};

export const fetchLatestMarketActivity = async (
  setLoading: Dispatcher<boolean>
) => {
  setLoading(true);
  const latestDate = await fetchLatestDate();
  const activityUrl = `${process.env.REACT_APP_DATABASE_URL}/trading-days/${latestDate}`;

  const res = await fetch(activityUrl);
  if (res.ok) {
    const data: TradingDay = await res.json();
    return data;
  }
  return null;
};

export const fetchMarketActivityByDate = async (
  date: string,
  setLoading: Dispatcher<boolean>
) => {
  setLoading(true);
  const activityUrl = `${process.env.REACT_APP_DATABASE_URL}/trading-days/${date}`;

  const res = await fetch(activityUrl);
  if (res.ok) {
    try {
      const data: TradingDay = await res.json();
      return data;
    } catch (err) {}
  }
  return null;
};
