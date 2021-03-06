import * as React from "react";
import { IIconProps } from "../styled";

const SvgRu = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 .279h512v170.48H0z" />
    <path fill="#FF4B55" d="M0 341.241h512v170.48H0z" />
    <path fill="#41479B" d="M0 170.761h512v170.48H0z" />
  </svg>
);

export default SvgRu;
