import * as React from "react";
import { IIconProps } from "../styled";

const SvgTz = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 390.737V0h388.414z" />
    <path fill="#4173cd" d="M512 121.263V512H123.586z" />
    <path fill="#ffe15a" d="M512 128.86V0H383.14L0 383.14V512h128.86z" />
    <path fill="#464655" d="M512 80.546V0h-80.545L0 431.454V512h80.545z" />
  </svg>
);

export default SvgTz;
