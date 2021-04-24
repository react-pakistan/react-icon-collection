import * as React from "react";
import { IIconProps } from "../styled";

const SvgWf = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#F5F5F5" d="M0 0h512v256H0z" />
    <path fill="#73AF00" d="M0 256h512v256H0z" />
    <g fill="#FF4B55">
      <path d="M389.491 186.437s6.102 16.737 6.625 17.609l.697-1.395 4.184-21.793 10.809-20.224-3.138.349-24.583 11.856s-14.645 16.04-14.819 16.563 20.225-2.965 20.225-2.965z" />
      <path d="M398.15 346.486c-.814-.116-12.902.464-12.902.464l-3.952-13.25-2.267-25.047 4.271-1.133 5.318 2.528 1.918-10.025s-4.62-5.056-5.492-5.405-11.332-2.702-11.332-2.702l-14.035-18.568 16.737-9.328 13.076-17.958 3.138-16.214-2.615-13.425-5.946-9.957-.156-.504c-.042-.052-.189-.154-.283-.23l-1.112-1.862-.017 1.086c-2.579-1.611-7.857-4.413-9.223-5.096-1.743-.872-10.984-2.441-12.902-1.046-1.918 1.395-10.809 5.579-12.379 8.543s-2.615 13.599-2.615 13.599 2.615 5.928 5.928 7.323c3.313 1.395 9.763 2.964 10.809 2.615.903-.301 11.137-3.325 13.929-4.597l1.239 2.505-.523 7.148-5.753 4.01-10.635 4.184s-16.214-4.533-16.912-4.359c-.697.174-20.747-5.928-20.747-5.928l-18.829-4.359 6.276-3.138 17.086-1.22s3.313-19.352 3.836-19.701 11.681-9.24 11.681-9.24l9.24-2.266-5.579-23.653 8.369-25.803-21.851 6.276-34.637 8.601-22.084-1.395-19.527 6.276-12.553 11.391-7.206 9.763-2.557 15.575-1.627 20.689-6.044 11.39-6.849 5.368c-.768-2.027-4.368-9.784-4.368-9.784l8.717-2.092-2.266-5.753-6.102-4.533 1.918-6.974 6.974 3.836 1.918 1.395 1.22-7.148-7.671-10.809 1.22-5.405 9.24 4.882-1.046-12.553-8.194-5.056.523-6.974 8.95 2.673-.93-6.625-9.763-7.09 9.531-15.342-11.623.582-.93-4.998-3.022-1.163s-16.156 6.858-17.318 6.625c-1.162-.232-14.064-1.976-15.575-1.627s-6.857 1.743-6.857 1.743l-1.511 5.928-9.88-1.627-14.645-1.22-4.417 5.405 6.974 2.79s-1.627 12.32-1.162 13.25c.465.93 4.649 6.974 4.649 6.974l-9.531 13.017 9.763 1.395 13.483-2.092-.465 3.255 17.9-1.86-3.952 2.092-5.114 15.342-14.878 30.22-5.23 26.849-8.369-8.717-5.579-23.014-8.369-22.665s-1.743-6.974-2.79-7.148-5.579-1.046-5.579-1.046l-5.753 4.707-7.323-1.046-4.184 5.753 4.707 7.323s-7.846 3.138-7.846 4.01.523 5.928 1.046 6.102c.523.174 12.379-.174 12.379-.174l7.148 12.727-5.579 14.645 2.79 5.579 4.882.697 4.533-5.23 15.691 46.899s-1.22 6.102-2.092 6.625-5.056 5.23-4.01 5.23 7.497.872 8.194.523 9.763-7.323 9.763-7.323 14.296-10.984 15.168-10.112 14.471 9.24 14.471 9.24l-6.276 21.619-14.819 21.619-9.24-5.579-6.625-9.415-4.882 1.569-1.743 2.964.697 6.276s-5.056 4.01-5.056 4.882.523 7.148.523 7.148 3.313 1.569 3.487 2.441 1.918 7.148 1.918 7.148l3.487 1.22 6.625-4.01h10.984l6.799 1.046 14.471-4.533 21.096 1.046-1.918-4.01s-8.543-4.359-11.507-5.23c-2.964-.872-5.928-1.569-5.928-1.569l-1.22-6.102 20.747-24.583 7.671-1.569 2.615 6.451s8.601-2.092 8.601-2.79v-8.834c0-.697-1.86-6.509-1.86-6.509l-.062-.533 6.571-1.095 22.781-10.925 8.02 9.647 9.996 4.765-12.437 22.316-10.693 7.207-7.671-3.487-10.693-7.904-4.184 2.557.93 7.903-6.276-.464-2.79 5.579 4.649 6.741-1.627 5.347s1.163 4.882 2.325 4.882 8.136-2.557 8.136-2.557l20.457-1.627 14.878-4.882 15.575 1.163s3.022-10.461 2.325-10.461-.93-.233-2.79-.233c-1.86 0-8.369.233-8.369.233l-.233-2.325 5.114-9.298 19.759-16.505 5.811 1.163 2.092 3.022 5.812-4.417-.233-7.439-5.114-5.346-5.114-6.044 1.627-9.066 8.833 4.184s13.948 9.763 15.11 10.229c1.163.464 28.128 7.438 28.128 7.438l5.579 13.25-2.79 20.922-8.601-2.557-8.136-10.461s-2.325-1.163-3.487-.93-3.952 4.882-3.952 4.882l2.79 6.509-3.719 1.162-3.487 2.325-.697 4.882 3.254 3.022v6.276c0 .697 1.86 3.255 2.557 3.487s6.044.93 7.323.814c1.278-.116 10.809-4.069 10.809-4.069s17.899.349 18.364.233c.465-.116 15.924-3.487 15.924-3.487l8.717 1.395s5.812-4.417 5.579-4.998-6.042-6.043-6.856-6.159zm-33.416-125.878c-4.707.523-7.148 1.918-7.497-.697s-.349-7.846.174-8.02 5.928-3.313 6.102-2.79c.174.523 5.579 3.138 5.579 3.138l3.291 6.652c-1.736.923-4.415 1.358-7.649 1.717zM127.1 177.894s1.918-9.938 2.441-9.938 7.671-2.615 7.671-2.615l-21.27-13.773s3.661 16.912 4.01 18.306c.349 1.394 7.148 8.02 7.148 8.02z" />
    </g>
    <g fill="#464655">
      <path d="M181.202 157.441c.074.017.498.112 1.147.24l-.16.697a2.086 2.086 0 002.04 2.56 2.09 2.09 0 002.035-1.624l.224-.974c1.507.187 3.166.331 4.769.331 1.354 0 2.661-.098 3.787-.36a2.09 2.09 0 001.566-2.506c-.262-1.128-1.376-1.847-2.509-1.569-3.31.779-9.763-.37-11.964-.872-1.103-.262-2.245.441-2.506 1.569a2.092 2.092 0 001.571 2.508z" />
      <path d="M388.332 191.217l5.273 16.098a2.092 2.092 0 001.989 1.438h.093a2.095 2.095 0 001.945-1.618c3.857-16.53 11.578-42.677 17.034-46.948a2.089 2.089 0 00.618-2.506 2.09 2.09 0 00-2.286-1.199c-1.117.207-27.582 5.361-45.995 32.979a2.095 2.095 0 00.005 2.332c.477.703 1.327 1.03 2.16.877l15.333-3.17a108.549 108.549 0 00-3.99 11.403c-6.982-4.25-14.856-5.006-20.317-3.59-6.233 1.634-11.471 5.606-14.375 10.902-2.226 4.059-2.814 8.516-1.615 12.226 1.392 4.31 5.108 9.671 11.365 11.779 4.145 1.408 10.845 1.72 19.676-3.746 0 .042.006.081.006.123-.06 3.487-1.85 6.331-5.326 8.461-6.908 4.233-19.023 4.517-26.996.616-10.514-5.134-26.324-8.055-35.156-9.381 5.477-1.745 12.097-2.238 20.053-.415.108.027.212-.015.321-.007.053.004.094.061.147.061.058 0 .102-.062.161-.067.482-.038.947-.185 1.299-.527.005-.005.006-.013.011-.018.002-.002.006-.001.006-.001.01-.01.006-.024.015-.032.337-.351.487-.802.528-1.275.01-.113.023-.2.015-.312-.006-.095.033-.185.014-.279-.025-.12-2.343-11.997 4.04-20.181 3.836-4.92 10.109-7.606 18.647-7.993.134-.006.246-.083.375-.114.185-.044.368-.07.536-.163.152-.084.259-.218.386-.338.106-.099.237-.159.324-.283.018-.026.02-.057.037-.084.015-.023.042-.033.056-.057.038-.065.029-.142.06-.209a2.05 2.05 0 00.182-.639 2.054 2.054 0 00-.15-.986c-.022-.055-.012-.117-.039-.17-.169-.332-16.585-33.158 10.161-55.077a2.095 2.095 0 00.341-2.882 2.098 2.098 0 00-2.869-.447c-26.408 18.541-62.906 20.54-77.371 20.54-25.8 0-42.102 9.714-49.838 29.693-.804 2.076-1.372 4.538-1.85 7.174.258-3.696-.418-6.938-2.086-9.648-2.381-3.864-6.022-5.482-7.66-6.044a86.757 86.757 0 00-.035-2.809c2.826-.435 6.18 1.758 7.286 2.69.387.327.869.501 1.357.501.321 0 .646-.076.943-.229a2.087 2.087 0 001.144-2.01c-.684-9.729-7.284-14.457-11.812-16.057 3.992-3.173 8.247-8.363 10.853-16.829a2.085 2.085 0 00-.684-2.239 2.09 2.09 0 00-2.332-.207c-.07.039-4.33 2.345-10.732 4.247l.585-7.603a2.093 2.093 0 00-3.116-1.977c-.108.059-10.82 6.073-21.744 9.246-8.246-2.074-18.978-3.686-23.046.55-.981 1.019-1.893 2.675-1.667 5.241-7.02-1.466-23.136-3.863-32.919 2.463a2.087 2.087 0 00-.877 2.321 2.097 2.097 0 001.964 1.526c3.106.076 7.906.79 9.908 2.114-.883 2.381-2.343 7.426-1.068 12.291-4.246 1.23-8.701 1.421-14.118-1.511l4.723-1.159a2.096 2.096 0 001.58-1.787 2.093 2.093 0 00-1.12-2.103c-.12-.065-12.03-6.26-21.935-16.672a2.115 2.115 0 00-2.196-.534 2.09 2.09 0 00-1.4 1.771c-.084.839-1.861 20.633 13.171 32.368a2.086 2.086 0 002.133.261 2.092 2.092 0 001.242-1.749l.583-7.476c7.499 4.49 13.708 4.06 19.034 2.442a12.925 12.925 0 002.588 2.877c.172.143.408.298.647.454-3.423 8.014-10.221 10.079-10.511 10.159a2.1 2.1 0 00-1.515 1.869 2.09 2.09 0 001.231 2.059c.507.223 11.455 4.958 23.727.588l-.193 1.4a2.079 2.079 0 00.482 1.64c.387.458.951.725 1.547.736.052 0 .191.005.409.005 1.409 0 6.083-.107 11.382-1.324-.801 7.485-5.361 16.408-10.213 25.82-6.568 12.752-13.888 27.131-13.771 41.654-2.506-3.244-5.626-8.302-7.17-15.017-.534-2.332-.888-4.424-1.21-6.336-.782-4.626-1.457-8.625-4.192-12.384-3.092-4.25-7.464-13.735-7.273-18.917.18-4.789-2.958-7.606-6.146-8.276-.229-.048-.447.012-.675-.015-.755-1.521-2.8-4.434-7.497-4.769-1.131-.153-2.155.785-2.237 1.94a2.092 2.092 0 001.937 2.234c1.638.116 2.655.741 3.28 1.366-1.534.789-2.778 2.106-3.643 3.791-2.8-1.614-5.631-2.019-7.796-1.523-.56.127-.985.43-1.469.659-1.417-.74-5.19-2.147-9.739.746a2.09 2.09 0 00-.643 2.888 2.09 2.09 0 002.888.643c1.624-1.031 3.011-1.166 4.028-1.037-.746 1.381-1.169 2.904-1.097 4.322.144 2.817 1.773 5.002 4.291 5.928-3.002.572-5.546 1.967-6.906 3.852-.219.305-.265.654-.422.977-1.912.197-4.853 1.485-6.712 5.414a2.09 2.09 0 103.781 1.787c.829-1.75 1.803-2.443 2.531-2.76 1.987 6.554 8.448 5.061 12.345 4.149l1.561-.354c2.185-.436 6.037 5.944 7.072 10.085.719 2.877-.512 6.396-4.391 12.553-2.356 3.748-1.678 6.462-.692 8.08.019.033.052.05.072.082a5.596 5.596 0 01-2.439.185c-1.125-.229-2.201.643-2.356 1.787a2.09 2.09 0 001.79 2.354c.534.076 1.038.109 1.515.109 2.433 0 4.054-.831 5.028-1.511 1.36.582 2.761.802 3.795.721 2.885-.24 4.838-2.768 6.159-5.906 3.849 21.221 12.695 40.928 14.231 44.251-.311 7.519-8.426 9.284-8.777 9.36a2.09 2.09 0 00-1.662 1.858 2.088 2.088 0 001.286 2.125c3.531 1.444 6.62 2.021 9.303 2.021 8.276 0 12.651-5.459 14.029-7.562 6.112-2.129 13.277-7.113 16.074-9.152 4.664 3.494 8.541 5.432 9.837 6.038-2.254 22.184-15.259 37.169-19.065 41.099-2.577-1.477-8.268-5.121-10.147-9.464-1.778-4.104-5.075-5.26-7.764-5.019-.903-1.167-2.929-3.342-5.772-3.654-1.397-.147-3.517.109-5.672 2.267a2.091 2.091 0 000 2.958 2.09 2.09 0 002.958.005c1.182-1.182 1.986-1.111 2.247-1.073.805.086 1.584.669 2.2 1.269-1.525 1.299-2.469 3.119-2.317 5.105.108 1.395.631 2.707 1.368 3.928-1.524.793-3.36 2.094-4.569 4.152-.044.074-.092.191-.138.272-2.498.159-6.993 1.923-7.694 7.742a2.09 2.09 0 002.081 2.342 2.094 2.094 0 002.076-1.842c.25-2.084 1.26-3.087 2.206-3.588-.024.859.047 1.752.355 2.684.722 2.196 2.429 3.977 4.977 5.361a9.936 9.936 0 00-.468 2.761c-1.345.678-3.329 1.944-4.345 4.099-.76 1.607-.806 3.405-.139 5.203a2.088 2.088 0 002.691 1.231 2.09 2.09 0 001.231-2.691c-.365-.975-.177-1.58-.003-1.951.309-.659.923-1.212 1.551-1.643.776 1.392 1.948 2.454 3.516 2.972.716.234 1.46.349 2.207.349 2.49 0 5.012-1.259 6.631-3.449 1.937-2.626 5.726-1.122 5.971-1.019 7.922 2.877 18.625.708 25.103-2.931 3.593-2.021 16.252-.932 23.392.24a2.223 2.223 0 001.613-.403c.458-.354.749-.877.806-1.455.722-7.224-8.625-9.142-16.135-10.684-2.046-.42-3.994-.817-5.83-1.602-.733-4.239 10.281-19.668 20.774-27.383 2.572-1.891 4.642-2.648 5.68-2.092 1.482.812 1.953 4.593 1.803 6.892-.004.061.031.113.032.173.003.229.045.447.125.669.034.093.059.181.106.268.029.056.032.117.067.17.12.184.282.319.443.451.032.027.043.069.077.094a.036.036 0 00.018.005c.271.193.57.307.884.359.081.013.156.001.238.004.234.012.46-.012.69-.082.054-.015.112.001.165-.019.17-.066.354-.16.528-.23 1.116-.571 3.007.067 4.33.744-.247.762-.395 1.56-.325 2.423.087 1.079.422 2.152.945 3.182-2.073-.234-4.013 0-5.416 1.079-.501.384-.896.868-1.295 1.346-2.945.292-6.628 2.147-7.504 6.533a2.094 2.094 0 001.64 2.463c.139.027.278.038.414.038.975 0 1.85-.686 2.049-1.684.21-1.047.746-1.681 1.336-2.158-.018.763.064 1.52.29 2.234.41 1.294 1.515 3.225 4.327 4.303-.253.43-.471.889-.664 1.357-2.094.674-5.248 2.845-5.248 7.454a2.092 2.092 0 004.184 0c0-.815.202-1.404.468-1.893.068.302.115.613.224.896.507 1.324 2.029 3.808 6.296 3.808 1.406 0 3.106-.267 5.165-.937 4.993-1.618 8.532-1.787 11.954-1.956 4.092-.196 7.957-.387 13.387-2.904 7.824-3.634 17.514-2.403 22.591-1.34 2.751.567 5.443-.785 6.552-3.307.381-.859.63-1.613.893-2.378 2.367.284 2.857 2.585 2.921 3.091a2.092 2.092 0 004.16-.447c-.226-2.186-1.846-6.108-6.181-6.789.055-1.484-.234-2.705-.961-3.606-.795-.981-2.378-2.01-5.478-1.373-3.209.665-4.686.795-5.35.736.101-.409.338-1.133.891-2.37 1.869-4.206 14.277-15.299 22.403-21.94 1.959-.441 4.443-.469 5.018.185.202.223.202.992-.256 2.207a2.087 2.087 0 00.673 2.392c.722.561 1.73.588 2.482.065.324-.229 7.914-5.617 7.761-12.182-.079-3.318-2.013-6.2-5.751-8.565-3.168-2-4.988-4.315-5.413-6.876-.444-2.678.698-5.055 1.461-6.32a43.559 43.559 0 019 5.77c17.668 14.608 32.702 16.935 40.824 16.897 1.703 3.763 6.706 16.605 2.436 29.795-2.272-.403-6.734-1.852-9.796-6.957-2.977-4.958-6.549-6.2-9.025-6.364-3.849-.3-7.933 1.891-11.142 5.901a2.092 2.092 0 00.215 2.844 2.09 2.09 0 002.852-.011c.534-.507 1.528-1.122 1.956-.79l.433 1.21c.232.67.469 1.346.752 2-1.664.245-3.266.926-4.517 2.343-.824.933-1.343 2.012-1.718 3.122-3.832.685-5.92 3.592-6.008 3.727a2.078 2.078 0 00.569 2.877c.357.245.765.365 1.169.365.667 0 1.324-.316 1.733-.904.04-.054.813-1.103 2.196-1.689a7.17 7.17 0 00.885 2.245 5.598 5.598 0 002.91 2.358 15.032 15.032 0 00-.378 1.975c-.045.015-.091.008-.135.026-5.01 2.109-3.988 8.336-2.749 11.332a2.09 2.09 0 002.726 1.133 2.096 2.096 0 001.141-2.73c-.015-.039-1.191-3.115-.435-4.867.02.047.025.097.046.143.866 1.956 2.536 3.351 4.827 4.037 1.128.338 2.207.479 3.239.479 3.424 0 6.331-1.585 8.777-2.926 1.904-1.041 3.705-1.994 5.124-1.896 1.032.098 2.215.283 3.511.485 4.893.763 11.599 1.798 18.255-.343 1.239-.398 2.362-.785 3.389-1.139 5.407-1.852 7.429-2.544 10.733-.665 4.002 2.288 9.161.752 11.82-2.054a6.424 6.424 0 001.571-2.853c1.365.543 2.47 1.131 2.649 1.458a2.091 2.091 0 103.94 1.406c.392-1.095.297-2.223-.27-3.258-1.383-2.518-5.432-3.87-7.458-4.407-3.348-4.55-8.452-5.967-16.885-4.632a1.024 1.024 0 01-.885-.251c-3.078-2.49-3.757-15.424-4.16-23.144-.324-6.178-.545-9.763-1.493-11.485.485-.398 3.133-.447 4.784.757.795.588.874 1.117.684 1.716l-.093.251a2.091 2.091 0 001.185 2.691 2.101 2.101 0 002.705-1.155c.063-.147.117-.3.166-.447.746-2.119 3.803-11.719.202-17.8-1.618-2.73-4.252-4.359-7.835-4.844-9.126-1.23-16.08-7.061-20.757-17.222 7.085-2.49 27.944-11.944 31.844-38.04 2.591-17.347-3.626-27.062-9.3-32.156-.271-.244-.565-.429-.841-.659.164-.212.373-.388.446-.665.02-.09 1.454-5.367 3.964-11.451zm-14.772-3.729c11.924-15.517 26.547-22.425 34.455-25.215-5.187 9.344-10.128 26.822-12.705 36.803l-4.353-13.294c-.017-.052-.07-.074-.091-.123 1.276-2.518 2.711-4.956 4.294-7.014a2.09 2.09 0 00-.384-2.931 2.09 2.09 0 00-2.934.381c-1.975 2.568-3.715 5.613-5.217 8.689l-13.065 2.704zm-247.691-12.444c-6.445-6.827-8.123-15.686-8.508-21.069 5.514 5.111 11.076 8.935 14.828 11.267l-3.333.819c-.637-.511-1.263-.983-1.927-1.581-.853-.768-2.174-.692-2.953.158a2.093 2.093 0 00.158 2.958c.747.671 1.456 1.188 2.18 1.763l-.445 5.685zm157.812 69.014c-3.91-10.434-15.711-35.414-44.622-56.314.023-.061.037-.141.061-.201.37-.958.855-1.783 1.27-2.689 43.771 11.185 70.414 29.383 81.056 37.855-21.743-1.603-33.245 13.374-37.765 21.349zm47.385-41.369c-4.621 5.939-5.428 13.175-5.337 18.06-9.598-8.036-36.577-27.592-83.499-39.727.606-1.053 1.334-1.968 2.013-2.939.152.035.297.09.456.099 57.73-2.48 89.939 9.916 101.735 15.758-6.618 1.341-11.834 4.204-15.368 8.749zm-46.008-42.17c12.76 0 42.219-1.531 67.627-14.122-10.906 16.427-6.986 34.866-3.904 43.976-11.701-5.993-43.388-18.441-101.186-16.448 8.338-8.93 20.666-13.406 37.463-13.406zm-49.07 44.578c.521-4.729 1.041-9.227 1.862-13.016 27.784 20.596 38.973 45.492 42.285 54.519-6.823-1.53-13.005-1.034-18.332 1.713-4.359 2.252-7.402 5.559-9.487 8.588-.929-10.527-4.405-29.314-17.101-44.105-.041-.048-.098-.068-.142-.111.338-2.546.64-5.095.915-7.588zm-2.643 63.871c-9.723-2.267-13.806-12.063-13.994-12.526a2.1 2.1 0 00-1.942-1.313 2.1 2.1 0 00-1.397.539c-6.985 6.282-15.53 7.938-19.796 8.374 3.372-10.592 12.855-16.094 25.613-23.499l.588-.343c3.18-1.846 5.475-4.648 7.268-7.944-.002 5.264.281 11.131 1.247 16.067a2.093 2.093 0 004.108-.806c-2.093-10.677-.768-26.736-.575-28.901 12.168 16.425 13.779 37.153 13.961 43.913-7.138-1.235-11.115-6.782-11.157-6.84a2.08 2.08 0 00-1.714-.904h-.008a2.09 2.09 0 00-1.711.883c-3.095 4.381-1.888 9.78-.491 13.3zm-7.409-57.24c-1.621-1.994-3.802-4.188-5.961-5.153.488-1.949.946-4.024 1.362-6.203 2.238 1.839 5.626 5.627 4.599 11.356zm-9.425 7.477c.627.091 4.44.828 6.022 5.723a9.153 9.153 0 00-5.969.99c-.335-1.96-.402-4.198-.053-6.713zm7.471 10.731c.605.466 1.408.523 2.097.225-1.214 2.253-2.739 4.116-4.616 5.516-1.026-1.035-2.534-2.886-3.671-5.569 3.1-2.259 5.88-.396 6.19-.172zm7.211-30.843a2.083 2.083 0 001.486-1.498 300.57 300.57 0 00-.851 7.045c-.876 7.955-1.832 16.57-4.543 23.109-.769-8.792-6.507-12.027-9.868-12.613.179-.607.341-1.205.569-1.839.297-.827.59-1.715.877-2.653 1.912 1.206 4.553 4.471 6.034 6.744a2.09 2.09 0 001.754.953c.049 0 .098 0 .147-.005a2.095 2.095 0 001.749-1.204c5.007-10.77-1.734-18.449-6.425-21.348.118-.767.236-1.532.343-2.311 2.72 1.278 5.622 3.909 6.668 5.026a2.086 2.086 0 002.06.594zm-3.473-13.343c1.193 1.94 1.694 4.326 1.504 7.126-1.699-1.41-3.942-2.934-6.24-3.746.247-2.378.432-4.765.539-7.121 1.272.634 2.983 1.772 4.197 3.741zm1.512-14.215c-1.718-.751-3.784-1.259-5.904-1.027-.214-2.328-.553-4.493-1.027-6.453 2.198 1.034 5.358 3.195 6.931 7.48zm-13.501-31.098l-.403 5.239c-3.246.723-6.817 1.265-10.6 1.354-.567-.196-1.357-.461-2.277-.757 5.387-1.993 10.224-4.282 13.28-5.836zm-61.138 33.817a8.878 8.878 0 01-1.139-1.139l1.22-.485c2.904-1.166 5.644-2.267 8.281-2.414 5.925-.365 7.655 1.978 8.042 2.697.395.736.332 1.384.098 1.705-.986 1.34-2.566 2.147-4.699 2.408-4.873.557-10.673-1.829-11.803-2.772zm14.699 13.272a2.055 2.055 0 00-2.155-.169c-7.178 3.585-14.321 3.133-18.857 2.228 2.724-1.857 5.916-4.969 8.052-9.883 2.446.887 5.485 1.602 8.492 1.602.697 0 1.392-.044 2.076-.125 3.274-.398 5.89-1.809 7.565-4.075 1.261-1.716 1.343-4.086.212-6.178-.877-1.624-3.795-5.367-11.951-4.882-3.326.18-6.519 1.46-9.608 2.702-.496.196-.992.398-1.485.588-1.122-4.953 1.384-10.412 1.419-10.483a2.101 2.101 0 00-.153-2.054c-1.163-1.749-3.479-2.839-5.914-3.52 11.278-2.359 25.757 1.536 25.934 1.585.774.202 1.585-.022 2.114-.621a2.097 2.097 0 00.387-2.168c-.842-2.119-.88-3.596-.114-4.391 3.253-3.389 18.565-.038 28.391 3.416.234.082.496.06.727.12 9.682-.153 18.143-2.92 23.153-4.991-5.655 12.281-15.274 14.008-15.727 14.084a2.089 2.089 0 00-1.738 2.381c.174 1.144 1.245 1.945 2.386 1.754.221-.035 2.266-.391 5.05-1.73 4.143 11.461.898 36.942-3.503 49.163-4.924 13.681.538 22.369 3.882 26.097-13.214 7.688-23.545 14.22-26.436 27.64-.004.012-.014.02-.018.032-.069.219-.777 2.57-1.593 6.764-5.121-3.403-14.664-17.371-9.527-33.744 1.4-4.468 3.046-8.837 4.637-13.065 4.729-12.552 9.182-24.418 5.866-35.531 1.294-.928 2.506-1.968 3.554-3.19 3.648-4.25 4.923-9.682 3.789-16.149-.196-1.144-1.278-1.918-2.422-1.7a2.085 2.085 0 00-1.697 2.419c.918 5.247-.011 9.398-2.841 12.7-5.47 6.385-16.593 7.704-21.455 7.971l.36-2.615a2.088 2.088 0 00-.852-1.982zm18.78 95.395c-3.603 4.405-10.916 10.263-13.756 12.477-2.622-2.5-5.248-5.467-7.562-8.945 10.705-1.816 17.13-8.461 19.538-11.54.803.682 1.566 1.231 2.24 1.59.195.105.405.116.612.153a145.206 145.206 0 00-.801 6.044c-.088.076-.193.127-.271.221zm-25.461-38.132c1.685.474 6.054 1.59 10.086 1.59.738 0 1.4-.136 2.092-.221a35.573 35.573 0 00.338 7.414c-3.336 2.172-11.11 2.354-15.308 2.175.563-3.664 1.526-7.325 2.792-10.958zm5.236-12.486c1.542.368 4.565.983 7.618.983.792 0 1.58-.048 2.347-.146-.492 1.419-.996 2.826-1.451 4.276-.48 1.532-.812 3.034-1.079 4.521-.016.003-.031-.002-.046.001-3.105.767-8.434-.341-11.155-1.083a138.781 138.781 0 013.766-8.552zm4.782-9.51c.541-1.05 1.074-2.089 1.605-3.127 1.82.439 5.411 1.261 7.925 1.573-.359.96-.712 1.913-1.082 2.894-.556 1.476-1.115 2.993-1.672 4.504a2.02 2.02 0 00-.79.083c-2.48.765-6.353.242-8.862-.279.96-1.91 1.925-3.801 2.876-5.648zm6.638-13.652c1.506.57 3.917 1.328 6.351 1.328.076 0 .146-.033.222-.034-.63 2.188-1.387 4.443-2.206 6.744-1.165-.014-4.582-.692-7.467-1.361a139.546 139.546 0 003.1-6.677zm2.89-7.995c1.183.083 2.278.138 3.205.138.912 0 1.639-.06 2.301-.141a41.504 41.504 0 01-.737 4.959c-1.588.47-4.183-.139-6.105-.85.512-1.39.959-2.759 1.336-4.106zm-19.651 58.843c4.007 0 9.612-.456 13.484-2.256a38.195 38.195 0 002.009 5.582c-7.188 4.994-15.218 6.143-18.059 6.379a44.478 44.478 0 01-.645-5.385c-.084-1.46-.028-2.927.058-4.395.811.038 1.881.075 3.153.075zm17.437 7.057c1.08 1.835 2.23 3.477 3.386 4.852-1.779 2.358-8.051 9.567-18.857 10.738a44.054 44.054 0 01-3.562-8.82c3.646-.356 11.603-1.767 19.033-6.77zm7.136-74.733c.374 1.514.589 3.054.667 4.617-.531.17-2.516.187-4.659.074.172-1.073.271-2.128.315-3.169a33.185 33.185 0 003.677-1.522zm-28.174 116.373a2.12 2.12 0 00-1.248 1.062c-.172.343-3.716 7.23-13.065 5.884 3.307-2.179 6.336-5.846 6.336-11.452 0-.311-.068-.616-.202-.894-.136-.289-13.746-29.317-15.612-55.284a2.091 2.091 0 00-2.076-1.94h-.011a2.092 2.092 0 00-2.084 1.918c-.542 6.533-2.705 13.942-4.947 14.127-.825.087-2.757-.534-3.481-1.727-.539-.888-.316-2.125.659-3.672 3.806-6.048 6.097-11.044 4.909-15.8-.994-3.983-5.644-14.454-11.994-13.169l-1.656.376c-5.397 1.28-6.786 1.008-7.456-1.433-.166-.61-.076-1.106.289-1.613.915-1.275 3.258-2.228 5.832-2.375 4.83-.262 6.756 1.798 6.808 1.858a2.098 2.098 0 002.602.518 2.094 2.094 0 001.019-2.446c-.082-.267-2.059-6.554-10.469-7.579-1.888-.229-2.343-1.444-2.395-2.414-.082-1.607.934-3.514 2.779-3.934 3.307-.736 9.477 2.07 12.152 12.765.281 1.128 1.441 1.776 2.536 1.526a2.095 2.095 0 001.523-2.539c-1.369-5.474-3.588-9.227-6.067-11.756.043-.078.109-.135.142-.219 1.002-2.55 3.067-3.078 4.56-2.779 1.425.3 2.918 1.515 2.825 4.026-.259 6.93 5.219 17.614 8.069 21.532 2.158 2.964 2.7 6.173 3.449 10.619.335 1.983.703 4.152 1.259 6.576 2.774 12.073 10.065 19.387 11.781 20.978 2.264 14.522 10.444 24.662 17.944 31.115-3.232 2.293-9.654 6.569-14.71 8.145zm18.589-10.458c2.416-1.901 6.671-5.378 10.237-8.855-.3 4.075-.52 8.551-.539 13.636-.002.594-.052 1.16-.07 1.745-2.067-1.111-5.651-3.241-9.628-6.526zm129.23-13.944l3.644-10.791a88.352 88.352 0 0110.077 4.297l-6.96 9.714a43.032 43.032 0 00-6.761-3.22zm-4.001-1.238a38.926 38.926 0 00-5.935-1.065l1.354-11.805c.487.091.985.143 1.468.247 2.338.504 4.581 1.116 6.775 1.778l-3.662 10.845zm-10.126-1.242a42.278 42.278 0 00-6.256.541l-1.15-13.22c2.957-.04 5.907.084 8.813.411l-1.407 12.268zm-11.59-12.507l1.207 13.888c-2.159.549-4.339 1.286-6.532 2.16l-3.692-15.064a101.04 101.04 0 019.017-.984zm-6.439 40.192c-1.678-.591-3.251-1.392-4.739-2.281l7.48-14.196c.175.2.366.37.511.614.744 1.253.855 2.904.332 4.909-.696 2.667-1.943 6.592-3.584 10.954zm-9.271-13.912a67.334 67.334 0 018.475-4.822l-7.427 14.096a45.774 45.774 0 01-6.326-5.962 122.797 122.797 0 005.278-3.312zm2.558-24.592l3.939 16.071a70.607 70.607 0 00-6.089 3.325l-6.059-17.577a135.28 135.28 0 018.209-1.819zm-12.256 2.914l6.385 18.524c.029.083.111.12.148.197a119.616 119.616 0 01-7.554 4.536l-6.186-21a157.894 157.894 0 017.207-2.257zm-11.162 3.647l6.36 21.589c.004.015.021.022.026.037a136.682 136.682 0 01-7.891 3.74l-6.918-21.593c.088-.15.186-.345.271-.485 1.146-.516 4.043-1.776 8.152-3.288zm-11.088 9.163l5.706 17.809c-4.356 1.728-7.757 2.829-9.45 3.334-1.088-6.922 1.187-15.115 3.744-21.143zm-1.232 38.273c1.417-3.405.997-7.6-1.28-12.809-.041-.093-.082-.185-.12-.283 3.511-1.026 13.78-4.378 25.595-10.9 2.111 2.556 8.356 9.385 16.728 12.383-4.753 11.627-11.851 24.66-19.002 25.818-5.993.948-9.238-2.626-12.37-6.108-2.732-3.029-5.835-6.462-10.237-4.141-.343.181-.601.413-.901.62a16.492 16.492 0 00-1.367-.699c1.203-1.05 2.285-2.267 2.954-3.881zm70.836-28.353c.613 3.808 3.073 7.099 7.314 9.785 2.476 1.564 3.754 3.285 3.8 5.116.049 1.956-1.229 3.994-2.675 5.644a4.33 4.33 0 00-.689-1.019c-2.67-2.964-8.475-1.629-9.614-1.329a2.056 2.056 0 00-.79.398c-2.144 1.743-21.044 17.244-23.953 23.787-1.09 2.452-2.03 4.996-.558 6.821 1.534 1.907 4.468 1.694 9.698.61.449-.093.774-.12.992-.12.251 0 .373 0 .373.027.177.3.294 1.983-1.4 5.808-.308.692-1.087 1.057-1.869.899-5.582-1.155-16.288-2.484-25.207 1.645-4.688 2.174-7.998 2.332-11.828 2.517-3.525.169-7.519.365-13.043 2.158-1.272.409-5.492 1.613-6.263-.392-.645-1.685.611-4.634 1.944-5.499 8.234.32 11.59.323 11.59.323a2.092 2.092 0 000-4.184c-.035 0-3.506 0-12.12-.349-1.487-.06-4.067-.42-4.623-2.174-.414-1.302.316-3.182 1.629-4.184 1.139-.883 4.977.087 8.728 1.705 1.19.752 2.43 1.357 3.631 1.754 1.019.365 2.144-.153 2.577-1.144a2.087 2.087 0 00-.904-2.67 44.426 44.426 0 00-3.424-1.705c-2.435-1.651-4.364-4.015-4.514-5.862-.054-.665.079-1.536 1.626-2.348 1.343-.703 2.305.06 5.179 3.242 3.337 3.699 7.895 8.723 16.149 7.431 16.073-2.604 27.386-43.32 27.492-43.728.815-3.122.553-5.846-.782-8.096-.771-1.301-1.763-2.147-2.71-2.792 7.892-2.84 16.789-3.811 25.924-.647-1.046 1.918-2.251 5.03-1.68 8.572zm14.059-6.862l7.153-9.985a93.413 93.413 0 017.352 4.587l-9.177 9.482c-.713-.555-1.404-1.032-2.128-1.63a53.312 53.312 0 00-3.2-2.454zm17.933 12.241l9.189-7.322c1.77 1.71 3.385 3.381 4.81 4.957l-7.431 5.281a62.846 62.846 0 01-6.568-2.916zm-3.994-2.166a80.634 80.634 0 01-5.267-3.427l9.264-9.573a99.973 99.973 0 016.082 4.969l-10.079 8.031zm15.542 6.677l5.197-3.694a90.14 90.14 0 014.076 5.278c-2.586-.152-5.737-.636-9.273-1.584zm43.426-70.993c-3.697 24.751-23.531 32.955-29.436 34.871-4.965-11.168-13.195-20.563-18.672-23.402a2.108 2.108 0 00-2.82.894 2.094 2.094 0 00.896 2.822c4.173 2.163 12.624 10.962 17.503 22.986 5.266 12.972 13.686 20.328 25.021 21.864 2.28.305 3.847 1.231 4.795 2.822 1.389 2.343 1.318 5.862.809 8.957-2.67-1.694-7.015-2.239-9.382-.425-1.477 1.128-1.899 2.92-1.133 4.795.518 1.269.757 5.824.989 10.232.667 12.755 1.515 22.785 5.704 26.179 1.21.981 2.667 1.384 4.173 1.128 8.271-1.308 11.289.447 13.258 3.492.12.185.485.746-.496 1.787-1.487 1.569-4.607 2.49-6.707 1.302-4.95-2.833-8.423-1.64-14.168.338-1.005.343-2.106.719-3.318 1.117-5.704 1.842-11.589.926-16.323.185-1.389-.212-2.653-.409-3.757-.512-2.697-.256-5.154 1.084-7.532 2.386-2.879 1.575-5.598 3.084-8.802 2.108-1.487-.447-1.97-1.193-2.207-1.722-.703-1.573-.184-3.855.318-5.305 1.794-.316 3.408-.257 5.182-.072 2.561.256 5.476.561 9.148-.79a2.093 2.093 0 001.24-2.686c-.4-1.084-1.596-1.624-2.689-1.237-2.76 1.008-4.857.806-7.268.55-2.198-.223-4.677-.474-7.658.316-.455.12-1.141.191-1.667-.659-.692-1.111-.662-3.165.755-4.767 1.09-1.237 3.201-1.199 5.151-.785 1.092.61 2.482 1.111 4.277 1.455 1.024.218 2.04-.398 2.375-1.384a2.094 2.094 0 00-1.046-2.544c-.158-.076-1.803-.883-3.996-1.438-1.155-.839-1.566-2.021-2.185-3.792l-.466-1.302c-.278-.741-.635-1.302-1.024-1.727 1.005-.436 1.989-.632 2.945-.572 2.152.147 4.075 1.607 5.715 4.348 5.429 9.044 14.433 9.148 14.814 9.148.869 0 1.648-.539 1.956-1.351 6.767-17.881-2.28-35.169-2.67-35.899-.006-.012-.018-.018-.024-.029-.005-.01-.003-.021-.009-.031-.804-1.389-20.112-34.03-60.997-42.84-29.451-6.369-65.039 10.248-66.54 10.962a2.063 2.063 0 00-.864.752c-4.233 6.543-11.292 23.907-6.088 35.801 1.773 4.054 2.196 7.257 1.253 9.529-.632 1.52-1.863 2.741-3.958 3.868-.281-2.615-1.182-6.02-3.874-7.502-2.632-1.438-6.053-.637-10.177 2.392-9.761 7.175-23.687 24.125-22.417 31.464.311 1.803 1.441 3.084 3.179 3.607 1.681.501 3.751.932 5.93 1.378 4.31.888 9.393 1.929 11.648 3.797-6.086-.779-17.876-1.858-22.537.757-5.497 3.095-14.947 5.067-21.526 2.686-2.392-.997-7.747-1.787-10.861 2.43-1.16 1.575-2.983 2.005-4.16 1.607-1.368-.447-1.654-1.869-1.654-2.98 0-4.854 4.672-5.23 6.102-5.23a2.092 2.092 0 000-4.184c-3.204 0-5.84 1.043-7.65 2.821-1.672-.874-2.753-1.906-3.145-3.099-.537-1.629.234-3.318.744-4.179.969-1.647 2.684-2.521 3.734-2.943 2.375 2.231 5.138 3.827 6.525 4.436a2.112 2.112 0 002.757-1.079 2.096 2.096 0 00-1.079-2.757c-2.8-1.226-7.925-5.007-8.167-8.178-.09-1.16.981-2.043 2.087-2.321.798-.202 2.809-.36 4.018 2.435 3.059 7.077 13.008 12.057 13.43 12.264.294.147.61.218.926.218.509 0 1.011-.185 1.406-.539.885-.806 21.722-20.05 21.842-51.53.072-19.03 2.718-30.901 3.7-34.676 3.698-.178 13.151-1.316 21.64-7.826 2.457 4.353 8.693 12.804 20.17 13.092h.052a2.091 2.091 0 001.766-3.214c-.041-.065-3.255-5.209-2.523-9.644 2.637 2.544 7.44 5.988 14.283 6.233h.076c.362 0 .687-.118.986-.283.136-.076.256-.133.369-.241.268-.232.464-.528.587-.872.011-.032.044-.048.054-.08.027-.093 2.923-9.208 11.185-13.474 5.277-2.73 11.64-2.899 18.938-.496.18.059.361.056.541.065.041.003.072.038.113.038.032 0 .065-.012.097-.013.054-.002.105-.014.159-.021.093-.012.186-.011.278-.037.064-.017.11-.062.172-.084.138-.05.263-.112.388-.191.11-.068.21-.139.303-.225.099-.09.181-.189.262-.298a2.03 2.03 0 00.21-.341c.027-.057.074-.097.096-.157.279-.761 4.606-12.06 15.397-18.728.039.006.07.031.109.035.259.027 26.04 2.882 40.309 9.851 4.35 2.125 9.66 3.176 14.915 3.176 5.933 0 11.793-1.34 16.105-3.983 4.707-2.882 7.238-7.023 7.323-11.959.172-10.123-6.059-17.914-12.008-20.099-3.732-1.368-7.325-.545-9.597 2.228-2.828 3.443-2.661 7.906.398 10.613 3.174 2.811 9.036 3.258 14.901-1.929a19.11 19.11 0 011.605 4.374c-6.617 4.572-12.788 6.097-17.828 4.398-4.786-1.613-7.641-5.759-8.72-9.099-.847-2.621-.37-5.879 1.302-8.93 2.354-4.293 6.642-7.524 11.763-8.859 5.339-1.4 14.098-.196 20.712 5.743 4.91 4.408 10.274 12.913 7.956 28.419zm-19.156-19.549c-4.111 3.868-7.895 3.955-9.761 2.299-1.373-1.215-1.348-3.111.063-4.822.836-1.019 1.871-1.362 2.877-1.362.725 0 1.436.18 2.046.403 1.655.611 3.32 1.821 4.775 3.482z" />
    </g>
  </svg>
);

export default SvgWf;
