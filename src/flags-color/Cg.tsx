import * as React from "react";
import { IIconProps } from "../styled";

const SvgCg = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FFE15A" d="M361.931 0L0 512h150.069L512 0z" />
    <path fill="#73AF00" d="M361.931 0H0v512z" />
    <path fill="#FF4B55" d="M512 0L150.069 512H512z" />
  </svg>
);

export default SvgCg;
