import * as React from "react";
import { IIconProps } from "../styled";

const SvgTg = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="#73AF00">
      <path d="M0 0h512v102.4H0zM0 204.8h512v102.4H0z" />
    </g>
    <path fill="#FFE15A" d="M0 102.4h512v102.4H0z" />
    <path fill="#73AF00" d="M0 409.6h512V512H0z" />
    <path fill="#FFE15A" d="M0 307.2h512v102.4H0z" />
    <path fill="#FF4B55" d="M301.895 307.2H0V0h309.895v299.2a8 8 0 01-8 8z" />
    <path
      fill="#F5F5F5"
      d="M151.616 72.288l-19.472 58.385-61.545.477c-3.374.026-4.773 4.332-2.059 6.336l49.51 36.561-18.565 58.68c-1.018 3.217 2.645 5.878 5.39 3.916l50.071-35.789 50.071 35.789c2.745 1.962 6.408-.699 5.39-3.916l-18.565-58.68 49.51-36.561c2.714-2.004 1.315-6.31-2.059-6.336l-61.545-.477-19.472-58.385c-1.065-3.201-5.592-3.201-6.66 0z"
    />
  </svg>
);

export default SvgTg;
