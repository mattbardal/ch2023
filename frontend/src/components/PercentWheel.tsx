import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

type CircleProps = {
  value: number;
  label: string;
  loading?: boolean;
};

const Circle = ({ value, label, loading }: CircleProps) => {
  const size = useBreakpointValue({
    base: "50px",
    lg: "75px",
  });

  const color =
    value > 25
      ? value > 50
        ? value > 75
          ? "pink.300"
          : "pink.500"
        : "purple.500"
      : "black";

  return (
    <VStack>
      <CircularProgress
        color={color}
        value={value}
        thickness="7px"
        size={size}
        isIndeterminate={loading}
      >
        <CircularProgressLabel>{`${value}%`}</CircularProgressLabel>
      </CircularProgress>
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

export default function PercentWheel() {
  return (
    <Center w="100%" py='15px'>
      <HStack w="100%" justifyContent="space-around">
        <Circle value={77} label="Error" />
        <Circle value={59} label="STD. Dev" />
        <Circle value={30} label="Accur" />
        <Circle value={10} label="Poggins" />
      </HStack>
    </Center>
  );
}
