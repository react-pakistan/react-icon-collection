import * as React from "react";
import { IIconProps } from "../styled";

const SvgMedicalGrey14 = (props: IIconProps) => (
  <svg
    id="MedicalGrey14_svg__icons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <style>
        {
          ".MedicalGrey14_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        }
      </style>
    </defs>
    <g id="MedicalGrey14_svg__hospital_bed" data-name="hospital bed">
      <path
        className="MedicalGrey14_svg__cls-1"
        d="M5.83 15.98v32.09M58.01 24.07v24M5.83 41.98h52.18M52.1 32.4v9.58H18.68L5.83 31.02l9.58-8.17 11.39 9.73 25.3-.18zM20.89 22.85l6.01 5.37"
      />
      <circle
        className="MedicalGrey14_svg__cls-1"
        cx={5.83}
        cy={51.74}
        r={3.67}
      />
      <circle
        className="MedicalGrey14_svg__cls-1"
        cx={58.01}
        cy={51.74}
        r={3.67}
      />
    </g>
  </svg>
);

export default SvgMedicalGrey14;
