import * as React from "react";
import { IIconProps } from "../styled";

const SvgMv = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v512H0z" />
    <path fill="#73AF00" d="M404.211 107.789V404.21H107.789V107.789h296.422" />
    <path
      fill="#F5F5F5"
      d="M229.102 256.04c0-51.016 34.75-93.742 81.791-106.117 1.566-.412 1.453-2.677-.153-2.884-4.268-.549-8.608-.864-13.025-.864-60.725 0-109.883 49.15-109.883 109.865 0 60.452 49.158 109.736 109.883 109.736 4.423 0 8.768-.318 13.041-.869 1.605-.207 1.717-2.471.153-2.883-47.049-12.395-81.807-55.182-81.807-105.984z"
    />
  </svg>
);

export default SvgMv;
