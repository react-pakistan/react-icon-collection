import * as React from "react";
import { IIconProps } from "../styled";

const SvgGr = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M0 57.177h512v56.807H0zm0 113.61h512v56.807H0zm0 113.61h512v56.807H0z"
      fill="#f5f5f5"
    />
    <path fill="#41479b" d="M0 341.207h512v56.807H0z" />
    <path fill="#f5f5f5" d="M0 398.017h512v56.807H0z" />
    <path
      d="M0 454.827h512v56.807H0zM512 57.173V.366H0v284.036h512v-56.807H269.087v-56.807H512V113.98H269.087V57.173z"
      fill="#41479b"
    />
    <path
      fill="#f5f5f5"
      d="M269.087 113.98H162.946V.366H106.14V113.98H0v56.808h106.14v113.614h56.806V170.788h106.141z"
    />
  </svg>
);

export default SvgGr;
