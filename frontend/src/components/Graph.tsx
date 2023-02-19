import { Center, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
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
import { Data } from "../types";

type Props = {
  data: Data;
};

export default function Graph({ data } : Props) {
  const [isLoading, setIsLoading] = useState(true);

  // turn data into linechart type
    const yo = Object.keys(data.actual).map((key: string) => {
      return {
        name: key,
        // @ts-ignore
        uv: data.actual[key],
        errorY: 10,
      }
    })
    

  return (
    <Center my="5" w="100%" h="500px">
      {isLoading ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={600} height={300} data={yo}>
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
      ) : (
        <Center>
          <VStack>
            <Spinner size="xl" />
            <Text>Please wait...</Text>
          </VStack>
        </Center>
      )}
    </Center>
  );
}
