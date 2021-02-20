import * as React from "react";
import { IIconProps } from "../styled";

const SvgIs = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479b" d="M0 0h512v512H0z" />
    <path
      fill="#f5f5f5"
      d="M512 211.862H229.517V0h-88.276v211.862H0v88.276h141.241V512h88.276V300.138H512z"
    />
    <path
      fill="#ff4b55"
      d="M512 229.517H211.862V0h-52.965v229.517H0v52.966h158.897V512h52.965V282.483H512z"
    />
  </svg>
);

export default SvgIs;
