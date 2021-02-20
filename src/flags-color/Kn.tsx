import * as React from "react";
import { IIconProps } from "../styled";

const SvgKn = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 0h512v512H0z" />
    <path
      d="M375.086 0L0 375.086v40.27L415.356 0zM512 136.914v-40.27L96.644 512h40.27z"
      fill="#ffe15a"
    />
    <path fill="#464655" d="M512 96.644V0h-96.644L0 415.356V512h96.644z" />
    <path
      d="M161.231 298.781l20.997 10.015 16.273-16.624c2.107-2.152 5.741-.384 5.348 2.602l-3.037 23.064 20.839 10.34c2.698 1.339 2.139 5.341-.822 5.89l-22.874 4.239-3.394 23.014c-.439 2.98-4.419 3.685-5.856 1.038l-11.1-20.444-22.936 3.884c-2.97.503-4.87-3.064-2.797-5.248l16.014-16.874-10.781-20.614c-1.397-2.669 1.408-5.579 4.126-4.282zm146-148l20.997 10.015 16.273-16.624c2.107-2.152 5.741-.384 5.348 2.602l-3.037 23.064 20.839 10.34c2.698 1.339 2.139 5.341-.822 5.89l-22.874 4.239-3.394 23.014c-.439 2.98-4.419 3.685-5.856 1.038l-11.1-20.444-22.936 3.884c-2.97.503-4.87-3.064-2.797-5.248l16.014-16.874-10.781-20.614c-1.397-2.669 1.408-5.579 4.126-4.282z"
      fill="#f5f5f5"
    />
    <path
      fill="#ff4b55"
      d="M512 498.526V136.914L136.914 512h366.259c4.875 0 8.827-6.032 8.827-13.474z"
    />
  </svg>
);

export default SvgKn;
