import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");

//enum
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
