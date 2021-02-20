import * as React from "react";
import { IIconProps } from "../styled";

const SvgLa = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 0h512v107.95H0zm0 404.05h512V512H0z" fill="#ff4b55" />
    <path fill="#41479b" d="M0 107.95h512v296.1H0z" />
    <circle cx={256} cy={256} r={92.21} fill="#f5f5f5" />
  </svg>
);

export default SvgLa;
