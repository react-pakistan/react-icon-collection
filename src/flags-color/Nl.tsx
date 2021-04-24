import * as React from "react";
import { IIconProps } from "../styled";

const SvgNl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 .5h512v170.33H0z" />
    <path fill="#41479B" d="M0 341.17h512V511.5H0z" />
    <path fill="#F5F5F5" d="M0 170.83h512v170.33H0z" />
  </svg>
);

export default SvgNl;
