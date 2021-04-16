import * as React from "react";
import { IIconProps } from "../styled";

const SvgAo = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v256H0z" />
    <path fill="#464655" d="M0 256h512v256H0z" />
    <g fill="#ffe15a">
      <path d="M225.327 143.5l9.212 27.621 29.116.226c2.256.017 3.191 2.896 1.376 4.236l-23.423 17.297 8.783 27.761c.68 2.151-1.768 3.93-3.604 2.618L223.1 206.327l-23.688 16.931c-1.835 1.312-4.284-.467-3.604-2.618l8.783-27.761-23.423-17.297c-1.815-1.34-.879-4.219 1.376-4.236l29.116-.226 9.212-27.621c.715-2.139 3.741-2.139 4.455.001zM349.85 378.019S183.167 252.274 178.246 248.14c-7.605-6.388-13.473-17.685-13.755-31.439 0 0-17.976 18.414-14.456 37.474 4.07 22.035 16.701 29.895 32.982 40.562 11.442 7.496 102.397 64.861 155.493 98.324l11.34-15.042zm49.87 36.858c-2.173-1.552-19.629-14.454-43.851-32.399l-8.79 15.983c17.783 11.206 29.623 18.662 29.623 18.662s1.684 21.895 19.368 18.246c6.377-1.316 11.509-14.878 3.65-20.492zm-143.929-58.059c-12.6 4.435-26.095 6.971-40.211 6.971-35.779 0-67.836-15.588-90.032-40.234l-19.733 17.759c6.613 7.345 13.675 14.266 21.635 20.174l-3.929 6.805 29.171 16.842 3.862-6.69a147.154 147.154 0 0042.184 11.269v7.759h33.684v-7.759a147.154 147.154 0 0042.184-11.269l3.862 6.69 11.593-6.693a76688.09 76688.09 0 01-34.27-21.624z" />
      <path d="M362.768 225.684a147.139 147.139 0 00-11.269-42.183l6.69-3.863-16.842-29.172-6.805 3.929a148.815 148.815 0 00-30.832-30.831l3.929-6.805-29.171-16.842-3.863 6.69c-10.932-4.755-22.572-8.132-34.683-10.134l-4.427 26.563c57.475 9.519 101.348 59.317 101.348 119.49 0 32.401-12.786 61.762-33.49 83.516l21.297 16.079c3.405-3.727 6.874-7.399 9.892-11.465l6.805 3.929 16.842-29.171-6.69-3.863a147.148 147.148 0 0011.269-42.183h7.759v-33.684h-7.759z" />
    </g>
  </svg>
);

export default SvgAo;