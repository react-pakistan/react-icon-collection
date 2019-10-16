import * as React from "react";

const SvgZoomOut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 39 39" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.01 14.08h12.06c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H10.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm5.83 13.68c3.32 0 6.32-1.34 8.52-3.49l.01-.01.02-.02c2.24-2.21 3.63-5.27 3.63-8.66 0-6.71-5.46-12.18-12.18-12.18-6.71 0-12.17 5.47-12.17 12.18 0 6.72 5.46 12.18 12.17 12.18zm0-27.36c8.37 0 15.18 6.81 15.18 15.18a15.1 15.1 0 01-3.51 9.69l10.35 10.36c.59.58.59 1.53 0 2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44L25.37 27.38a15.103 15.103 0 01-9.53 3.38C7.47 30.76.67 23.95.67 15.58.67 7.21 7.47.4 15.84.4z"
    />
  </svg>
);

export default SvgZoomOut;