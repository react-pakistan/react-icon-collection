import * as React from "react";
import { IIconProps } from "../styled";

const SvgGh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v170.67H0z" />
    <path fill="#73AF00" d="M0 341.33h512V512H0z" />
    <path fill="#FFE15A" d="M0 170.67h512v170.67H0z" />
    <path
      fill="#464655"
      d="M261.681 191.755l14.061 42.161 44.443.345c5.754.045 8.14 7.388 3.511 10.806l-35.753 26.402 13.406 42.374c1.736 5.486-4.511 10.024-9.192 6.678L256 294.677l-36.158 25.844c-4.681 3.346-10.928-1.192-9.192-6.678l13.406-42.374-35.753-26.402c-4.629-3.418-2.243-10.761 3.511-10.806l44.443-.345 14.061-42.161c1.822-5.458 9.542-5.458 11.363 0z"
    />
  </svg>
);

export default SvgGh;
