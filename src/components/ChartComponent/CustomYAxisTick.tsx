import { Text } from "recharts";

export const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const formattedTick =
    payload.value >= 1000
      ? `${Math.round(payload.value / 1000)}k`
      : payload.value;

  return (
    <Text
      x={x}
      y={y}
      fontSize={14}
      textAnchor="end"
      strokeWidth={2}
      fill="#7a7a7a"
    >
      {formattedTick}
    </Text>
  );
};
