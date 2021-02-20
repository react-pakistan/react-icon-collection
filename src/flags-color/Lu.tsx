import * as React from "react";
import { IIconProps } from "../styled";

const SvgLu = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v170.5H0z" />
    <path fill="#82afff" d="M0 341.5h512V512H0z" />
    <path fill="#f5f5f5" d="M0 170.5h512v171H0z" />
  </svg>
);

export default SvgLu;
