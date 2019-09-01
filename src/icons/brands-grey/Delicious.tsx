import * as React from "react";

const SvgDelicious = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path d="M12 12H0v12h12V12zM24 0H12v12h12V0z" />
  </svg>
);

export default SvgDelicious;
