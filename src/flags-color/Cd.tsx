import * as React from "react";
import { IIconProps } from "../styled";

const SvgCd = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#82AFFF" d="M0 0h512v512H0z" />
    <g fill="#FFE15A">
      <path d="M477.867 0L0 377.263v26.948L512 0zM34.133 512L512 134.737v-26.948L0 512z" />
    </g>
    <path fill="#FF4B55" d="M512 0L0 404.211V512l512-404.211z" />
    <path
      fill="#FFE15A"
      d="M122.682 61.068L135.4 99.203l40.199.312c2.248.017 3.18 2.886 1.372 4.221l-32.338 23.88 12.126 38.328c.678 2.143-1.762 3.916-3.591 2.609l-32.705-23.376-32.705 23.376c-1.829 1.307-4.269-.466-3.591-2.609l12.126-38.328-32.338-23.88c-1.808-1.335-.876-4.204 1.372-4.221l40.199-.312 12.719-38.135c.709-2.132 3.726-2.132 4.437 0z"
    />
  </svg>
);

export default SvgCd;
