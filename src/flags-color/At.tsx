import * as React from "react";
import { IIconProps } from "../styled";

const SvgAt = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="#FF4B55">
      <path d="M0 0h512v170.67H0zM0 341.33h512V512H0z" />
    </g>
    <path fill="#F5F5F5" d="M0 170.67h512v170.66H0z" />
  </svg>
);

export default SvgAt;
