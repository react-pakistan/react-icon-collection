import * as React from "react";
import { IIconProps } from "../styled";

const SvgSr = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73AF00" d="M0 0h512v512H0z" />
    <g fill="#F5F5F5">
      <path d="M0 94.32h512v53.895H0zM0 363.79h512v53.895H0z" />
    </g>
    <path fill="#C8414B" d="M0 148.21h512v215.58H0z" />
    <path
      fill="#FFE15A"
      d="M252.644 172.99l-19.619 58.826-62.01.481c-3.4.026-4.809 4.365-2.074 6.384l49.884 36.837-18.705 59.123c-1.025 3.241 2.665 5.923 5.431 3.946l50.45-36.06 50.45 36.06c2.766 1.977 6.456-.704 5.431-3.946l-18.705-59.123 49.884-36.837c2.735-2.02 1.325-6.358-2.074-6.384l-62.01-.481-19.619-58.826c-1.077-3.225-5.639-3.225-6.714 0z"
    />
  </svg>
);

export default SvgSr;
