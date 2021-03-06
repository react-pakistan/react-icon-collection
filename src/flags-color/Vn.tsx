import * as React from "react";
import { IIconProps } from "../styled";

const SvgVn = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FF4B55" d="M0 0h512v512H0z" />
    <path
      fill="#FFE15A"
      d="M260.565 146.63l26.164 78.449 82.695.641c4.624.036 6.541 5.937 2.822 8.684l-66.525 49.125 24.944 78.845c1.395 4.409-3.625 8.056-7.387 5.367L256 319.654l-67.278 48.088c-3.762 2.689-8.782-.958-7.387-5.367l24.944-78.845-66.525-49.125c-3.72-2.747-1.802-8.648 2.822-8.684l82.695-.641 26.164-78.449c1.463-4.388 7.667-4.388 9.13-.001z"
    />
  </svg>
);

export default SvgVn;
