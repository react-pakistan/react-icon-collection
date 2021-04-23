import * as React from "react";
import { IIconProps } from "../styled";

const SvgCo = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 383.86h512V512H0z" />
    <path fill="#FFE15A" d="M0 0h512v256H0z" />
    <path fill="#41479B" d="M0 256h512v127.86H0z" />
  </svg>
);

export default SvgCo;
