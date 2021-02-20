import * as React from "react";
import { IIconProps } from "../styled";

const SvgMm = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 341.33h512V512H0z" />
    <path fill="#ffe15a" d="M0 0h512v170.67H0z" />
    <path fill="#73af00" d="M0 170.67h512v170.67H0z" />
    <path
      fill="#f5f5f5"
      d="M263.681 86.516l40.348 120.98 127.527.989c7.779.06 11.005 9.988 4.747 14.61l-102.591 75.758 38.468 121.591c2.347 7.417-6.099 13.553-12.428 9.029L256 355.315l-103.753 74.159c-6.329 4.524-14.774-1.612-12.428-9.029l38.468-121.591-102.59-75.759c-6.258-4.621-3.032-14.549 4.747-14.61l127.527-.989 40.348-120.98c2.462-7.38 12.9-7.38 15.362 0z"
    />
  </svg>
);

export default SvgMm;
