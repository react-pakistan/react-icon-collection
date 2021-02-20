import * as React from "react";
import { IIconProps } from "../styled";

const SvgPw = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#3cc8ff" d="M0 0h512v512H0z" />
    <path
      fill="#ffe15a"
      d="M352.277 210.156c39.526 92.976-49.146 181.648-142.122 142.122a95.474 95.474 0 01-50.433-50.433c-39.526-92.976 49.146-181.648 142.122-142.122a95.474 95.474 0 0150.433 50.433z"
    />
  </svg>
);

export default SvgPw;
