import * as React from "react";
import { IIconProps } from "../styled";

const SvgCz = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479B" d="M0 512l256-256L0 0z" />
    <path fill="#FF4B55" d="M0 512h512V256H256z" />
    <path fill="#F5F5F5" d="M0 0h512v256H256z" />
  </svg>
);

export default SvgCz;
