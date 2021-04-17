import * as React from "react";
import { IIconProps } from "../styled";

const SvgMedicalGrey20 = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="MedicalGrey20_svg__icons"
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
        d="M5.06 13.84h54.01v36.19H5.06zm0 24.88h54.01"
        className="MedicalGrey20_svg__cls-1"
      />
      <circle
        cx={12.98}
        cy={44.58}
        r={2.65}
        className="MedicalGrey20_svg__cls-1"
      />
      <circle
        cx={23.06}
        cy={44.58}
        r={2.65}
        className="MedicalGrey20_svg__cls-1"
      />
      <path
        d="M32.12 44.58h8.73m4.85 0h8.72m4.65-17.35H44.98l-4.67-9.1-6.33 16.43-3.67-7.33h-7.06l-3.83-7.24-3.56 7.24H5.06"
        className="MedicalGrey20_svg__cls-1"
      />
    </g>
  </svg>
);

export default SvgMedicalGrey20;
