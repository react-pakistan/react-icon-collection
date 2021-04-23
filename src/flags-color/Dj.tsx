import * as React from "react";
import { IIconProps } from "../styled";

const SvgDj = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#82AFFF" d="M0 0h512v256H0z" />
    <path fill="#73AF00" d="M0 256h512v256H0z" />
    <path fill="#F5F5F5" d="M0 512l256-256L0 0z" />
    <path
      fill="#FF4B55"
      d="M60.158 311.88l12.125-41.391-35.237-24.871c-1.932-1.364-1.016-4.401 1.347-4.47l43.112-1.259L94.27 198.69c.7-2.259 3.872-2.327 4.668-.1l14.52 40.613 43.126-.59c2.364-.032 3.409 2.963 1.538 4.408l-34.138 26.359 13.888 40.833c.761 2.239-1.765 4.158-3.718 2.825l-35.618-24.322-34.543 25.827c-1.894 1.415-4.5-.394-3.835-2.663z"
    />
  </svg>
);

export default SvgDj;
