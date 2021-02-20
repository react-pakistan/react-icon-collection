import * as React from "react";
import { IIconProps } from "../styled";

const SvgAe = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M158.9 0H512v170.76H158.9z" />
    <path fill="#464655" d="M158.9 341.24H512V512H158.9z" />
    <path fill="#f5f5f5" d="M158.9 170.76H512v170.48H158.9z" />
    <path fill="#ff4b55" d="M0 0h158.9v512H0z" />
  </svg>
);

export default SvgAe;
