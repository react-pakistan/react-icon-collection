import * as React from "react";
import { IIconProps } from "../styled";

const SvgAs = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479B" d="M0 0h512v512H0z" />
    <path
      fill="#FF4B55"
      d="M512 483.643L56.713 256 512 28.357V0L0 256l512 256z"
    />
    <path fill="#F5F5F5" d="M56.713 256L512 483.643V28.357z" />
    <path
      fill="#FFF5DC"
      d="M450.583 211.231s31.476 1.334 34.41-1.067 3.468-18.406-6.935-20.806c-10.403-2.401-38.678 13.071-38.678 13.071l11.203 8.802z"
    />
    <g fill="#D27D69">
      <path d="M388.964 236.039s-.356.889-.534 4.801c-.178 3.912.534 14.049 12.804 18.495l-2.845 11.915 12.982 7.825s9.603-14.227 10.136-26.141c.534-11.916-32.543-16.895-32.543-16.895zm-38.945-8.003l5.068-5.068s-10.375 6.33-14.315.622c-5.157-7.469 1.778-15.294 8.98-18.761 7.202-3.468 21.607-.8 21.607-.8l9.069 23.207-27.475 17.339-2.934-16.539zm85.093-44.28l24.541-2.934s-7.202 10.403-21.34 18.139c0 0 14.671 0 18.939 5.068s-4.268 9.87-7.469 11.47-30.943 18.672-30.943 18.672l-24.808-2.934 41.08-47.481z" />
      <path d="M453.339 164.906s5.335-12.448 5.157-21.162l-17.961 12.448s4.09-1.956 2.667-9.069l-58.684 31.832-11.915 21.162 36.278 11.203 44.458-46.414z" />
    </g>
    <path
      fill="#FFE15A"
      d="M409.104 261.913l-6.135 9.736s-10.937-2.401-14.671.267-4.135 12.671 2.401 13.471c0 0 4.535 2.801 7.202.534 0 0 5.468 2.134 6.402-1.334s-.267-6.402-.267-6.402h3.868l6.802-12.137-5.602-4.135z"
    />
    <path
      fill="#B95546"
      d="M354.287 240.84s17.072-8.536 17.072-21.34-15.827-13.515-28.631-9.247c0 0-7.647-6.046-1.245-12.093 8.776-8.289 46.948-25.608 46.948-25.608l-4.268 21.34s15.205 8.002 21.34 4.268c5.156-3.138 55.483-42.68 55.483-42.68s-4.268 21.34-34.144 42.68l-3.166 15.828a11.49 11.49 0 01-6.129 8.025l-12.045 6.022s34.144 4.268 34.144 8.536-8.536 25.608-25.608 34.144l-8.536-8.536 4.268-12.804s-12.804-4.268-21.34-8.536c0 0-12.804 4.268-21.34 4.268s-12.803-4.267-12.803-4.267z"
    />
    <path
      fill="#FFF5DC"
      d="M328.679 262.18v-8.868a9.502 9.502 0 012.783-6.719l18.557-18.557 4.268 8.536h17.072l-4.268 4.268v4.268l-21.34 12.804-17.072 4.268z"
    />
    <g fill="#FFE15A">
      <path d="M337.215 257.912h-8.536s-8.536 12.804 0 12.804c0 0 12.804-8.536 17.072-12.804 0 0 0-4.268-8.536 0zm104.108 18.932h-59.002a2.633 2.633 0 00-1.938-.862s-10.335-4.283-11.805-4.283h-1.211a2.66 2.66 0 00-2.661 2.661v2.484h-13.488v-2.484a2.66 2.66 0 00-2.661-2.661h-1.211a2.66 2.66 0 00-2.661 2.661v.045c-5.781-.236-18.14-.972-24.541-3.106L286 279.835l34.144 8.536c6.401-2.134 18.76-2.871 24.541-3.107v.045a2.661 2.661 0 002.661 2.661h1.211a2.661 2.661 0 002.661-2.661v-2.484h13.488v2.484a2.662 2.662 0 002.661 2.661h1.211c1.47 0 11.805-4.283 11.805-4.283a2.63 2.63 0 001.937-.862h59.002a2.99 2.99 0 00.001-5.981z" />
      <path d="M438.757 288.321c-3.557-.712-44.28 6.402-44.28 6.402s-2.49-2.49 4.979-9.425l-3.557-.889s-7.824 5.513-11.025 6.224c-2.757.613-8.915 3.606-10.238 7.604l-24.795 4.133.533 2.134 24.321-2.85c1.161 3.737 4.983 4.498 7.689 3.384 0 0 3.557 1.423 6.758-1.067 0 0 6.402 1.067 6.758-4.801l44.636-6.758c-.001-.001 1.778-3.379-1.779-4.091z" />
      <path d="M413.505 318.375s-3.379 4.446-11.737.533-18.139.356-23.474-.889-13.337-4.446-20.806-1.6c-7.469 2.845-11.559 2.667-9.959-.889 1.6-3.557 2.49-6.224 0-7.469l2.845-3.557-.533-2.134s-14.226-5.513-23.829 2.134-6.758 25.074 9.247 26.319c0 0 4.979 6.224 17.25 4.446 0 0 8.002 5.513 21.695 3.023 0 0 .533 1.6 9.425.889s18.85.356 17.072 6.402c0 0 6.58-1.245 2.667-7.291 0 0 7.825-.356 13.16 4.268 0 0 .356-5.335-4.801-8.18 0 0 8.714-3.023 13.515 0 0 0-3.201-6.758-11.737-5.868 0 0 6.224-4.979 9.069-3.734 0 0-2.667-3.201-10.492 0 0-.001 4.98-3.024 1.423-6.403z" />
    </g>
  </svg>
);

export default SvgAs;
