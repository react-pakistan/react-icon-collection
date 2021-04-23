import * as React from "react";
import { IIconProps } from "../styled";

const SvgBw = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#82AFFF" d="M0 0h512v512H0z" />
    <path fill="#464655" d="M0 215.58h512v80.84H0z" />
    <g fill="#F5F5F5">
      <path d="M0 188.63h512v26.947H0zM0 296.42h512v26.947H0z" />
    </g>
  </svg>
);

export default SvgBw;
