import * as React from "react";
import { IIconProps } from "../styled";

const SvgCl = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 0h512v256H0z" />
    <path fill="#ff4b55" d="M17.655 256v-13.474H0V512h512V256z" />
    <path fill="#41479b" d="M0 0h256v256H0z" />
    <path
      fill="#f5f5f5"
      d="M133.19 70.533l12.845 38.515 40.599.315c5.256.041 7.436 6.749 3.207 9.871l-32.66 24.118 12.247 38.709c1.586 5.012-4.121 9.157-8.397 6.101L128 164.554l-33.03 23.609c-4.276 3.057-9.983-1.089-8.397-6.101l12.247-38.709-32.66-24.118c-4.228-3.123-2.049-9.831 3.207-9.871l40.599-.315 12.845-38.515c1.662-4.987 8.716-4.987 10.379-.001z"
    />
  </svg>
);

export default SvgCl;
