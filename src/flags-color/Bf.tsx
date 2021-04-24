import * as React from "react";
import { IIconProps } from "../styled";

const SvgBf = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v256H0z" />
    <path fill="#73AF00" d="M0 256h512v256H0z" />
    <path
      fill="#FFE15A"
      d="M260.15 182.515l16.951 50.827 53.577.415c4.151.032 5.872 5.329 2.533 7.795L290.11 273.38l16.161 51.083c1.252 3.958-3.254 7.231-6.631 4.818l-43.589-31.156-43.589 31.156c-3.377 2.414-7.883-.86-6.631-4.818l16.161-51.083-43.101-31.828c-3.339-2.466-1.618-7.763 2.533-7.795l53.577-.415 16.951-50.827c1.315-3.937 6.885-3.937 8.198 0z"
    />
  </svg>
);

export default SvgBf;
