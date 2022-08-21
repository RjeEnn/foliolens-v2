import DailyIndices from "./DailyIndices";

export default interface Markets {
  main: DailyIndices;
  junior: DailyIndices;
  combined: DailyIndices;
  us: DailyIndices;
  financial: DailyIndices;
  manufacturing: DailyIndices;
}
