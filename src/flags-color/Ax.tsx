import * as React from "react";
import { IIconProps } from "../styled";

const SvgAx = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#4173CD" d="M0 0h512v512H0z" />
    <path
      fill="#FFE15A"
      d="M512 211.862H229.517V0h-88.276v211.862H0v88.276h141.241V512h88.276V300.138H512z"
    />
    <path
      fill="#FF4B55"
      d="M512 238.345H203.034V0h-35.31v238.345H0v35.31h167.724V512h35.31V273.655H512z"
    />
  </svg>
);

export default SvgAx;
