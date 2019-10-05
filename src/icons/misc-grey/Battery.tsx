import * as React from "react";

const SvgBattery = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 45 26" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.354 16.6c0 .27-.229.5-.5.5h-1.75V8.35h1.75c.271 0 .5.23.5.5v7.75zm-5.25 5.25c0 .27-.229.5-.5.5h-31.5c-.271 0-.5-.23-.5-.5V4.35c0-.27.229-.5.5-.5h31.5c.271 0 .5.23.5.5v17.5zm4.75-16.5h-1.75v-1c0-1.93-1.571-3.5-3.5-3.5h-31.5c-1.93 0-3.5 1.57-3.5 3.5v17.5c0 1.93 1.57 3.5 3.5 3.5h31.5c1.929 0 3.5-1.57 3.5-3.5V20.1h1.75c1.929 0 3.5-1.57 3.5-3.5V8.85c0-1.93-1.571-3.5-3.5-3.5z"
    />
  </svg>
);

export default SvgBattery;
