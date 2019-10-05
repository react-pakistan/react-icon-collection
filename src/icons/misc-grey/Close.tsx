import * as React from "react";

const SvgClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 29 28" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.584 13.897L27.836 2.645A1.5 1.5 0 1025.715.524L14.463 11.776 3.211.524A1.5 1.5 0 101.09 2.645l11.252 11.252L1.09 25.149a1.5 1.5 0 102.121 2.121l11.252-11.252L25.715 27.27c.293.293.677.439 1.061.439a1.5 1.5 0 001.06-2.56L16.584 13.897z"
    />
  </svg>
);

export default SvgClose;
