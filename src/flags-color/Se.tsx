import * as React from "react";
import { IIconProps } from "../styled";

const SvgSe = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#4173cd" d="M0 0h512v512H0z" />
    <path
      fill="#ffe15a"
      d="M512 232H211.862V0h-52.965v232H0v48h158.897v232h52.965V280H512z"
    />
  </svg>
);

export default SvgSe;
