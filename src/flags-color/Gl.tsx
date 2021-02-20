import * as React from "react";
import { IIconProps } from "../styled";

const SvgGl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 0h512v256H0z" />
    <path
      d="M0 256h512v256H0zm176.552-114.759c-63.379 0-114.759 51.379-114.759 114.759H291.31c0-63.379-51.379-114.759-114.758-114.759z"
      fill="#ff4b55"
    />
    <path
      fill="#f5f5f5"
      d="M176.552 370.759c63.379 0 114.759-51.379 114.759-114.759H61.793c0 63.379 51.379 114.759 114.759 114.759z"
    />
  </svg>
);

export default SvgGl;
