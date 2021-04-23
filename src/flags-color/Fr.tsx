import * as React from "react";
import { IIconProps } from "../styled";

const SvgFr = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479B" d="M0 0h170.67v512H0z" />
    <path fill="#F5F5F5" d="M170.67 0h170.67v512H170.67z" />
    <path fill="#FF4B55" d="M341.33 0H512v512H341.33z" />
  </svg>
);

export default SvgFr;
