import * as React from "react";
import { IIconProps } from "../styled";

const SvgKp = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479B" d="M0 0h512v512H0z" />
    <g fill="#F5F5F5">
      <path d="M0 67.37h512v26.947H0zM0 417.68h512v26.947H0z" />
    </g>
    <path fill="#FF4B55" d="M0 94.32h512v323.37H0z" />
    <circle cx={163.21} cy={256} r={107.79} fill="#F5F5F5" />
    <path
      fill="#FF4B55"
      d="M166.081 157.866l21.623 64.835 68.344.53c2.907.023 4.113 3.733 1.774 5.46l-54.98 40.6 20.616 65.163c.877 2.772-2.279 5.065-4.644 3.374l-55.603-39.743-55.603 39.743c-2.365 1.691-5.521-.602-4.644-3.374l20.616-65.163-54.98-40.6c-2.339-1.727-1.133-5.437 1.774-5.46l68.344-.53 21.623-64.835c.919-2.758 4.82-2.758 5.74 0z"
    />
  </svg>
);

export default SvgKp;
