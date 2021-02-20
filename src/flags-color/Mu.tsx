import * as React from "react";
import { IIconProps } from "../styled";

const SvgMu = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v128.5H0z" />
    <path fill="#41479b" d="M0 128.5h512V256H0z" />
    <path fill="#ffe15a" d="M0 256h512v127.5H0z" />
    <path fill="#73af00" d="M0 383.5h512V512H0z" />
  </svg>
);

export default SvgMu;
