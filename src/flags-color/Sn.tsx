import * as React from "react";
import { IIconProps } from "../styled";

const SvgSn = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 0h170.67v512H0z" />
    <path fill="#ffe15a" d="M170.67 0h170.67v512H170.67z" />
    <path fill="#ff4b55" d="M341.33 0H512v512H341.33z" />
    <path
      fill="#73af00"
      d="M258.04 205.779l11.693 35.062 36.959.287c2.067.016 2.924 2.653 1.261 3.881l-29.732 21.956 11.148 35.239c.623 1.97-1.62 3.6-3.301 2.399L256 283.11l-30.069 21.492c-1.681 1.202-3.925-.428-3.301-2.399l11.148-35.239-29.732-21.956c-1.663-1.228-.806-3.865 1.261-3.881l36.959-.287 11.693-35.062c.654-1.959 3.428-1.959 4.081.001z"
    />
  </svg>
);

export default SvgSn;
