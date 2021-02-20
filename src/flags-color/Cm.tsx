import * as React from "react";
import { IIconProps } from "../styled";

const SvgCm = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#73af00" d="M0 0h170.67v512H0z" />
    <path fill="#ff4b55" d="M170.67 0h170.67v512H170.67z" />
    <path
      d="M341.33 0H512v512H341.33zm-82.897 213.061l10.065 30.178 31.811.247c2.465.019 3.486 3.164 1.504 4.628l-25.591 18.898 9.596 30.331c.743 2.35-1.932 4.294-3.937 2.86L256 281.704l-25.881 18.499c-2.005 1.433-4.681-.511-3.937-2.86l9.596-30.331-25.591-18.898c-1.983-1.464-.961-4.609 1.504-4.628l31.811-.247 10.065-30.178c.779-2.338 4.087-2.338 4.866 0z"
      fill="#ffe15a"
    />
  </svg>
);

export default SvgCm;
