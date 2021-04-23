import * as React from "react";
import { IIconProps } from "../styled";

const SvgSc = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73AF00" d="M512 511.974v-170.65L0 511.974z" />
    <path fill="#41479B" d="M170.702.026H.052L0 511.974z" />
    <path fill="#FFE15A" d="M341.351.026H170.702L0 511.974z" />
    <path
      fill="#FF4B55"
      d="M512 .026H341.351L0 511.974c.367.556 512-341.299 512-341.299V.026z"
    />
    <path fill="#F5F5F5" d="M512 341.324v-170.65L0 511.974z" />
  </svg>
);

export default SvgSc;
