import * as React from "react";
import { IIconProps } from "../styled";

const SvgKg = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v512H0z" />
    <g fill="#ffe15a">
      <path d="M398.517 296.184s-26.842-4.475-46.725-20.963c-5.866-4.864-14.378-8.582-22.67-11.328 6.667-.296 13.735-.11 20.416 1.241 27.675 5.596 54.509-7.838 54.509-7.838s-27.075 2.732-50.59-7.957c-6.359-2.891-14.609-4.253-22.659-4.827 5.79-1.666 11.936-2.969 18.002-3.305 28.192-1.563 50.772-21.327 50.772-21.327s-25.511 9.469-50.962 5.053c-7.412-1.286-16.51-.323-24.977 1.378 5.57-3.497 11.701-6.767 18.065-8.873 26.806-8.869 43.443-33.844 43.443-33.844s-22.153 15.801-47.874 18.184c-7.638.708-16.337 4.136-24.185 8.085 4.529-4.965 9.697-9.879 15.422-13.678 23.526-15.612 33.002-44.086 33.002-44.086s-17.213 21.076-41.399 30.146c-6.593 2.472-13.427 7.424-19.563 12.76 2.933-5.333 6.382-10.669 10.477-15.249 18.818-21.05 20.792-50.994 20.792-50.994s-11.33 24.741-32.44 39.627c-6.154 4.34-11.906 11.467-16.689 18.666 1.462-6.42 3.482-13.078 6.493-19.076 12.667-25.234 6.751-54.654 6.751-54.654s-4.475 26.841-20.963 46.724c-4.864 5.866-8.582 14.378-11.328 22.67-.296-6.667-.11-13.735 1.241-20.417 5.596-27.675-7.838-54.509-7.838-54.509s2.731 27.075-7.957 50.59c-2.891 6.359-4.253 14.609-4.827 22.659-1.666-5.79-2.969-11.936-3.305-18.002-1.562-28.192-21.327-50.772-21.327-50.772s9.469 25.511 5.054 50.962c-1.286 7.412-.323 16.511 1.378 24.978-3.497-5.57-6.767-11.701-8.873-18.066-8.869-26.806-33.844-43.443-33.844-43.443s15.801 22.154 18.184 47.874c.708 7.638 4.136 16.338 8.085 24.187-4.965-4.529-9.879-9.698-13.679-15.424-15.612-23.526-44.086-33.001-44.086-33.001s21.076 17.213 30.146 41.399c2.472 6.593 7.424 13.428 12.76 19.563-5.332-2.933-10.668-6.382-15.248-10.477-21.05-18.818-50.994-20.792-50.994-20.792s24.741 11.33 39.627 32.439c4.339 6.153 11.465 11.906 18.664 16.689-6.419-1.462-13.076-3.482-19.073-6.492-25.234-12.666-54.655-6.751-54.655-6.751s26.842 4.475 46.724 20.963c5.866 4.864 14.378 8.582 22.671 11.328-6.667.296-13.735.11-20.416-1.241-27.675-5.596-54.509 7.838-54.509 7.838s27.075-2.731 50.59 7.957c6.359 2.891 14.609 4.253 22.659 4.827-5.79 1.666-11.936 2.969-18.002 3.305-28.192 1.562-50.772 21.327-50.772 21.327s25.511-9.469 50.962-5.054c7.412 1.286 16.511.323 24.978-1.378-5.57 3.497-11.701 6.767-18.066 8.873-26.806 8.869-43.443 33.844-43.443 33.844s22.153-15.801 47.874-18.185c7.638-.708 16.338-4.136 24.187-8.085-4.529 4.965-9.698 9.879-15.424 13.679-23.526 15.613-33.002 44.086-33.002 44.086s17.213-21.076 41.399-30.146c6.593-2.472 13.427-7.424 19.563-12.76-2.932 5.332-6.382 10.667-10.477 15.247-18.818 21.05-20.792 50.994-20.792 50.994s11.33-24.741 32.44-39.627c6.154-4.34 11.905-11.466 16.689-18.665-1.462 6.42-3.481 13.077-6.492 19.076-12.667 25.234-6.751 54.654-6.751 54.654s4.475-26.842 20.963-46.724c4.864-5.866 8.582-14.378 11.328-22.671.296 6.667.11 13.736-1.241 20.417-5.596 27.675 7.838 54.508 7.838 54.508s-2.731-27.074 7.957-50.589c2.891-6.359 4.253-14.61 4.827-22.66 1.666 5.79 2.969 11.936 3.305 18.002 1.562 28.192 21.327 50.772 21.327 50.772s-9.469-25.512-5.053-50.962c1.286-7.412.323-16.51-1.378-24.977 3.497 5.571 6.767 11.701 8.873 18.065 8.869 26.805 33.844 43.443 33.844 43.443s-15.801-22.154-18.184-47.875c-.708-7.638-4.136-16.338-8.085-24.187 4.965 4.529 9.879 9.698 13.679 15.424 15.612 23.526 44.086 33.002 44.086 33.002s-21.076-17.213-30.146-41.399c-2.472-6.593-7.424-13.427-12.759-19.563 5.332 2.932 10.667 6.381 15.247 10.476 21.05 18.818 50.994 20.792 50.994 20.792s-24.741-11.33-39.627-32.439c-4.34-6.154-11.466-11.907-18.666-16.689 6.419 1.462 13.077 3.481 19.076 6.492 25.231 12.671 54.652 6.756 54.652 6.756zm-142.549 28.232c-37.781 0-68.408-30.627-68.408-68.408s30.627-68.408 68.408-68.408 68.408 30.627 68.408 68.408-30.627 68.408-68.408 68.408z" />
      <path d="M234.279 228.323c1.458-1.139 2.91-2.283 4.387-3.298-9.692-4.408-18.416-6.524-24.537-7.472-.974 1.059-1.853 2.197-2.745 3.327 6.007 1.166 14.082 3.394 22.895 7.443zm-17.209-13.79c6.577.743 16.097 2.702 26.66 7.245 1.77-1.055 3.532-1.99 5.297-2.892-11.405-4.683-21.703-6.428-28.79-6.966-1.064.863-2.168 1.676-3.167 2.613zm34.249 31.708a83.097 83.097 0 00-4.14-3.66c-12.807 12.189-24.012 29.965-29.07 55.759 1.839 1.646 3.664 3.31 5.706 4.708 3.716-26.233 14.609-44.339 27.504-56.807zm-4.968-11.33c1.452-1.167 2.902-2.34 4.372-3.383-1.792-1.144-3.577-2.147-5.357-3.127-1.524 1.045-3.052 2.055-4.558 3.229a97.61 97.61 0 015.543 3.281zm35.392-3.303c10.981 9.645 21.016 23.224 28.159 42.055 1.832-5.592 3.073-11.453 3.073-17.656a56.733 56.733 0 00-9.697-31.802c-5.664 1.129-13.267 3.328-21.535 7.403zm-30.013 6.967c1.43 1.063 2.832 2.262 4.238 3.443 1.407-1.181 2.808-2.38 4.238-3.443-1.408-1.172-2.811-2.325-4.238-3.378-1.427 1.053-2.83 2.207-4.238 3.378zm4.238-16.507c-1.79.907-3.583 1.932-5.383 2.997a94.094 94.094 0 015.383 3.058 94.7 94.7 0 015.383-3.058c-1.8-1.065-3.593-2.09-5.383-2.997zm-44.073 69.688c6.031-24.626 17.399-41.499 30.12-53.104a85.913 85.913 0 00-5.326-3.475c-12.242 10.765-23.322 26.322-30.146 48.735a56.636 56.636 0 005.352 7.844zm18.297-60.148c-8.268-4.075-15.87-6.274-21.534-7.403a56.733 56.733 0 00-9.697 31.802c0 6.203 1.24 12.064 3.073 17.656 7.142-18.83 17.177-32.41 28.158-42.055zm25.776-15.937c12.128-5.011 23.316-6.79 31.273-7.26-8.986-5.916-19.711-9.41-31.273-9.41s-22.287 3.494-31.273 9.41c7.957.47 19.145 2.249 31.273 7.26zm0 35.392c-11.371 12.6-20.754 30.69-23.798 56.598 7.263 3.354 15.273 5.353 23.798 5.353s16.536-1.999 23.798-5.353c-3.044-25.908-12.427-43.999-23.798-56.598zm19.279-15.886a86.535 86.535 0 00-5.326 3.475c12.722 11.605 24.089 28.478 30.12 53.104a56.586 56.586 0 005.352-7.845c-6.824-22.413-17.904-37.969-30.146-48.734zm18.58 63.162c-5.058-25.794-16.263-43.57-29.07-55.759a84.126 84.126 0 00-4.14 3.66c12.895 12.469 23.788 30.575 27.504 56.807 2.042-1.398 3.867-3.062 5.706-4.708zm-30.918-79.453c1.765.902 3.527 1.837 5.297 2.892 10.563-4.544 20.084-6.502 26.66-7.245-.999-.937-2.103-1.75-3.167-2.613-7.087.538-17.385 2.283-28.79 6.966zm2.676 16.025a96.996 96.996 0 015.543-3.28c-1.506-1.174-3.034-2.184-4.558-3.229-1.78.98-3.565 1.983-5.357 3.127 1.47 1.042 2.92 2.215 4.372 3.382zm12.072-6.588c8.812-4.048 16.887-6.277 22.895-7.443-.892-1.131-1.771-2.269-2.745-3.327-6.121.948-14.844 3.064-24.537 7.472 1.477 1.015 2.929 2.159 4.387 3.298z" />
    </g>
  </svg>
);

export default SvgKg;