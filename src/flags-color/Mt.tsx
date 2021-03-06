import * as React from "react";
import { IIconProps } from "../styled";

const SvgMt = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M256 0h256v512H256z" />
    <path fill="#F5F5F5" d="M0 0h256v512H0z" />
    <path
      fill="#FF4B55"
      d="M114.333 31.439V67.49c1.985.078 4.2.979 6.041 2.82s2.743 4.056 2.82 6.041h36.052v35.93h-36.052c-.078 1.985-.979 4.2-2.82 6.041-1.84 1.841-4.055 2.742-6.041 2.82v36.052h-35.93v-36.052c-1.985-.077-4.2-.979-6.041-2.82-1.841-1.84-2.742-4.055-2.82-6.041H33.491v-35.93h36.052c.077-1.985.979-4.2 2.82-6.041 1.84-1.84 4.055-2.742 6.041-2.82V31.439h35.929m4.492-4.492H73.913v37.006c-1.715.703-3.323 1.778-4.725 3.18-1.402 1.403-2.478 3.011-3.181 4.726H29v44.912h37.006c.703 1.715 1.779 3.324 3.181 4.726s3.01 2.477 4.725 3.18v37.006h44.912v-37.006c1.715-.703 3.324-1.779 4.726-3.181 1.402-1.401 2.477-3.01 3.18-4.725h37.006V71.86H126.73c-.703-1.715-1.779-3.323-3.181-4.726-1.402-1.402-3.01-2.477-4.725-3.18V31.439l.001-4.492z"
    />
    <path
      fill="#CDCDCD"
      d="M159.246 76.351h-44.913V31.439H78.404v44.912H33.491v35.93h44.913v44.912h35.929v-44.912h44.913z"
    />
    <g fill="#B4A08C">
      <circle cx={96.37} cy={94.32} r={17.965} />
      <ellipse
        cx={76.31}
        cy={114.372}
        rx={7.989}
        ry={5.592}
        transform="rotate(-134.999 76.31 114.373)"
      />
      <ellipse
        cx={116.42}
        cy={114.37}
        rx={7.989}
        ry={5.592}
        transform="rotate(-45.001 116.419 114.371)"
      />
      <ellipse
        cx={116.423}
        cy={74.274}
        rx={7.989}
        ry={5.592}
        transform="rotate(45.001 116.424 74.273)"
      />
      <ellipse
        cx={76.32}
        cy={74.272}
        rx={7.989}
        ry={5.592}
        transform="rotate(134.999 76.321 74.272)"
      />
      <path d="M96.368 118.908c-13.561 0-24.592-11.031-24.592-24.592s11.031-24.592 24.592-24.592 24.592 11.031 24.592 24.592-11.03 24.592-24.592 24.592zm0-46.939c-12.32 0-22.346 10.026-22.346 22.346s10.026 22.346 22.346 22.346 22.346-10.026 22.346-22.346-10.025-22.346-22.346-22.346z" />
    </g>
  </svg>
);

export default SvgMt;
