import * as React from "react";
import { IIconProps } from "../styled";

const SvgSo = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#82AFFF" d="M0 0h512v512H0z" />
    <path
      fill="#F5F5F5"
      d="M252.133 160.517l-22.606 67.782-71.45.554c-3.917.03-5.541 5.029-2.39 7.356l57.479 42.445-21.553 68.124c-1.182 3.735 3.071 6.824 6.258 4.546L256 309.777l58.13 41.549c3.187 2.278 7.439-.812 6.258-4.546l-21.553-68.124 57.479-42.446c3.151-2.327 1.527-7.326-2.39-7.356l-71.45-.554-22.606-67.782c-1.24-3.717-6.496-3.717-7.735-.001z"
    />
  </svg>
);

export default SvgSo;
