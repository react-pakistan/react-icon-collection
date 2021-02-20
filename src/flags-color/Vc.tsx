import * as React from "react";
import { IIconProps } from "../styled";

const SvgVc = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ffe15a" d="M114.76 0h282.48v512H114.76z" />
    <path fill="#73af00" d="M397.24 0H512v512H397.24z" />
    <path fill="#4173cd" d="M0 0h114.76v512H0z" />
    <path
      d="M184.195 247.348l32.071 64.141 32.07-64.141-32.07-64.141zm79.469 0l32.07 64.141 32.071-64.141-32.071-64.141zm-39.735 77.111L256 388.6l32.071-64.141L256 260.318z"
      fill="#73af00"
    />
  </svg>
);

export default SvgVc;
