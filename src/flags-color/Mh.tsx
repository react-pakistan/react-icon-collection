import * as React from "react";
import { IIconProps } from "../styled";

const SvgMh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479b" d="M0 0h512v512H0z" />
    <path fill="#f5f5f5" d="M0 512l512-323.368V94.316L0 498.526z" />
    <path fill="#ff9b55" d="M512 0L0 485.053v13.473l512-404.21z" />
    <path
      fill="#f5f5f5"
      d="M176.42 146.853l57.132-7.134-57.132-7.135 28.955-17.759-36.026 8.809 21.925-29.913-29.913 21.925 8.809-36.027-17.759 28.956-7.135-57.132-7.135 57.132-17.759-28.956 8.809 36.027-29.913-21.925 21.925 29.913-36.027-8.809 28.956 17.759L57 139.719l57.131 7.134-28.955 17.76 36.027-8.809-21.925 29.913 29.913-21.925-8.809 36.026 17.759-28.955 7.135 57.132 7.135-57.132 17.759 28.955-8.809-36.026 29.913 21.925-21.925-29.913 36.026 8.809z"
    />
  </svg>
);

export default SvgMh;
