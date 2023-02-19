import { Center } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
} from "recharts";

// generate some random data
const data = [
  { name: "Page A", uv: 400, pv: 2400 / 10, amt: 240, errorY: 10, errorX: 10 },
  { name: "Page B", uv: 300, pv: 4567 / 10, amt: 2400, errorY: 10, errorX: 10 },
  { name: "Page C", uv: 300, pv: 1398 / 10, amt: 2400, errorY: 10, errorX: 10 },
  { name: "Page D", uv: 200, pv: 9800 / 10, amt: 2400, errorY: 10, errorX: 10 },
  { name: "Page E", uv: 278, pv: 3908 / 10, amt: 2400, errorY: 10, errorX: 10 },
  { name: "Page F", uv: 189, pv: 4800 / 10, amt: 2400, errorY: 10, errorX: 10 },
];

export default function Graph() {
  return (
    <Center my="5" w="100%" h="500px">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#5a224e" strokeWidth={2}>
            <ErrorBar
              dataKey="errorY"
              width={4}
              strokeWidth={2}
              stroke="green"
              direction="y"
            />
          </Line>

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Center>
  );
}
