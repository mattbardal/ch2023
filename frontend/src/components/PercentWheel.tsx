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
    base: "75px",
    lg: "100px",
  });

  const color =
    value > 25
      ? value > 50
        ? value > 75
          ? "green"
          : "orange.300"
        : "orange.500"
      : "red";

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
    <Center w="100%">
      <HStack w={{ base: "100%", lg: "75%" }} justifyContent="space-between">
        <Circle value={77} label="First" />
        <Circle value={59} label="Second" />
        <Circle value={30} label="Third" />
        <Circle value={10} label="Fourth" />
      </HStack>
    </Center>
  );
}
