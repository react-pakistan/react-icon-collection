import * as React from "react";
import { IIconProps } from "../styled";

const SvgCf = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FFE15A" d="M0 384h512v128H0z" />
    <path fill="#73AF00" d="M0 256h512v128H0z" />
    <path fill="#F5F5F5" d="M0 128h512v128H0z" />
    <path fill="#41479B" d="M0 0h512v128H0z" />
    <path fill="#FF4B55" d="M192 0h128v512H192z" />
    <path
      fill="#FFE15A"
      d="M91.062 17.245l11.243 33.71 35.535.275c2.753.021 3.895 3.535 1.68 5.17l-28.586 21.11 10.719 33.881c.83 2.625-2.158 4.796-4.398 3.195l-28.91-20.664-28.91 20.664c-2.24 1.601-5.228-.57-4.398-3.195L65.755 77.51 37.169 56.4c-2.215-1.635-1.073-5.149 1.68-5.17l35.535-.275 11.243-33.71c.87-2.612 4.564-2.612 5.435 0z"
    />
  </svg>
);

export default SvgCf;
