import * as React from "react";
import { ILogoProps } from "../styled";

const SvgMiscGrey1 = (props: ILogoProps) => (
  <svg
    data-name="Layer 1"
    viewBox="0 0 201.86 35.54"
    width="1em"
    height="1em"
    {...props}
  >
    <text
      transform="translate(7.2 24.75)"
      fontSize={23}
      fill="#070606"
      fontFamily="HalimunRegular,Halimun"
    >
      <tspan letterSpacing="-.02em">{"t"}</tspan>
      <tspan x={14.15} y={0}>
        {"aim"}
      </tspan>
      <tspan x={71.07} y={0} letterSpacing="-.03em">
        {"o"}
      </tspan>
      <tspan x={86.23} y={0} letterSpacing={0}>
        {"ork"}
      </tspan>
      <tspan x={139.1} y={0} letterSpacing="-.02em">
        {"ha"}
      </tspan>
      <tspan x={174.34} y={0} letterSpacing={0}>
        {"n"}
      </tspan>
    </text>
  </svg>
);

export default SvgMiscGrey1;
