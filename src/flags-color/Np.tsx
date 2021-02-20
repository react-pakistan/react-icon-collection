import * as React from "react";
import { IIconProps } from "../styled";

const SvgNp = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#f5f5f5" d="M0 0h512v512H0z" />
    <path
      fill="#41479b"
      d="M17.516 34.495L296.66 238.484H81.57l26.187 29.209 203.33 226.791H17.516V34.495M0 0v512h350.316L120.799 256h229.517L0 0z"
    />
    <path
      fill="#ff4b55"
      d="M17.516 34.495L296.66 238.484H81.57l26.187 29.208 203.33 226.792H17.516V34.495"
    />
    <path
      d="M102.79 317.661l10.786 22.258 20.47-13.883c.903-.613 2.115.087 2.036 1.176l-1.788 24.669 24.669-1.788c1.089-.079 1.788 1.133 1.176 2.036l-13.883 20.47 22.258 10.786c.982.476.982 1.875 0 2.351l-22.258 10.786 13.883 20.47c.613.903-.087 2.115-1.176 2.036l-24.669-1.788 1.788 24.669c.079 1.089-1.133 1.788-2.036 1.176l-20.47-13.883-10.786 22.258c-.476.982-1.875.982-2.351 0l-10.786-22.258-20.47 13.883c-.903.613-2.115-.087-2.036-1.176l1.788-24.669-24.669 1.788c-1.089.079-1.788-1.133-1.176-2.036l13.883-20.47-22.258-10.786c-.982-.476-.982-1.875 0-2.351l22.258-10.786-13.883-20.47c-.613-.903.087-2.115 1.176-2.036l24.669 1.788-1.788-24.669c-.079-1.089 1.133-1.788 2.036-1.176l20.47 13.883 10.786-22.258c.475-.983 1.875-.983 2.351 0zm28.005-128.726l-9.365-6.397 8.244-8.64-11.748-2.143 4.018-11.244-11.604 2.82-.904-11.906-9.453 7.295-5.669-10.51-5.669 10.51-9.453-7.295-.904 11.906-11.604-2.82 4.018 11.244-11.748 2.143 8.244 8.64-9.365 6.397c-11.815-5.517-22.203-13.576-30.379-23.546 5.492 31.993 33.296 56.366 66.858 56.366s61.367-24.372 66.858-56.366c-8.172 9.97-18.56 18.03-30.375 23.546z"
      fill="#f5f5f5"
    />
  </svg>
);

export default SvgNp;
