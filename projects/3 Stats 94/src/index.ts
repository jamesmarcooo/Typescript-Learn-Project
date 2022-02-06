import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";

const reader = new CsvFileReader("football.csv");
reader.read();
