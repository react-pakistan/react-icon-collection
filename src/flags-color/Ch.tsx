import * as React from "react";
import { IIconProps } from "../styled";

const SvgCh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v512H0z" />
    <path
      fill="#F5F5F5"
      d="M364.357 216.597h-68.955v-68.955c0-5.44-4.41-9.851-9.851-9.851h-59.104c-5.44 0-9.851 4.41-9.851 9.851v68.955h-68.955c-5.44 0-9.851 4.41-9.851 9.851v59.104c0 5.44 4.41 9.851 9.851 9.851h68.955v68.955c0 5.44 4.41 9.851 9.851 9.851h59.104c5.44 0 9.851-4.41 9.851-9.851v-68.955h68.955c5.44 0 9.851-4.41 9.851-9.851v-59.104c0-5.44-4.41-9.851-9.851-9.851z"
    />
  </svg>
);

export default SvgCh;
