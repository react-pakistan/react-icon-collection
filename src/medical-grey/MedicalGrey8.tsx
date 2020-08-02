import * as React from "react";
import { IIconProps } from "../styled";

const SvgMedicalGrey8 = (props: IIconProps) => (
  <svg
    id="MedicalGrey8_svg__icons"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>
        {
          ".MedicalGrey8_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        }
      </style>
    </defs>
    <g id="MedicalGrey8_svg__dropper">
      <rect
        className="MedicalGrey8_svg__cls-1"
        x={18.26}
        y={10.85}
        width={27.32}
        height={38.02}
        rx={10.33}
      />
      <path
        className="MedicalGrey8_svg__cls-1"
        d="M45.58 20.32H33.57M45.58 27.15H33.57M45.58 33.98H33.57M45.33 40.81H33.57M28.59 10.85V6.49h8.56v4.54M37.15 48.83v4.41h-8.56v-4.41M32.87 6.49V3.03M32.87 53.24s-.17 6.86-8.12 6.86"
      />
    </g>
  </svg>
);

export default SvgMedicalGrey8;
