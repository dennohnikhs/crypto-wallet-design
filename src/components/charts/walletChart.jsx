import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CryptoChart = () => {
  const data = [
    { date: "2023-01-01", price: 4.895 },
    { date: "2023-03-02", price: 7.834 },
    { date: "2023-04-02", price: 5.453 },
    { date: "2024-01-02", price: 9.353 },
    { date: "2024-01-010", price: 10.845 },
    // Add more data points as needed
  ];

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
};

export default CryptoChart;
