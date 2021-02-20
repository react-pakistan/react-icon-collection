import * as React from "react";
import { IIconProps } from "../styled";

const SvgCu = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 0h512v102.4H0zm0 409.6h512V512H0z" fill="#41479b" />
    <path fill="#f5f5f5" d="M0 102.4h512v102.4H0z" />
    <path fill="#41479b" d="M0 204.8h512v102.4H0z" />
    <path fill="#f5f5f5" d="M0 307.2h512v102.4H0z" />
    <path
      fill="#ff4b55"
      d="M0 512l253.908-250.09c2.789-2.747 2.789-9.074 0-11.821L0 0v512z"
    />
    <path
      fill="#f5f5f5"
      d="M102.751 191.042l13.834 41.479 43.723.339c3.387.026 4.792 4.349 2.067 6.361l-35.174 25.974 13.189 41.688c1.022 3.23-2.655 5.901-5.411 3.932l-35.572-25.426-35.572 25.426c-2.756 1.97-6.433-.702-5.411-3.932l13.189-41.688-35.174-25.974c-2.725-2.012-1.32-6.335 2.067-6.361l43.723-.339 13.834-41.479c1.071-3.214 5.616-3.214 6.688 0z"
    />
  </svg>
);

export default SvgCu;
