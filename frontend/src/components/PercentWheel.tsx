import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
  Tooltip
} from "@chakra-ui/react";

type CircleProps = {
  value: number;
  label: string;
  tooltip: string;
  loading?: boolean;
};

const Circle = ({ value, label, tooltip, loading }: CircleProps) => {
  const size = useBreakpointValue({
    base: "50px",
    lg: "75px",
  });

  const color =
    value > 25
      ? value > 50
        ? value > 75
          ? "black"
          : "pink.500"
        : "purple.500"
      : "pink.300";

  return (
    <VStack>
      <Tooltip label={tooltip}>
        <CircularProgress
          color={color}
          value={value}
          thickness="7px"
          size={size}
          isIndeterminate={loading}
        >
          <CircularProgressLabel>{`${(value / 100).toFixed(2)}`}</CircularProgressLabel>
        </CircularProgress>
      </Tooltip>
      <Text
        fontWeight="bold"
        background="linear-gradient(to right, #373737 0%, #000000 90%)"
        backgroundClip="text"
      >
        {label}
      </Text>
    </VStack>
  );
};

export default function PercentWheel({ stats }: { stats: any}) {
  return (
    <Center w="100%" py='15px'>
      <HStack w="100%" justifyContent="space-around">
        <Circle tooltip="model mean squared error" value={stats.MSE * 100} label="MSE" />
        <Circle tooltip="model root mean squared error" value={stats.RMSE * 100} label="RMSE" />
        <Circle tooltip="model standard deviation" value={stats.STD * 100} label="Std. Dev" />
      </HStack>
    </Center>
  );
}
