import * as React from "react";
import { IIconProps } from "../styled";

const SvgJp = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 0h512v512H0z" />
    <circle cx={256} cy={256} r={97.1} fill="#FF4B55" />
  </svg>
);

export default SvgJp;
