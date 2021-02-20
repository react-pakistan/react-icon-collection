import * as React from "react";
import { IIconProps } from "../styled";

const SvgTimeColor7 = (props: IIconProps) => (
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
        id="TimeColor7_svg__a"
        x1={26.5}
        y1={64}
        x2={101.5}
        y2={64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffe6a7" stopOpacity={0.75} />
        <stop offset={1} stopColor="#ffdc90" />
      </linearGradient>
    </defs>
    <circle cx={64} cy={64} r={37.5} fill="url(#TimeColor7_svg__a)" />
    <path
      d="M64 12.75a51.186 51.186 0 00-37.2 16l-1.059-7.918a1.25 1.25 0 00-2.479.332l1.418 10.609a1.251 1.251 0 001.239 1.084h9.807a1.25 1.25 0 000-2.5h-7a48.594 48.594 0 11-6.729 8.887 1.25 1.25 0 10-2.152-1.271A51.256 51.256 0 1064 12.75z"
      fill="#670100"
    />
    <path
      d="M94.009 86.526a1.249 1.249 0 001.741-.306 38.764 38.764 0 10-7.2 7.759 1.25 1.25 0 00-1.586-1.934 36.218 36.218 0 116.736-7.26 1.25 1.25 0 00.309 1.741z"
      fill="#670100"
    />
    <path
      d="M62.75 38.356v24.4l-17.361.094a1.25 1.25 0 00.007 2.5h.004l18.6-.1A1.25 1.25 0 0065.25 64V38.356a1.25 1.25 0 00-2.5 0z"
      fill="#670100"
    />
  </svg>
);

export default SvgTimeColor7;
