import Portfolio from "./types/Portfolio";
import Tracker from "./types/Tracker";

export default interface User {
  id: string;

  firstName: string;
  lastName: string;

  email: string;

  dob: string;
  riskRating: number;
  netWorth: number;
  salary: number;

  updatedAt: string;
  createdAt: string;
  updated: boolean;
  generating: boolean;

  portfolio: Portfolio;
  tracker: Tracker;
}
