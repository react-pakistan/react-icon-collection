import * as React from "react";
import { IIconProps } from "../styled";

const SvgAi = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="#41479B">
      <path d="M0 0h512v512H0z" />
      <path d="M94.316.046H0v19.977l94.316 61.793zM0 68.345v26.017h39.71zM0 161.73v26.017l39.71-26.017zM256 20.023V.046h-94.316v81.77zM256 187.747V161.73h-39.71zM161.684 174.276v81.77H256v-19.977zM256 94.362V68.345l-39.71 26.017zM0 236.069v19.977h94.316v-81.77z" />
    </g>
    <g fill="#F5F5F5">
      <path d="M256 236.069v-19.964l-83.768-54.375h24.748L256 200.041v-12.294l-39.71-26.017H256v-13.474H148.211v107.79h13.473v-81.77zM0 148.256v13.474h39.71L0 187.747v18.901l69.197-44.918h24.748L0 222.712v13.357l94.316-61.793v81.77h13.473v-107.79zM107.789.046H94.316v81.77L0 20.023v21.862l80.842 52.477H56.094L0 57.95v10.395l39.71 26.017H0v13.474h107.789zM256 107.836V94.362h-39.71L256 68.345V49.203l-69.568 45.159h-24.748L256 33.139V20.023l-94.316 61.793V.046h-13.473v107.79z" />
    </g>
    <g fill="#FF4B55">
      <path d="M256 148.256v-40.42H148.211V.046h-40.422v107.79H0v40.42h107.789v107.79h40.422v-107.79z" />
      <path d="M69.197 161.73L0 206.648v16.064l93.945-60.982zM172.232 161.73L256 216.105v-16.064l-59.02-38.311zM80.842 94.362L0 41.885V57.95l56.094 36.412zM186.432 94.362L256 49.203V33.139l-94.316 61.223z" />
    </g>
    <path
      fill="#F5F5F5"
      d="M331.911 289.65c-1.406 18.749-7.225 137.888 68.365 164.82 75.617-26.939 69.775-146.075 68.365-164.82-9.158 3.59-42.312 14.472-68.365-4.072-26.053 18.54-59.201 7.665-68.365 4.072z"
    />
    <g fill="#FFA028">
      <path d="M437.418 313.686c-4.144-3.223-11.818 2.763-20.413 2.148-7.971-.569-17.796-8.642-30.565-5.162-3.528-3.249-1.82-10.8-1.82-10.8-8.866 5.73-9.501 13.576-8.944 17.83-6.322 8.354-5.895 21.1-4.716 24.991 1.535 5.065 4.451 5.679 4.911 11.357.46 5.679 2.609 3.684 2.609 3.684 4.44-2.49 5.085-7.186 6.952-14.873 7.212.921 11.927-5.54 11.927-5.54-4.733 1.485-7.716-1.124-9.343-3.421.254-.759.457-1.459.748-2.258 5.372-14.734 31.076-10.684 33.459-6.6 4.298 7.367 9.976 10.13 9.976 10.13 0-7.68-5.679-14.427-5.679-14.427 8.596-1.533 10.898-7.059 10.898-7.059zm-61.852 31.617a1.535 1.535 0 110-3.07 1.535 1.535 0 010 3.07z" />
      <path d="M412.108 407.969c5.005-1.584 4.43-11.299 9.812-18.028 4.991-6.241 17.213-9.751 21.592-22.241 4.677-1.062 9.926 4.629 9.926 4.629.311-10.552-5.789-15.526-9.609-17.481-3.292-9.945-14.031-16.826-17.904-18.062-5.041-1.61-7.201.443-12.139-2.399-4.938-2.843-4.514.059-4.514.059-.468 5.069 3.033 8.264 8.303 14.162-4.85 5.417-2.204 12.964-2.204 12.964 1.462-4.74 5.303-5.716 8.118-5.753.481.639.942 1.204 1.435 1.897 9.086 12.783-8.833 31.652-13.548 31.297-8.505-.641-14.002 2.468-14.002 2.468 6.324 4.357 15.102 3.509 15.102 3.509-3.612 7.948-.368 12.979-.368 12.979zm9.056-68.872a1.535 1.535 0 112.528 1.742 1.535 1.535 0 01-2.528-1.742z" />
      <path d="M344.442 339.748c-.669 5.207 8.386 8.773 12.225 16.488 3.561 7.154 1.602 19.718 11.09 28.946-1.005 4.689-8.376 7.056-8.376 7.056 9.441 4.723 16.52 1.282 19.901-1.36 10.407 1.198 21.168-5.648 23.919-8.64 3.582-3.896 2.628-6.719 7.285-10.002 4.657-3.283 1.846-4.119 1.846-4.119-4.401-2.558-8.773-.727-16.342 1.573-2.873-6.679-10.833-7.455-10.833-7.455 3.684 3.321 2.954 7.216 1.803 9.785-.782.167-1.489.348-2.325.503-15.419 2.863-24.996-21.333-22.69-25.46 4.16-7.445 3.653-13.74 3.653-13.74-6.614 3.903-9.538 12.223-9.538 12.223-5.69-6.624-11.618-5.798-11.618-5.798zm58.665 37.197a1.535 1.535 0 11-2.644 1.56 1.535 1.535 0 012.644-1.56z" />
    </g>
    <path
      fill="#CDCE0C"
      d="M400.276 458.373l-.604-.209c-85.117-29.609-71.363-169.961-71.214-171.378l.266-2.536 2.326 1.054c.401.183 39.891 17.698 68.122-3.482l1.104-.827 1.104.827c28.272 21.209 67.726 3.662 68.12 3.482l2.327-1.058.266 2.54c.149 1.417 13.903 141.769-71.214 171.378l-.603.209zM331.911 289.65c-1.406 18.749-7.225 137.888 68.365 164.82 75.617-26.939 69.775-146.075 68.365-164.82-9.158 3.59-42.312 14.472-68.365-4.072-26.053 18.54-59.201 7.665-68.365 4.072z"
    />
    <path
      fill="#82AFFF"
      d="M352.868 412.221c10.324 18.723 25.397 34.407 47.408 42.249 22.017-7.844 37.093-23.527 47.418-42.249h-94.826z"
    />
  </svg>
);

export default SvgAi;
