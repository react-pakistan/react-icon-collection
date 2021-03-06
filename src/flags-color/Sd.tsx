import * as React from "react";
import { IIconProps } from "../styled";

const SvgSd = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v170.67H0z" />
    <path fill="#464655" d="M0 341.33h512V512H0z" />
    <path fill="#F5F5F5" d="M0 170.67h512v170.67H0z" />
    <path
      fill="#73AF00"
      d="M0 512l244.325-249.017c3.493-3.57 3.493-10.397 0-13.966L0 0v512z"
    />
  </svg>
);

export default SvgSd;
