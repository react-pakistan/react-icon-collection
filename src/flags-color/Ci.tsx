import * as React from "react";
import { IIconProps } from "../styled";

const SvgCi = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73AF00" d="M341.33 0H512v512H341.33z" />
    <path fill="#F5F5F5" d="M170.67 0h170.67v512H170.67z" />
    <path fill="#FF9B55" d="M0 0h170.67v512H0z" />
  </svg>
);

export default SvgCi;
