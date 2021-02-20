import * as React from "react";
import { IIconProps } from "../styled";

const SvgGw = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ffe15a" d="M0 0h512v256H0z" />
    <path fill="#73af00" d="M0 256h512v256H0z" />
    <path fill="#ff4b55" d="M0 0h167.72v512H0z" />
    <path
      fill="#464655"
      d="M82.197 211.96l-9.732 29.179-30.758.238c-1.686.013-2.385 2.165-1.029 3.167l24.744 18.272-9.278 29.327c-.509 1.608 1.322 2.938 2.694 1.957l25.024-17.886 25.024 17.886c1.372.981 3.202-.349 2.694-1.957l-9.278-29.327 24.744-18.272c1.357-1.002.657-3.154-1.029-3.167l-30.758-.238-9.732-29.179c-.534-1.6-2.796-1.6-3.33 0z"
    />
  </svg>
);

export default SvgGw;
