import * as React from "react";
import { IIconProps } from "../styled";

const SvgIm = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#ff4b55" d="M0 0h512v512H0z" />
    <path
      d="M257.931 256.581l-3.733 2.156c-6.466-9.311-6.112-32.083-6.112-32.342.068-.676-.338-1.283-.945-1.553L219.167 212.6l.16-2.872c14.588 1.683 31.45 8.468 31.684 8.585.574.362 1.298.272 1.812-.152l23.212-19.353 4.995 4.465c-7.238 8.89-24.847 21.169-25.074 21.295-.623.269-.958.918-.899 1.581l2.874 30.432zm101.5-137.887a1.688 1.688 0 001.771-.146l6.065-4.49-1.927 5.599a1.715 1.715 0 00.472 1.808l2.856 2.552c-.848 1.432-1.184 3.196-1.217 5.036l-4.233 2.149a1.706 1.706 0 00-.797.861l-3.157 7.643-1.73-6.337a1.67 1.67 0 00-1.855-1.229l-7.617 1.041 6.182-7.003c.331-.376.476-.875.403-1.366l-1.377-9.248 6.161 3.13zm-68.994 249.557a1.688 1.688 0 00-.732 1.619l.983 7.482-3.96-4.402a1.716 1.716 0 00-1.81-.465l-3.618 1.258c-.841-1.437-2.22-2.586-3.812-3.508l.176-4.744a1.703 1.703 0 00-.366-1.114l-5.15-6.469 6.38 1.563a1.671 1.671 0 001.975-1.025l2.786-7.165 3.123 8.804c.168.472.534.841.999 1.016l8.754 3.284-5.728 3.866zM105.182 192.808a1.685 1.685 0 00-1.121-1.378l-7.132-2.464 5.708-1.576a1.717 1.717 0 001.225-1.412l.491-3.799c1.661-.11 3.306-.831 4.842-1.842l4.165 2.277c.354.192.765.253 1.161.171l8.089-1.717-4.249 5.009a1.671 1.671 0 00.035 2.225l5.165 5.694-9.271-1.141a1.69 1.69 0 00-1.355.44l-6.85 6.364-.903-6.851z"
      fill="#ffe15a"
    />
    <path
      d="M253.556 421.823c-4.119 8.306-13.033 15.194-15.261 15.599-.405.068-.743-.068-1.08-.405-1.013-1.148-1.486-4.254-.135-8.374.135-.405.27-.945.473-1.553l16.003-5.267zm2.971-8.576a94.867 94.867 0 00-1.351 4.457l-16.477 5.47a112.53 112.53 0 001.418-4.862l16.41-5.065z"
      fill="#f5f5f5"
    />
    <path
      fill="#ffe15a"
      d="M260.174 403.995a151.896 151.896 0 00-2.228 5.267l-16.747 5.132c.473-1.823 1.013-3.714 1.486-5.605l17.489-4.794z"
    />
    <g fill="#f5f5f5">
      <path d="M263.483 397.31a99.59 99.59 0 00-1.418 2.701l-18.435 4.997c.81-3.174 1.485-6.28 2.026-8.981l17.827 1.283zm5.199-7.023c-1.08 1.013-2.093 2.296-3.106 3.782l-19.381-1.418c.27-1.756.472-3.309.472-4.457 0-.878-.067-1.688-.135-2.566.743.068 1.553.068 2.228.068 4.862 0 8.306-.878 10.805-2.161 2.77 4.051 6.349 5.874 9.117 6.752zm3.917-2.769c-1.215-.135-6.618-.675-10.264-5.943 1.823-1.553 2.701-3.241 3.106-4.39 2.026-5.672-12.087-14.518-20.731-19.245-4.052-2.229-7.226-6.618-10.062-11.682.338.068.608.068.945.068 4.322 0 7.766-2.026 9.589-3.579 1.621 2.701 3.106 5.2 4.457 7.361 6.145 10.399 8.981 15.126 15.532 19.718.202.135.472.27.743.27 3.174.405 12.358 2.431 12.898 6.483.743 5.537-1.283 9.048-6.213 10.939z" />
      <path d="M262.267 376.038c-.743 2.161-3.849 7.023-16.139 6.212-1.081-7.023-4.187-12.02-9.117-14.316-6.415-3.038-30.388-20.191-41.327-30.388 2.161-6.888 7.834-12.493 15.869-15.464 1.148-.473 2.161-.878 3.038-1.351 2.161 1.756 4.12 3.714 5.74 5.943 2.499 3.512 4.659 7.968 6.955 12.695 4.254 8.644 8.644 17.625 15.802 21.542 13.237 7.294 19.787 13.574 19.179 15.127z" />
      <path d="M243.359 339.843c-1.283 1.283-5.537 4.187-10.669 2.701-.811-1.553-1.553-3.106-2.364-4.659-2.363-4.862-4.592-9.454-7.293-13.168-1.553-2.229-3.511-4.187-5.605-5.943 3.039-2.634 3.511-5.47 3.646-7.901 5.335 4.592 10.332 10.332 14.924 17.422 2.904 4.39 5.268 8.172 7.361 11.548zm-25.458-31.468c-.068.54-.135 1.148-.135 1.756-.135 2.296-.338 4.525-3.039 6.55-5.672-4.052-12.223-6.82-17.828-8.644 2.566-2.634 4.254-5.267 5.065-7.833h.068c5.537 1.553 10.872 4.322 15.869 8.171zm-6.483 10.062c-.338.135-.608.338-1.013.472-8.441 3.106-14.654 8.847-17.422 15.937-3.309-3.309-5.673-6.28-7.563-8.644-2.093-2.701-3.849-4.794-6.01-6.28 6.077-3.106 10.94-6.212 14.654-9.251h.135c5.267 1.621 11.682 4.051 17.219 7.766zm-20.528-9.589c-3.512 2.769-8.441 5.875-15.397 9.251a99.853 99.853 0 00-4.592-1.013c-3.309-.608-5.47-1.081-7.158-2.971-1.013-1.081-2.971-4.119-4.862-7.968.27.135.54.27.811.338 1.958.473 4.727-.405 8.171-1.621 4.254-1.418 9.454-3.174 14.181-2.566 4.254.54 5.402 2.229 6.753 4.119.607.81 1.215 1.688 2.093 2.431z" />
    </g>
    <path
      fill="#ffe15a"
      d="M198.926 298.718c-.54 2.093-2.026 4.727-5.403 7.901-.81-.54-1.35-1.283-1.958-2.161-1.485-2.093-3.376-4.727-9.049-5.47-5.47-.743-11.142 1.148-15.734 2.701-2.566.878-5.267 1.823-6.348 1.553-1.148-.27-2.634-2.093-2.701-3.917-.068-2.093 1.823-3.039 3.376-3.512 3.512-1.08 7.766-.27 11.953.473 4.254.81 8.306 1.553 11.547.27 2.229-.878 4.795-3.646 7.901-7.63 2.161.472 3.984 1.215 5.065 2.768 1.553 2.23 1.958 4.593 1.351 7.024z"
    />
    <path
      d="M188.594 288.454c-2.093 2.566-3.917 4.457-5.267 4.997-2.296.945-5.875.27-9.657-.473-4.322-.81-9.251-1.688-13.506-.405-2.566.743-3.984 2.026-4.794 3.241-.743-3.714-.743-7.293.946-10.129 1.688-2.971 3.916-5.47 6.212-7.968 3.039.405 5.267 1.013 12.965 7.766 2.634 2.296 6.888 2.566 11.007 2.768.675.068 1.419.136 2.094.203zm62.733-27.889c-7.563 4.997-41.26 27.146-48.283 30.05-.338.135-.608.405-.81.675-.203.338-.338.608-.54.945-.338-.878-.81-1.688-1.351-2.499-1.351-1.959-3.376-3.039-5.605-3.714a128.98 128.98 0 003.106-4.119c4.862-6.685 10.467-14.181 16.882-20.866 11.007-11.48 25.728-19.043 30.658-21.339.744 7.158 2.365 15.6 5.943 20.867zm-6.28-24.445c-3.511 1.553-20.191 9.454-32.751 22.554-6.618 6.888-12.493 14.789-17.152 21.204-1.418 1.891-2.769 3.714-4.052 5.402-1.485-.135-2.971-.27-4.389-.338-3.714-.27-7.226-.473-8.981-2.026-6.483-5.673-9.522-7.361-12.425-8.103.27-.27.473-.54.743-.81 4.254-4.322 8.711-8.846 12.223-15.126 6.077-10.872 26.403-34.575 39.639-43.151l26.809 11.75c-.001 1.62.066 4.794.336 8.644zM73.738 135.874c-5.59-7.397-7.768-18.449-7.135-20.624.121-.393.392-.634.845-.785 1.48-.393 4.47.572 7.552 3.621.302.302.725.664 1.178 1.117l-2.44 16.671zm6.345 6.491a93.645 93.645 0 00-3.383-3.2l2.47-17.185a111.793 111.793 0 003.716 3.441l-2.803 16.944z"
      fill="#f5f5f5"
    />
    <path
      fill="#ffe15a"
      d="M86.729 149.761a151.568 151.568 0 00-3.716-4.347l2.893-17.276c1.42 1.238 2.87 2.566 4.35 3.834l-3.527 17.789z"
    />
    <g fill="#f5f5f5">
      <path d="M91.231 155.709c-.574-.815-1.148-1.63-1.782-2.476l3.768-18.725a177.54 177.54 0 007.129 5.826l-9.115 15.375zm3.959 7.79c-.424-1.419-1.119-2.899-1.995-4.469l9.929-16.704c1.45 1.026 2.749 1.901 3.776 2.414.785.392 1.54.694 2.356 1.026-.392.634-.754 1.359-1.056 1.963-2.173 4.35-2.927 7.823-2.895 10.632-4.862.666-8.092 3.053-10.115 5.138zm.727 4.741c.664-1.027 3.561-5.618 9.903-6.527.574 2.325 1.692 3.865 2.539 4.741 4.169 4.347 18.39-4.325 26.481-9.946 3.804-2.629 9.149-3.507 14.947-3.781-.211.272-.332.513-.483.816-1.931 3.866-1.658 7.852-1.083 10.178-3.141.243-6.04.455-8.577.698-12.049.85-17.546 1.275-24.581 5.083-.211.121-.453.302-.573.544-1.781 2.658-7.697 9.969-11.563 8.641-5.286-1.811-7.521-5.192-7.01-10.447z" />
      <path d="M110.804 164.127c-1.601-1.63-4.563-6.581 1.654-17.214 6.766 2.172 12.624 1.626 16.881-1.758 5.585-4.381 31.642-18.162 45.653-23.392 5.196 5.011 7.675 12.59 6.742 21.107-.09 1.238-.18 2.326-.15 3.322-2.536 1.149-5.163 2.026-7.881 2.48-4.258.666-9.211.607-14.465.549-9.634-.057-19.63-.143-26.332 4.51-12.439 8.581-20.984 11.634-22.102 10.396z" />
      <path d="M151.633 163.387c-.574-1.721-1.271-6.825 2.352-10.752 1.752-.031 3.473-.002 5.224-.033 5.406.059 10.51.117 15.039-.64 2.688-.393 5.315-1.27 7.821-2.358.998 3.895 3.324 5.585 5.438 6.793-6.492 2.72-13.86 4.626-22.255 5.565-5.224.637-9.663 1.061-13.619 1.425zm39.529-8.712a14.354 14.354 0 00-1.51-.906c-1.994-1.147-3.897-2.324-4.502-5.646 6.16-3.264 11.564-7.886 15.699-12.086 1.209 3.473 2.811 6.16 4.744 8.031l-.03.06c-3.864 4.261-8.725 7.796-14.401 10.547zm-6.105-10.296c.03-.362-.03-.695.03-1.117.993-8.94-1.366-17.062-6.472-22.708 4.439-1.482 8.153-2.268 11.113-2.903 3.352-.666 6.009-1.301 8.304-2.57.063 6.825.669 12.563 1.728 17.243l-.06.121c-3.804 3.987-8.846 8.64-14.643 11.934zm17.752-14.08c-.908-4.379-1.484-10.177-1.396-17.908a99.9 99.9 0 002.958-3.655c2.022-2.688 3.411-4.41 5.857-5.076 1.419-.423 5.013-.817 9.301-.789-.241.182-.483.363-.664.574-1.298 1.541-1.75 4.41-2.201 8.034-.632 4.44-1.385 9.876-4.042 13.833-2.384 3.564-4.408 3.837-6.703 4.2-.996.182-2.053.334-3.11.787z" />
    </g>
    <path
      fill="#ffe15a"
      d="M208.28 142.015c-1.631-1.419-3.323-3.925-4.654-8.364.845-.483 1.751-.635 2.808-.786 2.537-.393 5.738-.908 8.937-5.651 3.109-4.561 3.952-10.48 4.615-15.282.361-2.688.723-5.527 1.447-6.373.755-.906 3.05-1.421 4.711-.666 1.903.875 1.904 2.989 1.633 4.59-.603 3.624-3.229 7.068-5.764 10.482-2.626 3.444-5.101 6.736-5.402 10.209-.211 2.386 1.119 5.919 3.295 10.478-1.388 1.722-2.868 3.021-4.74 3.294-2.688.392-4.983-.301-6.886-1.931z"
    />
    <g fill="#f5f5f5">
      <path d="M222.079 137.359c-1.36-3.019-2.237-5.496-2.117-6.945.18-2.477 2.384-5.377 4.738-8.428 2.656-3.504 5.644-7.522 6.398-11.901.482-2.628-.032-4.469-.757-5.737 3.654.995 6.856 2.595 8.639 5.372 1.904 2.838 3.143 5.948 4.352 9.119-1.72 2.537-3.26 4.259-12.741 8.128-3.231 1.33-5.374 5.015-7.396 8.61-.361.573-.754 1.208-1.116 1.782zm-3.084 68.584c-1.091-8.999-5.847-49.042-5.306-56.622.03-.362-.091-.725-.242-1.027-.211-.332-.393-.573-.604-.906.936.09 1.872.03 2.839-.092 2.356-.333 4.227-1.663 5.828-3.354.695 1.48 1.45 2.989 2.297 4.62 3.808 7.337 8.009 15.701 11.122 24.427 5.351 14.977 5.538 31.526 5.39 36.962-6.617-1.452-14.278-3.09-21.324-4.008z" />
      <path d="M243.67 211.249c.18-3.835.566-22.287-5.541-39.378-3.205-8.998-7.647-17.785-11.304-24.82-1.058-2.114-2.085-4.137-3.022-6.039.785-1.268 1.569-2.537 2.263-3.776 1.901-3.202 3.652-6.253 5.826-7.129 7.972-3.265 10.84-5.229 12.802-7.494.121.363.272.664.393 1.027 1.965 5.737 4.021 11.746 8.07 17.694 7.011 10.295 19.131 39.071 20.889 54.744l-22.492 18.732c-1.451-.725-4.32-2.083-7.884-3.561zm180.5-86.308c9.261-.429 19.61 4.021 21.046 5.773.256.321.301.682.17 1.141-.512 1.443-2.999 3.364-7.256 4.182-.42.078-.958.222-1.587.34l-12.373-11.436zm-8.94 1.564a93.458 93.458 0 004.552-.982l12.779 11.752c-1.528.308-3.175.681-4.939 1.12l-12.392-11.89z" />
    </g>
    <path
      fill="#ffe15a"
      d="M405.371 127.807c1.988-.176 3.883-.379 5.686-.608l12.615 12.152c-1.823.471-3.739.917-5.621 1.421l-12.68-12.965z"
    />
    <g fill="#f5f5f5">
      <path d="M397.92 128.158c.997-.013 1.994-.025 3.05-.071l13.316 13.693a177.852 177.852 0 00-8.836 2.587l-7.53-16.209zm-8.664-1.138c1.41.453 3.024.716 4.814.88l8.166 17.633c-1.666.616-3.122 1.193-4.126 1.75-.768.426-1.443.878-2.178 1.363-.301-.682-.695-1.391-1.022-1.981-2.36-4.251-4.799-6.836-7.133-8.398 2.198-4.386 2.055-8.4 1.479-11.247zm-4.322-2.081c.472 1.128 2.621 6.114-.214 11.859-2.243-.841-4.145-.789-5.346-.586-5.943.982-6.828 17.615-6.766 27.466.018 4.624-2.279 9.529-5.331 14.467-.105-.328-.236-.564-.4-.859-2.097-3.778-5.54-5.806-7.783-6.647 1.575-2.728 3.039-5.24 4.273-7.469 6.11-10.42 8.867-15.194 9.702-23.15.02-.243.007-.544-.124-.78-1.186-2.971-3.872-11.985-.591-14.423 4.481-3.338 8.535-3.27 12.58.122z" />
      <path d="M379.911 139.544c2.25-.399 8.008-.043 13.264 11.096-5.616 4.353-8.477 9.494-8.093 14.919.457 7.083-2.906 36.368-6.512 50.882-7.071 1.453-14.725-.786-21.222-6.37-.97-.774-1.816-1.463-2.656-2.001.486-2.742 1.248-5.404 2.41-7.903 1.858-3.889 4.706-7.941 7.725-12.243 5.493-7.915 11.215-16.111 11.166-24.271-.047-15.112 2.265-23.886 3.918-24.109z" />
      <path d="M357.441 173.642c1.745.499 6.348 2.81 7.539 8.018-.964 1.463-1.962 2.866-2.926 4.328-3.104 4.426-6.038 8.603-7.974 12.767-1.195 2.439-1.957 5.102-2.476 7.784-3.778-1.379-6.486-.415-8.678.646 1.426-6.893 4.019-14.048 7.99-21.504 2.429-4.668 4.589-8.57 6.525-12.039zm-15.159 37.531c.505-.203 1.07-.439 1.601-.734 2.073-.996 4.12-1.901 7.202-.522-.79 6.926-.031 13.997 1.094 19.782-3.548-.965-6.67-1.164-9.307-.627l-.033-.059c-1.329-5.594-1.497-11.602-.557-17.84zm11.944.785c.282.23.59.368.905.657 6.813 5.873 14.847 8.519 22.39 7.498-1.287 4.499-2.738 8.008-3.887 10.808-1.346 3.141-2.324 5.692-2.574 8.303-5.666-3.806-10.741-6.55-15.2-8.322l-.066-.118c-1.14-5.393-2.128-12.181-1.568-18.826zm1.579 22.603c4.125 1.727 9.233 4.529 15.561 8.972a99.647 99.647 0 001.343 4.506c1.074 3.188 1.71 5.307.876 7.701-.453 1.41-2.16 4.597-4.607 8.118-.013-.302-.026-.603-.098-.873-.537-1.942-2.648-3.936-5.382-6.357-3.305-3.031-7.363-6.726-9.126-11.154-1.592-3.982-.673-5.805.324-7.903.413-.924.885-1.882 1.109-3.01z" />
    </g>
    <path
      fill="#ffe15a"
      d="M343.048 232.451c2.093-.544 5.116-.523 9.53.889-.079.971-.467 1.803-.939 2.761-1.109 2.315-2.494 5.246-.391 10.566 2.005 5.143 6.411 9.185 9.997 12.446 2.013 1.818 4.151 3.721 4.439 4.796.321 1.135-.552 3.319-2.114 4.263-1.797 1.075-3.542-.119-4.709-1.248-2.649-2.546-4.005-6.659-5.388-10.68-1.356-4.113-2.673-8.016-5.368-10.227-1.849-1.523-5.515-2.423-10.506-3.205-.636-2.119-.871-4.073-.037-5.772 1.196-2.439 3.066-3.94 5.486-4.589z"
    />
    <g fill="#f5f5f5">
      <path d="M339.088 246.466c3.26.585 5.798 1.262 6.925 2.18 1.941 1.549 3.087 5.006 4.273 8.673 1.389 4.172 3.014 8.908 6.2 12.005 1.895 1.883 3.705 2.5 5.161 2.619-2.887 2.452-6.016 4.189-9.315 4.089-3.417-.034-6.683-.77-9.982-1.565-1.121-2.854-1.67-5.097.498-15.105.729-3.417-1.099-7.268-2.921-10.968-.268-.622-.57-1.305-.839-1.928zm-54.83-41.315c8.04 4.188 43.759 22.9 49.707 27.631.282.23.649.335.984.381.394.013.695 0 1.089.014-.604.721-1.083 1.528-1.529 2.393-1.057 2.131-1.018 4.427-.527 6.703a129.122 129.122 0 00-5.109-.717c-8.205-1.007-17.479-2.269-26.437-4.634-15.379-4.053-29.137-13.253-33.536-16.449 4.854-4.339 11.273-9.966 15.358-15.322z" />
      <path d="M265.932 222.505c3.062 2.316 18.065 13.066 35.615 17.689 9.234 2.443 18.993 3.746 26.864 4.706 2.341.322 4.591.618 6.69.921.603 1.364 1.206 2.729 1.835 4.001 1.567 3.379 3.093 6.547 2.588 8.836-1.813 8.421-1.815 11.898-1.055 14.797-.367-.105-.702-.151-1.069-.256-5.844-1.622-11.962-3.323-19.158-3.346-12.456-.037-43.044-6.306-56.966-13.716l-2.737-29.142c1.416-.786 4.159-2.385 7.393-4.49z" />
    </g>
    <path
      fill="#464655"
      d="M448.299 129.311c-.164-.295-.295-.531-.485-.735-2.616-3.182-17.922-9.051-28.779-6.346-11.721 2.954-27.68 3.702-31.634.336-5.065-4.481-10.693-4.658-16.257-.866l-2.247-2.005 3.332-9.678a1.698 1.698 0 00-.6-1.911 1.69 1.69 0 00-2.004.004l-9.596 7.103-8.147-4.14a1.68 1.68 0 00-1.75.135 1.683 1.683 0 00-.683 1.616l1.743 11.707-8.666 9.818a1.69 1.69 0 00-.223 1.915c.335.406 1.018.97 1.716.876l10.648-1.457 2.64 9.682a1.67 1.67 0 001.522 1.241 1.69 1.69 0 001.667-1.039l4.809-11.637 2.438-1.237c.499 3.244 1.511 6.196 1.943 7.352-.816 7.018-3.52 11.608-9.171 21.464-3.295 5.613-7.318 12.558-12.569 22.578-8.742 16.669-11.556 32.056-8.366 45.733-.964.072-2.414.103-3.929.018-8.059-6.03-49.674-27.572-51.438-28.524-.098-.051-6.866-5.863-6.866-5.863-1.876-16.41-14.115-45.247-21.353-56.022-3.837-5.616-5.802-11.353-7.707-16.909-1.814-5.133-3.447-10.025-6.438-14.614-6.648-10.265-27.455-8.808-32.468-7.538-3.563.938-5.495 3.445-7.698 6.345a74.036 74.036 0 01-3.109 3.806c-2.053 2.296-4.922 2.901-9.542 3.839-3.623.756-8.183 1.724-14.132 3.81-13.95 4.957-41.729 19.766-47.646 24.359-5.827 4.562-14.314 1.455-18.844-.809-6.404-3.198-25.738-20.858-30.995-26.05-3.656-3.562-7.794-5.252-10.843-4.435-1.299.333-2.325 1.178-2.869 2.266-.151.302-.271.543-.332.815-1.146 3.957 2.665 19.9 11.033 27.327 9.063 7.999 18.701 20.74 18.16 25.904-.833 6.712 2.202 11.454 8.477 13.9l-.385 2.987-9.867 2.723a1.696 1.696 0 00-1.237 1.576 1.69 1.69 0 001.136 1.651l11.283 3.9 1.191 9.061a1.68 1.68 0 001.1 1.368 1.684 1.684 0 001.719-.35l8.672-8.056 12.998 1.598a1.689 1.689 0 001.706-.899c.146-.506.225-1.388-.247-1.911l-7.221-7.96 6.494-7.651a1.672 1.672 0 00.163-1.957 1.691 1.691 0 00-1.799-.788l-12.318 2.612-2.398-1.311c2.394-2.245 4.257-4.749 4.966-5.759 6.25-3.294 11.565-3.659 22.889-4.569 6.493-.455 14.496-1.063 25.73-2.395 18.693-2.212 32.975-8.589 42.454-18.951.604.755 1.45 1.932 2.236 3.231-.419 10.057 5.337 56.562 5.549 58.555.013.105-.1 5.024-.1 5.024-13.84 9.053-34.073 32.749-40.464 44.016-3.309 5.943-7.564 10.264-11.683 14.451-3.782 3.917-7.428 7.564-10.197 12.29-6.212 10.534 4.39 28.497 7.766 32.414 2.431 2.768 5.537 3.376 9.116 4.052 1.418.27 2.971.608 4.795 1.08 2.971.81 4.795 3.106 7.698 6.82 2.296 2.904 5.199 6.55 9.724 10.94 10.669 10.264 36.33 28.497 43.083 31.738 6.685 3.174 7.698 12.155 7.698 17.22 0 7.158-7.158 32.346-9.454 39.369-1.553 4.862-1.215 9.319.878 11.682.878 1.013 2.093 1.553 3.309 1.553.338 0 .608 0 .878-.068 4.052-.743 16.612-11.277 19.516-22.082 3.106-11.682 10.196-25.998 15.059-27.822 6.377-2.254 9.262-7.088 8.647-13.794l2.844-.991 6.845 7.61a1.695 1.695 0 001.962.402 1.688 1.688 0 00.969-1.754l-1.553-11.837 7.574-5.114a1.685 1.685 0 00-.35-2.978l-11.082-4.158-4.379-12.342a1.688 1.688 0 00-1.566-1.124c-.518.096-1.342.419-1.599 1.075l-3.894 10.017-9.747-2.391a1.669 1.669 0 00-1.823.729 1.69 1.69 0 00.099 1.962l7.841 9.852-.101 2.732c-3.078-1.138-6.15-1.686-7.371-1.869-5.74-4.119-8.441-8.711-14.316-18.435-3.309-5.605-7.428-12.493-13.641-21.947-10.332-15.734-22.419-25.661-35.925-29.51a31.82 31.82 0 011.891-3.444c9.184-4.12 48.215-30.05 49.903-31.131.023-.016.02-.054.043-.07l5.279-3.05c14.636 7.705 45.232 13.884 58.182 14.004 6.801.009 12.645 1.632 18.304 3.201 5.26 1.405 10.218 2.824 15.695 2.951 12.225.319 22.786-17.669 24.572-22.521 1.241-3.469.265-6.48-.882-9.937a74.132 74.132 0 01-1.382-4.717c-.734-2.991.389-5.7 2.227-10.041 1.424-3.416 3.204-7.725 4.845-13.811 3.797-14.31 7.285-45.595 6.841-53.073-.469-7.386 6.892-12.629 11.32-15.088 6.258-3.474 31.755-9.44 39.01-10.841 5.005-1.002 8.738-3.46 9.788-6.438.459-1.257.342-2.582-.248-3.645zm-80.849-.258l-4.233 2.149a1.706 1.706 0 00-.797.861l-3.157 7.643-1.73-6.337a1.67 1.67 0 00-1.855-1.229l-7.617 1.041 6.182-7.003a1.69 1.69 0 00.403-1.367l-1.377-9.248 6.161 3.13a1.69 1.69 0 001.771-.145l6.065-4.49-1.927 5.598a1.717 1.717 0 00.472 1.809l2.856 2.552c-.848 1.433-1.184 3.197-1.217 5.036zm-4.082 34.117c6.11-10.42 8.867-15.193 9.703-23.149.02-.243.007-.544-.124-.781-1.186-2.971-3.872-11.984-.591-14.423 4.481-3.337 8.534-3.27 12.58.123.472 1.128 2.621 6.114-.214 11.858-2.243-.84-4.145-.788-5.345-.586-5.943.982-6.828 17.615-6.766 27.466.018 4.624-2.279 9.529-5.331 14.467-.105-.328-.236-.564-.4-.859-2.098-3.778-5.54-5.807-7.783-6.647 1.573-2.728 3.037-5.24 4.271-7.469zm-12.451 22.512c2.429-4.669 4.588-8.57 6.524-12.04 1.745.499 6.348 2.81 7.54 8.018-.964 1.462-1.962 2.866-2.926 4.328-3.104 4.426-6.038 8.603-7.974 12.768-1.195 2.44-1.957 5.102-2.475 7.784-3.778-1.379-6.487-.415-8.678.646 1.425-6.893 4.018-14.048 7.989-21.504zm-8.635 25.491c.505-.203 1.07-.439 1.6-.734 2.074-.996 4.12-1.901 7.203-.522-.79 6.926-.032 13.997 1.094 19.782-3.548-.966-6.67-1.164-9.307-.627l-.033-.059c-1.329-5.594-1.496-11.602-.557-17.84zm-7.334 21.99c.394.014.695 0 1.089.014-.604.721-1.083 1.528-1.529 2.393-1.057 2.131-1.018 4.427-.528 6.703a128.86 128.86 0 00-5.109-.717c-8.205-1.007-17.479-2.269-26.437-4.634-15.379-4.052-29.136-13.253-33.537-16.449 4.229-4.03 10.349-8.778 15.36-15.322 8.04 4.188 43.759 22.9 49.707 27.631.282.23.65.335.984.381zm-77.017 23.418l-3.733 2.156c-6.466-9.311-6.112-32.083-6.112-32.342.068-.676-.338-1.283-.945-1.553L219.167 212.6l.16-2.872c14.588 1.683 31.45 8.468 31.684 8.585.574.362 1.298.272 1.812-.152l23.212-19.353 4.995 4.465c-7.238 8.89-24.847 21.169-25.074 21.295-.623.269-.958.918-.899 1.581l2.874 30.432zm-13.238-133.968c.121.362.272.664.393 1.026 1.965 5.737 4.021 11.747 8.07 17.694 7.01 10.295 19.131 39.071 20.888 54.744l-22.491 18.732c-1.45-.724-4.319-2.082-7.884-3.561.18-3.835.565-22.287-5.541-39.378-3.205-8.998-7.647-17.785-11.304-24.82-1.058-2.114-2.085-4.136-3.022-6.039.785-1.268 1.57-2.537 2.264-3.775 1.901-3.202 3.652-6.253 5.825-7.13 7.972-3.264 10.84-5.228 12.802-7.493zm-5.712-12.893c1.904 2.838 3.143 5.948 4.352 9.118-1.72 2.538-3.26 4.259-12.741 8.129-3.231 1.33-5.374 5.015-7.395 8.61-.362.574-.755 1.208-1.117 1.782-1.36-3.019-2.237-5.496-2.117-6.945.181-2.477 2.384-5.377 4.739-8.428 2.656-3.504 5.645-7.522 6.398-11.901.483-2.628-.032-4.469-.757-5.737 3.653.995 6.855 2.594 8.638 5.372zm-34.609-.984c2.022-2.689 3.411-4.411 5.857-5.076 1.419-.423 5.013-.817 9.301-.789-.242.182-.483.363-.664.575-1.298 1.54-1.75 4.409-2.201 8.033-.633 4.44-1.385 9.876-4.042 13.833-2.384 3.564-4.408 3.837-6.703 4.2-.997.181-2.054.333-3.11.786-.908-4.379-1.484-10.177-1.396-17.908a100.327 100.327 0 002.958-3.654zm-14.644 8.915c3.352-.666 6.009-1.301 8.304-2.57.063 6.825.669 12.563 1.728 17.243l-.061.121c-3.803 3.988-8.845 8.641-14.642 11.935.031-.362-.03-.695.03-1.117.993-8.94-1.365-17.063-6.471-22.708 4.438-1.483 8.153-2.27 11.112-2.904zm-60.389 27.503c5.585-4.381 31.642-18.162 45.653-23.391 5.196 5.011 7.675 12.59 6.742 21.107-.09 1.238-.18 2.325-.15 3.322-2.536 1.149-5.163 2.026-7.881 2.48-4.258.666-9.211.608-14.465.549-9.634-.057-19.63-.143-26.333 4.509-12.439 8.582-20.984 11.635-22.102 10.397-1.601-1.63-4.563-6.582 1.655-17.214 6.766 2.171 12.624 1.626 16.881-1.759zm-55.601-9.28c-5.59-7.397-7.768-18.449-7.135-20.624.121-.392.392-.634.845-.785 1.48-.393 4.47.572 7.552 3.621.302.302.725.664 1.178 1.117l-2.44 16.671zm6.344 6.491a93.645 93.645 0 00-3.383-3.2l2.47-17.184a111.87 111.87 0 003.716 3.441l-2.803 16.943zm2.931 3.049l2.893-17.275c1.419 1.237 2.87 2.566 4.35 3.833l-3.526 17.789a151.553 151.553 0 00-3.717-4.347zm8.218 10.295c-.574-.815-1.148-1.631-1.783-2.475l3.768-18.725a178.248 178.248 0 007.129 5.826l-9.114 15.374zm1.964 3.321l9.929-16.704c1.45 1.026 2.749 1.901 3.776 2.414.785.392 1.54.694 2.356 1.026-.392.634-.755 1.359-1.056 1.963-2.173 4.35-2.926 7.823-2.895 10.631-4.862.666-8.092 3.053-10.115 5.138-.423-1.419-1.118-2.898-1.995-4.468zm20.164 23.584c.354.192.766.253 1.161.171l8.089-1.717-4.249 5.009a1.671 1.671 0 00.035 2.225l5.165 5.694-9.271-1.141a1.69 1.69 0 00-1.355.44l-6.85 6.364-.901-6.852a1.687 1.687 0 00-1.121-1.378l-7.132-2.464 5.708-1.576a1.714 1.714 0 001.225-1.412l.491-3.798c1.661-.11 3.306-.831 4.842-1.842l4.163 2.277zm35.945-29.071c-1.931 3.866-1.658 7.852-1.083 10.177-3.141.243-6.04.455-8.577.698-12.049.85-17.545 1.275-24.58 5.083-.211.12-.453.302-.573.544-1.781 2.658-7.697 9.969-11.563 8.641-5.286-1.81-7.522-5.192-7.01-10.447.664-1.027 3.561-5.618 9.903-6.527.575 2.325 1.693 3.865 2.539 4.741 4.169 4.347 18.389-4.325 26.481-9.946 3.804-2.628 9.149-3.507 14.947-3.78-.212.272-.333.513-.484.816zm15.949 8.419c-5.225.636-9.664 1.061-13.62 1.424-.574-1.721-1.271-6.825 2.352-10.752 1.752-.031 3.473-.002 5.224-.033 5.406.059 10.51.117 15.039-.64 2.688-.393 5.315-1.27 7.821-2.358.998 3.895 3.324 5.585 5.438 6.792-6.491 2.722-13.859 4.628-22.254 5.567zm40.31-17.833c-3.864 4.26-8.725 7.794-14.401 10.545a14.354 14.354 0 00-1.51-.906c-1.994-1.147-3.897-2.324-4.502-5.646 6.159-3.263 11.564-7.886 15.699-12.086 1.21 3.473 2.811 6.16 4.744 8.031l-.03.062zm2.717-2.114c-1.631-1.419-3.323-3.925-4.654-8.364.845-.483 1.751-.635 2.808-.786 2.536-.394 5.738-.908 8.937-5.651 3.109-4.561 3.952-10.48 4.615-15.282.361-2.688.723-5.527 1.447-6.373.755-.906 3.05-1.421 4.711-.666 1.903.875 1.904 2.989 1.633 4.59-.603 3.624-3.229 7.068-5.764 10.482-2.626 3.444-5.101 6.736-5.402 10.209-.211 2.386 1.119 5.919 3.295 10.478-1.388 1.722-2.868 3.021-4.74 3.294-2.688.392-4.983-.302-6.886-1.931zm5.408 7.306c.03-.362-.091-.725-.242-1.027-.211-.332-.392-.573-.604-.906.936.091 1.872.03 2.839-.091 2.356-.333 4.228-1.663 5.828-3.354.695 1.48 1.45 2.989 2.297 4.619 3.808 7.337 8.009 15.701 11.123 24.427 5.351 14.977 5.538 31.527 5.389 36.963-6.547-1.422-13.194-2.899-21.322-4.009-1.092-8.999-5.848-49.042-5.308-56.622zm-47.649 124.682c4.254-4.322 8.711-8.846 12.223-15.126 6.077-10.872 26.403-34.575 39.639-43.151l26.809 11.75c0 1.621.068 4.795.338 8.644-3.511 1.553-20.191 9.454-32.751 22.554-6.618 6.888-12.493 14.789-17.152 21.204-1.418 1.891-2.769 3.714-4.052 5.402-1.485-.135-2.971-.27-4.389-.338-3.714-.27-7.226-.473-8.981-2.026-6.483-5.673-9.522-7.361-12.425-8.103.269-.27.471-.54.741-.81zm-10.669 21.812c-.743-3.714-.743-7.293.946-10.129 1.688-2.971 3.916-5.47 6.212-7.968 3.039.405 5.267 1.013 12.965 7.766 2.634 2.296 6.888 2.566 11.007 2.768.675.068 1.418.135 2.093.203-2.093 2.566-3.917 4.457-5.267 4.997-2.296.945-5.875.27-9.657-.473-4.322-.81-9.251-1.688-13.506-.405-2.565.742-3.983 2.025-4.793 3.241zm5.74 0c3.512-1.08 7.766-.27 11.953.473 4.254.81 8.306 1.553 11.547.27 2.229-.878 4.795-3.646 7.901-7.63 2.161.472 3.984 1.215 5.065 2.768 1.553 2.229 1.958 4.592 1.351 7.023-.54 2.093-2.026 4.727-5.403 7.901-.81-.54-1.35-1.283-1.958-2.161-1.485-2.093-3.376-4.727-9.049-5.47-5.47-.743-11.142 1.148-15.734 2.701-2.566.878-5.267 1.823-6.348 1.553-1.148-.27-2.634-2.093-2.701-3.917-.068-2.093 1.823-3.039 3.376-3.511zm14.383 22.284a99.853 99.853 0 00-4.592-1.013c-3.309-.608-5.47-1.081-7.158-2.971-1.013-1.081-2.971-4.119-4.862-7.968.27.135.54.27.811.338 1.958.473 4.727-.405 8.171-1.621 4.254-1.418 9.454-3.174 14.181-2.566 4.254.54 5.402 2.229 6.753 4.119.608.81 1.215 1.688 2.093 2.431-3.512 2.768-8.441 5.874-15.397 9.251zm9.927 8.103c-2.093-2.701-3.849-4.794-6.01-6.28 6.077-3.106 10.94-6.212 14.654-9.251h.135c5.267 1.621 11.682 4.052 17.22 7.766-.338.135-.608.338-1.013.472-8.441 3.106-14.654 8.847-17.422 15.937-3.31-3.309-5.673-6.28-7.564-8.644zm51.591 41.733c-6.415-3.038-30.388-20.191-41.327-30.388 2.161-6.888 7.834-12.493 15.869-15.464 1.148-.473 2.161-.878 3.038-1.351 2.161 1.756 4.12 3.714 5.74 5.943 2.499 3.512 4.659 7.968 6.955 12.695 4.254 8.644 8.644 17.625 15.802 21.542 13.236 7.293 19.786 13.573 19.178 15.126-.743 2.161-3.849 7.023-16.139 6.212-1.08-7.022-4.186-12.019-9.116-14.315zm1.284 69.487c-.405.068-.743-.068-1.08-.405-1.013-1.148-1.486-4.254-.135-8.374.135-.405.27-.945.473-1.553l16.004-5.267c-4.12 8.306-13.034 15.194-15.262 15.599zm16.882-19.719l-16.477 5.47a112.53 112.53 0 001.418-4.862l16.409-5.065a93.913 93.913 0 00-1.35 4.457zm2.769-8.441l-16.747 5.132c.473-1.823 1.013-3.714 1.486-5.605l17.49-4.795a149.78 149.78 0 00-2.229 5.268zm4.119-9.251l-18.435 4.997c.81-3.174 1.485-6.28 2.026-8.981l17.828 1.283a94.213 94.213 0 00-1.419 2.701zm3.511-5.943l-19.381-1.418c.27-1.756.472-3.309.472-4.457 0-.878-.067-1.688-.135-2.566.743.068 1.553.068 2.228.068 4.862 0 8.306-.878 10.805-2.161 2.768 4.052 6.348 5.875 9.116 6.753-1.079 1.013-2.092 2.296-3.105 3.781zm6.571-36.161l6.38 1.563a1.671 1.671 0 001.975-1.025l2.786-7.165 3.123 8.804c.168.472.534.841.999 1.016l8.754 3.284-5.727 3.868a1.688 1.688 0 00-.732 1.619l.983 7.482-3.96-4.402a1.716 1.716 0 00-1.81-.465l-3.618 1.258c-.841-1.437-2.22-2.586-3.812-3.508l.176-4.744a1.703 1.703 0 00-.366-1.114l-5.151-6.471zm-22.508-7.799c6.145 10.399 8.981 15.126 15.532 19.718.202.135.472.27.743.27 3.174.405 12.358 2.431 12.898 6.483.743 5.537-1.283 9.049-6.212 10.94-1.215-.135-6.618-.675-10.264-5.943 1.823-1.553 2.701-3.241 3.106-4.39 2.026-5.672-12.087-14.518-20.731-19.245-4.052-2.229-7.226-6.618-10.062-11.682.338.068.608.068.945.068 4.322 0 7.766-2.026 9.589-3.579 1.62 2.7 3.106 5.199 4.456 7.36zm-13.64-21.812c2.904 4.389 5.267 8.171 7.36 11.547-1.283 1.283-5.537 4.187-10.669 2.701-.811-1.553-1.553-3.106-2.364-4.659-2.363-4.862-4.592-9.454-7.293-13.168-1.553-2.229-3.511-4.187-5.605-5.943 3.039-2.634 3.511-5.47 3.646-7.901 5.335 4.593 10.333 10.332 14.925 17.423zm-18.098-19.921c-.068.54-.135 1.148-.135 1.756-.135 2.296-.338 4.525-3.039 6.55-5.672-4.052-12.223-6.82-17.828-8.644 2.566-2.634 4.254-5.267 5.065-7.833h.068c5.537 1.553 10.872 4.322 15.869 8.171zm-14.856-17.76c-.338.135-.608.405-.81.675-.203.338-.338.608-.54.945-.338-.878-.81-1.688-1.351-2.499-1.351-1.959-3.376-3.039-5.605-3.714a128.98 128.98 0 003.106-4.119c4.862-6.685 10.467-14.181 16.882-20.866 11.007-11.48 25.728-19.043 30.658-21.339.743 7.158 2.364 15.599 5.943 20.866-7.564 4.998-41.26 27.147-48.283 30.051zm136.478-31.956c-1.814 8.421-1.815 11.897-1.055 14.797-.367-.105-.702-.151-1.069-.256-5.844-1.622-11.963-3.324-19.158-3.346-12.456-.037-43.044-6.306-56.966-13.716l-2.737-29.142c1.417-.787 4.159-2.386 7.394-4.49 3.062 2.316 18.065 13.066 35.615 17.69 9.234 2.443 18.993 3.746 26.863 4.706 2.341.323 4.591.619 6.69.921.603 1.364 1.206 2.729 1.835 4.001 1.567 3.378 3.094 6.546 2.588 8.835zm12.81 17.373c-3.417-.034-6.683-.77-9.982-1.565-1.121-2.853-1.671-5.097.498-15.105.729-3.417-1.099-7.268-2.921-10.968-.269-.623-.57-1.306-.839-1.929 3.259.585 5.797 1.262 6.925 2.18 1.941 1.548 3.087 5.006 4.273 8.673 1.389 4.171 3.014 8.908 6.201 12.005 1.895 1.883 3.704 2.5 5.161 2.619-2.888 2.453-6.017 4.189-9.316 4.09zm11.238-7.86c-1.797 1.075-3.542-.12-4.709-1.248-2.649-2.546-4.005-6.659-5.387-10.68-1.356-4.113-2.673-8.016-5.368-10.227-1.849-1.523-5.515-2.422-10.506-3.205-.636-2.118-.871-4.073-.038-5.772 1.195-2.439 3.064-3.941 5.485-4.589 2.093-.544 5.117-.523 9.53.889-.079.971-.467 1.803-.939 2.761-1.11 2.315-2.494 5.246-.391 10.567 2.005 5.143 6.411 9.185 9.998 12.446 2.013 1.818 4.15 3.721 4.439 4.796.321 1.134-.552 3.318-2.114 4.262zm10.014-12.432c-.453 1.41-2.159 4.597-4.607 8.119-.013-.302-.026-.604-.098-.873-.537-1.941-2.648-3.936-5.382-6.357-3.305-3.031-7.364-6.726-9.126-11.154-1.592-3.981-.673-5.805.324-7.903.414-.924.887-1.882 1.11-3.01 4.125 1.727 9.234 4.529 15.561 8.972a99.647 99.647 0 001.343 4.506c1.073 3.187 1.709 5.306.875 7.7zm.048-24.819c-1.346 3.141-2.324 5.692-2.574 8.303-5.665-3.806-10.741-6.55-15.2-8.322l-.066-.118c-1.139-5.391-2.127-12.181-1.567-18.825.282.23.59.368.905.657 6.813 5.872 14.847 8.519 22.39 7.498-1.288 4.498-2.739 8.006-3.888 10.807zm11.45-65.362c.457 7.083-2.906 36.368-6.512 50.882-7.071 1.453-14.724-.786-21.223-6.37-.97-.774-1.816-1.463-2.656-2.001.487-2.741 1.248-5.404 2.41-7.903 1.858-3.889 4.706-7.941 7.724-12.242 5.493-7.915 11.215-16.111 11.166-24.271-.047-15.112 2.265-23.887 3.918-24.109 2.25-.399 8.008-.043 13.265 11.096-5.615 4.352-8.477 9.493-8.092 14.918zm13.027-18.275c-.767.426-1.443.878-2.178 1.363-.301-.682-.694-1.391-1.022-1.981-2.36-4.251-4.799-6.837-7.133-8.398 2.199-4.387 2.056-8.401 1.48-11.248 1.41.453 3.024.716 4.814.88l8.166 17.633c-1.667.617-3.123 1.194-4.127 1.751zm7.34-2.916l-7.53-16.21c.997-.013 1.994-.026 3.05-.071l13.316 13.693a176.734 176.734 0 00-8.836 2.588zm12.601-3.596l-12.68-12.965c1.987-.176 3.883-.379 5.687-.608l12.615 12.152c-1.824.471-3.739.916-5.622 1.421zm9.57-2.378l-12.392-11.89a93.458 93.458 0 004.552-.982l12.779 11.752a113.65 113.65 0 00-4.939 1.12zm10.509-2.357c-.42.078-.957.222-1.587.34L424.17 124.94c9.261-.429 19.61 4.021 21.045 5.773.256.321.302.682.17 1.141-.512 1.444-2.998 3.365-7.255 4.183z"
    />
  </svg>
);

export default SvgIm;