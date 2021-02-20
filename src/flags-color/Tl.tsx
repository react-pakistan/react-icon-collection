import * as React from "react";
import { IIconProps } from "../styled";

const SvgTl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v512H0z" />
    <path
      fill="#ffe15a"
      d="M345.999 264.368c5.138-3.678 5.138-13.059 0-16.737L0 0v512s346.241-247.651 345.999-247.632z"
    />
    <path
      fill="#464655"
      d="M0 512l235.601-246.731c4.596-4.806 4.596-13.731 0-18.538L0 0v512z"
    />
    <path
      fill="#f5f5f5"
      d="M68.134 183.534l1.284 48.494-45.467 16.914c-4.36 1.622-4.146 7.86.314 9.18l46.517 13.764 2.036 48.468c.195 4.648 6.194 6.372 8.828 2.538l27.465-39.987 46.725 13.041c4.481 1.251 7.975-3.922 5.142-7.612l-29.543-38.478 26.842-40.408c2.574-3.875-1.266-8.796-5.65-7.242l-45.724 16.207-30.136-38.015c-2.889-3.645-8.756-1.514-8.633 3.136z"
    />
  </svg>
);

export default SvgTl;
