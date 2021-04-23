import * as React from "react";
import { IIconProps } from "../styled";

const SvgJm = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73AF00" d="M0 0h512v512H0z" />
    <path
      fill="#FFE15A"
      d="M512 0h-48.329L256 207.671 48.329 0H0v48.329L207.671 256 0 463.671V512h48.329L256 304.329 463.671 512H512v-48.329L304.329 256 512 48.329z"
    />
    <g fill="#464655">
      <path d="M512 48.329v415.342L304.329 256zM0 463.671V48.329L207.671 256z" />
    </g>
  </svg>
);

export default SvgJm;
