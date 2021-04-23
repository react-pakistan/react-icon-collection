import * as React from "react";
import { IIconProps } from "../styled";

const SvgSl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479B" d="M0 341.33h512V512H0z" />
    <path fill="#73AF00" d="M0 0h512v170.67H0z" />
    <path fill="#F5F5F5" d="M0 170.67h512v170.66H0z" />
  </svg>
);

export default SvgSl;
