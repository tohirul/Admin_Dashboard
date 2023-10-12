export interface IChartData {
  color: string;
  icon: string;
  title: string;
  number: string;
  dataKey: string;
  percentage: number;
  chartData: { name: string; users?: number; products?: number }[];
}
