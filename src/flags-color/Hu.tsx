import * as React from "react";
import { IIconProps } from "../styled";

const SvgHu = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v170.76H0z" />
    <path fill="#73af00" d="M0 341.24h512V512H0z" />
    <path fill="#f5f5f5" d="M0 170.76h512v170.48H0z" />
  </svg>
);

export default SvgHu;
