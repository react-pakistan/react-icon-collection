import * as React from "react";
import { IIconProps } from "../styled";

const SvgSy = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v170.09H0z" />
    <path fill="#464655" d="M0 341.91h512V512H0z" />
    <path fill="#f5f5f5" d="M0 170.09h512v171.82H0z" />
    <path
      d="M150.03 223.314l7.36 22.068 23.262.18c3.012.023 4.261 3.867 1.838 5.656l-18.714 13.819 7.017 22.179c.908 2.872-2.361 5.247-4.811 3.496l-18.926-13.527-18.926 13.527c-2.45 1.751-5.72-.624-4.811-3.496l7.017-22.179-18.714-13.819c-2.423-1.789-1.174-5.633 1.838-5.656l23.262-.18 7.36-22.068c.954-2.857 4.995-2.857 5.948 0zm217.887 0l7.36 22.068 23.262.18c3.012.023 4.261 3.867 1.838 5.656l-18.714 13.819 7.017 22.179c.908 2.872-2.361 5.247-4.811 3.496l-18.926-13.527-18.926 13.527c-2.45 1.751-5.72-.624-4.811-3.496l7.017-22.179-18.714-13.819c-2.423-1.789-1.174-5.633 1.838-5.656l23.262-.18 7.36-22.068c.954-2.857 4.995-2.857 5.948 0z"
      fill="#73af00"
    />
  </svg>
);

export default SvgSy;
