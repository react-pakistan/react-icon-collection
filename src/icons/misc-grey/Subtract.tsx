import * as React from "react";

const SvgSubtract = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 50 50" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25zm-41-.5a9.5 9.5 0 019.5-9.5h13a9.5 9.5 0 010 19h-13A9.5 9.5 0 019 24.5zm4 0a3.5 3.5 0 013.5-3.5h17a3.5 3.5 0 110 7h-17a3.5 3.5 0 01-3.5-3.5z"
    />
  </svg>
);

export default SvgSubtract;
