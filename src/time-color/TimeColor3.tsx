import * as React from "react";
import { IIconProps } from "../styled";

const SvgTimeColor3 = (props: IIconProps) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <linearGradient
        id="TimeColor3_svg__a"
        x1={14}
        y1={64}
        x2={114}
        y2={64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#e5f4fa" stopOpacity={0.75} />
        <stop offset={1} stopColor="#d1effa" />
      </linearGradient>
    </defs>
    <circle cx={64} cy={64} r={43} fill="#fff" />
    <circle cx={64} cy={64} r={50} fill="url(#TimeColor3_svg__a)" />
    <path
      d="M74.328 13.791a1.25 1.25 0 00-.5 2.449A48.8 48.8 0 1164 15.25a1.25 1.25 0 000-2.5 51.193 51.193 0 1010.328 1.041z"
      fill="#670100"
    />
    <path
      d="M19.75 64A44.25 44.25 0 1064 19.75 44.3 44.3 0 0019.75 64zm86 0A41.75 41.75 0 1164 22.25 41.8 41.8 0 01105.75 64z"
      fill="#670100"
    />
    <path
      d="M62.75 34.594v28.163l-20.09.108a1.25 1.25 0 00.007 2.5h.007l21.333-.115A1.25 1.25 0 0065.25 64V34.594a1.25 1.25 0 00-2.5 0z"
      fill="#670100"
    />
  </svg>
);

export default SvgTimeColor3;
