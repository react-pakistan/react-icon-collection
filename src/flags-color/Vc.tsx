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
    <path fill="#FFE15A" d="M114.76 0h282.48v512H114.76z" />
    <path fill="#73AF00" d="M397.24 0H512v512H397.24z" />
    <path fill="#4173CD" d="M0 0h114.76v512H0z" />
    <g fill="#73AF00">
      <path d="M184.195 247.348l32.071 64.141 32.07-64.141-32.07-64.141zM263.664 247.348l32.07 64.141 32.071-64.141-32.071-64.141zM223.929 324.459L256 388.6l32.071-64.141L256 260.318z" />
    </g>
  </svg>
);

export default SvgVc;
