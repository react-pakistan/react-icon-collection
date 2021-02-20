import * as React from "react";
import { IIconProps } from "../styled";

const SvgEe = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#4173cd" d="M0 .009h512v170.66H0z" />
    <path fill="#f5f5f5" d="M0 341.331h512v170.66H0z" />
    <path fill="#464655" d="M0 170.671h512v170.66H0z" />
  </svg>
);

export default SvgEe;
