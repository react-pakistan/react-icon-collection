import * as React from "react";
import { IIconProps } from "../styled";

const SvgMedicalGrey16 = (props: IIconProps) => (
  <svg
    id="MedicalGrey16_svg__icons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>
        {
          ".MedicalGrey16_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        }
      </style>
    </defs>
    <g id="MedicalGrey16_svg__location">
      <path
        className="MedicalGrey16_svg__cls-1"
        d="M32 31.95V18.5M25.2 25.22h13.6M14.71 25.6c0 9.55 15.36 23 17.29 31.09 2.26-8.19 17.29-21.54 17.29-31.09a17.29 17.29 0 10-34.58 0z"
      />
      <circle
        className="MedicalGrey16_svg__cls-1"
        cx={32}
        cy={25.22}
        r={12.89}
      />
    </g>
  </svg>
);

export default SvgMedicalGrey16;
