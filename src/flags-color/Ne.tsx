import * as React from "react";
import { IIconProps } from "../styled";

const SvgNe = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 341.33h512V512H0z" />
    <path fill="#ff9b55" d="M0 0h512v170.67H0z" />
    <path fill="#f5f5f5" d="M0 170.67h512v170.67H0z" />
    <circle cx={256} cy={256} r={67.37} fill="#ff9b55" />
  </svg>
);

export default SvgNe;