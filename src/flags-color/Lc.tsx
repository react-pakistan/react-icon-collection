import * as React from "react";
import { IIconProps } from "../styled";

const SvgLc = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#3CC8FF" d="M0 0h512v512H0z" />
    <path fill="#464655" d="M256 114.759L132.414 397.241h247.172z" />
    <path
      fill="#F5F5F5"
      d="M256 158.807l96.591 220.78H159.409L256 158.807m0-44.048L132.414 397.241h247.172L256 114.759z"
    />
    <path fill="#FFE15A" d="M132.414 397.241L256 256l123.586 141.241z" />
  </svg>
);

export default SvgLc;
