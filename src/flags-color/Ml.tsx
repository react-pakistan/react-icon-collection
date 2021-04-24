import * as React from "react";
import { IIconProps } from "../styled";

const SvgMl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M341.67 0H512v512H341.67z" />
    <path fill="#FFE15A" d="M170.33 0h171.33v512H170.33z" />
    <path fill="#73AF00" d="M0 0h170.33v512H0z" />
  </svg>
);

export default SvgMl;
