import * as React from "react";
import { IIconProps } from "../styled";

const SvgMg = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M167.72 0H512v256H167.72z" />
    <path fill="#73AF00" d="M167.72 256H512v256H167.72z" />
    <path fill="#F5F5F5" d="M0 0h167.72v512H0z" />
  </svg>
);

export default SvgMg;
