import * as React from "react";
import { IIconProps } from "../styled";

const SvgPr = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v102.4H0z" />
    <path fill="#F5F5F5" d="M0 102.4h512v102.4H0z" />
    <g fill="#FF4B55">
      <path d="M0 204.8h512v102.4H0zM0 409.6h512V512H0z" />
    </g>
    <path fill="#F5F5F5" d="M0 307.2h512v102.4H0z" />
    <path
      fill="#41479B"
      d="M266.758 264.402c4.273-3.966 4.273-12.838 0-16.804L0 0v512l266.758-247.598z"
    />
    <path
      fill="#F5F5F5"
      d="M109.034 199.093l12.802 38.386 40.463.314c5.239.041 7.411 6.726 3.197 9.838l-32.551 24.037 12.205 38.579c1.58 4.995-4.107 9.127-8.369 6.08l-32.92-23.53-32.92 23.53c-4.262 3.046-9.949-1.085-8.369-6.08l12.205-38.579-32.551-24.037c-4.214-3.112-2.042-9.798 3.197-9.838l40.463-.314 12.802-38.386c1.659-4.969 8.688-4.969 10.346 0z"
    />
  </svg>
);

export default SvgPr;
