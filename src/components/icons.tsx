import { createMemo } from "solid-js";

export type Sizes = "base" | "sm" | "lg";

interface Props {
  size: Sizes;
}

export const widthMap: Record<Sizes, number> = {
  sm: 32,
  base: 64,
  lg: 80,
};

export function Logo(props: Props) {
  const width = createMemo(() => widthMap[props.size]);
  const fill = "white";
  const stroke = "#0B1527";
  return (
    <svg
      width={width()}
      height={width()}
      viewBox="0 0 256 223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="130.5" cy="115.5" r="101.5" stroke={fill} strokeWidth="13" />
      <path
        d="M0 107.978L12.146 90.6934L128.467 69.2044L118.19 85.0876L78.0146 93.0292V161.234L64.4671 164.036V95.8321L15.4161 104.708L0 107.978Z"
        fill={fill}
        stroke={stroke}
      />
      <path
        d="M127.066 83.6861L139.212 66.4015L255.533 44.9124L245.255 60.7956L205.08 68.7372V136.942L191.533 139.745V71.5402L142.482 80.4161L127.066 83.6861Z"
        fill={fill}
        stroke={stroke}
      />
      <path
        d="M0 197.204L12.6131 179.453L256 133.672L245.723 149.555L0 197.204Z"
        fill={fill}
        stroke={stroke}
      />
    </svg>
  );
}
