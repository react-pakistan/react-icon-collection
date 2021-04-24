import * as React from "react";
import { IIconProps } from "../styled";

const SvgTo = (props: IIconProps) => (
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
      d="M248.5 238.532H0V0h256v231.031a7.5 7.5 0 01-7.5 7.501z"
    />
    <path
      fill="#FF4B55"
      d="M218 88.035h-60.035V28H97.93v60.035H37.895v60.035H97.93v60.035h60.035V148.07H218z"
    />
  </svg>
);

export default SvgTo;
