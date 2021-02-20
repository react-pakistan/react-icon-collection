import * as React from "react";
import { IIconProps } from "../styled";

const SvgGg = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 0h512v512H0z" />
    <path
      fill="#ff4b55"
      d="M512 202.105H309.895V0H202.106v202.105H0v107.79h202.106V512h107.789V309.895H512z"
    />
    <g fill="#ffe15a">
      <path d="M417.684 296.421v-80.842l-20.21 20.21H114.527l-20.211-20.21v80.842l20.211-20.21h282.947z" />
      <path d="M215.579 417.684h80.842l-20.21-20.21V114.526l20.21-20.21h-80.842l20.211 20.21v282.948z" />
    </g>
  </svg>
);

export default SvgGg;
