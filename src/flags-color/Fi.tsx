import * as React from "react";
import { IIconProps } from "../styled";

const SvgFi = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 0h512v512H0z" />
    <path
      fill="#41479B"
      d="M512 229.517H211.862V0h-52.965v229.517H0v52.966h158.897V512h52.965V282.483H512z"
    />
  </svg>
);

export default SvgFi;
