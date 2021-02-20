import * as React from "react";
import { IIconProps } from "../styled";

const SvgPh = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 512l256-256L0 0z" />
    <path fill="#ff4b55" d="M0 512h512V256H256z" />
    <path fill="#41479b" d="M0 0h512v256H256z" />
    <g fill="#ffe15a">
      <circle cx={91.62} cy={256} r={28.69} />
      <path d="M91.621 256l-10.759-43.034 10.759-14.345 10.758 14.345zm0 0l10.758 43.034-10.758 14.345-10.759-14.345zm0 0l-43.035 10.759L34.241 256l14.345-10.759zm0 0l43.034-10.759L149 256l-14.345 10.759zm0 0l22.822-38.037 17.751-2.536-2.536 17.751zm0 0l-22.823 38.037-17.751 2.536 2.536-17.751zm0 0l-38.038-22.822-2.536-17.751 17.751 2.536zm0 0l38.037 22.822 2.536 17.751-17.751-2.536zM28.365 74.724l1.496 11.16-10.075 5.028c-1.304.651-1.03 2.588.405 2.85l11.076 2.026 1.669 11.136c.216 1.442 2.143 1.779 2.836.496l5.35-9.908 11.106 1.854c1.438.24 2.354-1.488 1.348-2.543l-7.77-8.15 5.195-9.99c.673-1.293-.688-2.699-2.002-2.068l-10.152 4.871-7.896-8.028c-1.022-1.039-2.779-.179-2.586 1.266zm3.755 332.419l-1.89 11.1-11.114 1.806c-1.439.234-1.752 2.165-.461 2.841l9.973 5.227-1.717 11.128c-.222 1.441 1.517 2.335 2.56 1.317l8.053-7.87 10.053 5.072c1.302.657 2.69-.721 2.043-2.028l-4.996-10.091 7.931-7.994c1.027-1.035.145-2.781-1.297-2.57l-11.141 1.633-5.152-10.013c-.667-1.294-2.6-.995-2.845.442zm170.615-167.588l-6.48 9.209-10.81-3.15c-1.4-.408-2.513 1.201-1.638 2.367l6.755 9.009-6.337 9.308c-.82 1.205.365 2.761 1.745 2.29l10.655-3.641 6.894 8.903c.893 1.153 2.739.506 2.717-.952l-.17-11.259 10.598-3.806c1.372-.493 1.327-2.448-.066-2.878l-10.76-3.318-.344-11.255c-.047-1.457-1.92-2.019-2.759-.827z" />
    </g>
  </svg>
);

export default SvgPh;
