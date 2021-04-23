import * as React from "react";
import { IIconProps } from "../styled";

const SvgLv = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#C8414B" d="M0 0h512v512H0z" />
    <path fill="#F5F5F5" d="M0 209.17h512v93.66H0z" />
  </svg>
);

export default SvgLv;
