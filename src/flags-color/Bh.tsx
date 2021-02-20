import * as React from "react";
import { IIconProps } from "../styled";

const SvgBh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 0h209.37v512H0z" />
    <path
      fill="#ff4b55"
      d="M101.579 0l107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32 107.789 32-107.789 32H512V0z"
    />
  </svg>
);

export default SvgBh;
