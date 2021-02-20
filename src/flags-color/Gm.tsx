import * as React from "react";
import { IIconProps } from "../styled";

const SvgGm = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 336.53h512V512H0z" />
    <path fill="#ff4b55" d="M0 0h512v175.47H0z" />
    <path fill="#41479b" d="M0 175.47h512v161.05H0z" />
    <path d="M0 175.47h512v26.842H0zm0 134.21h512v26.842H0z" fill="#f5f5f5" />
  </svg>
);

export default SvgGm;
