import * as React from "react";
import { IIconProps } from "../styled";

const SvgMc = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v256H0z" />
    <path fill="#f5f5f5" d="M0 256h512v256H0z" />
  </svg>
);

export default SvgMc;
