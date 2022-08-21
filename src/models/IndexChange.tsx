import Markets from "./types/Markets";

export default interface IndexChange {
  id: string;
  date: string;
  index_info: Markets;
}
