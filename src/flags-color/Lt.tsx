import * as React from "react";
import { IIconProps } from "../styled";

const SvgLt = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 341h512v171H0z" />
    <path fill="#FFE15A" d="M0 0h512v171H0z" />
    <path fill="#73AF00" d="M0 171h512v170H0z" />
  </svg>
);

export default SvgLt;
