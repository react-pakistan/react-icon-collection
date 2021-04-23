import * as React from "react";
import { IIconProps } from "../styled";

const SvgBd = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73AF00" d="M0 0h512v512H0z" />
    <path
      fill="#FF4B55"
      d="M324.961 206.268c42.901 100.77-53.233 196.904-154.004 154.003-24.506-10.433-44.107-30.034-54.54-54.54-42.901-100.77 53.233-196.904 154.004-154.003 24.506 10.433 44.108 30.034 54.54 54.54z"
    />
  </svg>
);

export default SvgBd;
