import * as React from "react";

const SvgGravatar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path d="M12 0a2.4 2.4 0 00-2.4 2.4v8.4c0 1.324 1.074 2.398 2.4 2.398s2.4-1.074 2.4-2.398V5.21a7.204 7.204 0 014.799 6.789 7.2 7.2 0 11-12.29-5.09 2.4 2.4 0 10-3.396-3.396A11.978 11.978 0 000 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0" />
  </svg>
);

export default SvgGravatar;