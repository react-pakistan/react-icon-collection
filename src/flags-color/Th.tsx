import * as React from "react";
import { IIconProps } from "../styled";

const SvgTh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 .25h512v511.5H0z" />
    <g fill="#FF4B55">
      <path d="M0 430.95h512v80.8H0zM0 .25h512v80.8H0z" />
    </g>
    <path fill="#41479B" d="M0 161.75h512v188.4H0z" />
  </svg>
);

export default SvgTh;
