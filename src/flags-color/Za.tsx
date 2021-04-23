import * as React from "react";
import { IIconProps } from "../styled";

const SvgZa = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#464655" d="M0 144.651v222.702L140.652 256z" />
    <path fill="#FF4B55" d="M512 175.158V0H77.772l221.25 175.158z" />
    <path fill="#41479B" d="M299.02 336.842L77.765 512H512V336.842z" />
    <path
      fill="#73AF00"
      d="M512 309.895v-107.79H289.646L34.357 0H0v110.282L184.066 256 0 401.722V512h34.349l255.296-202.105z"
    />
    <path
      fill="#F5F5F5"
      d="M512 202.105v-26.947H299.022L77.772 0H34.357l255.289 202.105z"
    />
    <path
      fill="#FFE15A"
      d="M0 110.282v34.369L140.652 256 0 367.353v34.369L184.066 256z"
    />
    <path
      fill="#F5F5F5"
      d="M512 336.842v-26.947H289.645L34.349 512h43.416L299.02 336.842z"
    />
  </svg>
);

export default SvgZa;
