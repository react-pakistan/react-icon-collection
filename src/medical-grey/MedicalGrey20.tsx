import * as React from "react";
import { IIconProps } from "../styled";

const SvgMedicalGrey20 = (props: IIconProps) => (
  <svg
    id="MedicalGrey20_svg__icons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>
        {
          ".MedicalGrey20_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        }
      </style>
    </defs>
    <g id="MedicalGrey20_svg__monitor">
      <path
        className="MedicalGrey20_svg__cls-1"
        d="M5.06 13.84h54.01v36.19H5.06zM5.06 38.72h54.01"
      />
      <circle
        className="MedicalGrey20_svg__cls-1"
        cx={12.98}
        cy={44.58}
        r={2.65}
      />
      <circle
        className="MedicalGrey20_svg__cls-1"
        cx={23.06}
        cy={44.58}
        r={2.65}
      />
      <path
        className="MedicalGrey20_svg__cls-1"
        d="M32.12 44.58h8.73M45.7 44.58h8.72M59.07 27.23H44.98l-4.67-9.1-6.33 16.43-3.67-7.33h-7.06l-3.83-7.24-3.56 7.24H5.06"
      />
    </g>
  </svg>
);

export default SvgMedicalGrey20;
