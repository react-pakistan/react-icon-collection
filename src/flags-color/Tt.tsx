import * as React from "react";
import { IIconProps } from "../styled";

const SvgTt = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v512H0z" />
    <path
      d="M0 0l361.931 512h26.483L26.483 0zm150.069 0h-26.483l361.931 512H512z"
      fill="#f5f5f5"
    />
    <path fill="#464655" d="M26.483 0l361.931 512h97.103L123.586 0z" />
  </svg>
);

export default SvgTt;
