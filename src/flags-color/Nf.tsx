import * as React from "react";
import { IIconProps } from "../styled";

const SvgNf = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 0h170.67v512H0z" />
    <path fill="#f5f5f5" d="M170.67 0h170.67v512H170.67z" />
    <path
      d="M341.33 0H512v512H341.33zm-26.37 342.599l-27.396-159.812a49.964 49.964 0 00-6.402-17.265L256 123.586l-25.161 41.935a49.971 49.971 0 00-6.402 17.265L197.04 342.599a4.997 4.997 0 004.925 5.841h44.041v39.974h19.987V348.44h44.041a4.997 4.997 0 004.926-5.841z"
      fill="#73af00"
    />
  </svg>
);

export default SvgNf;
