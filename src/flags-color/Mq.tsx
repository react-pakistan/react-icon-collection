import * as React from "react";
import { IIconProps } from "../styled";

const SvgMq = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#41479b" d="M0 0h512v512H0z" />
    <g fill="#f5f5f5">
      <path d="M512 238.345H273.655V0h-35.31v238.345H0v35.31h238.345V512h35.31V273.655H512z" />
      <path d="M172.411 161.284c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.979-3.087-3.364-4.691-4.225-12.639-5.807-23.22-4.667-33.318-4.709-9.973.257-19.302 1.977-26.876 3.635-2.056.414-3.837.723-5.742 1.081.942-1.947 4.395-4.381 9.045-5.857 11.335-3.872 24.276-5.426 36.994-7.906 3.212-.629 6.468-1.366 9.802-2.314 1.796-.615 3.306-1.095 5.42-2.076a22.057 22.057 0 003.834-2.763c1.216-1.094 1.124-1.4 1.749-2.138 2.887-5.498.154-9.411-2.138-11.455-2.209-1.813-4.07-2.522-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.446-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.03-.541-4.896-2.545-4.471-2-5.239-.453 7.174-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.827-2.905 7.468-7.304.519-.912.496-1.135.769-1.733l.302-.759c.656-2.339.294-1.708.447-2.723.309-2.454-.654-5.076-2.178-7.262-3.111-3.362-6.204-4.325-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.038.002a6.53 6.53 0 00-6.138 6.9c.02.352.185.646.258.98-5.102 1.405-13.176 2.844-21.162.961a2.157 2.157 0 00-2.62 1.616 2.173 2.173 0 001.616 2.62c3.138.74 6.251 1.029 9.22 1.029 6.305 0 11.691-1.283 15.369-2.41 1.186.88 2.628 1.435 4.219 1.343l17.893-1.047c5.331-.192 12.495-.473 18.406.915.489.077.752.229 1.075.366.047-.524-.955.953-2.516 1.712-1.517.979-3.491 1.917-5.545 2.849-4.199 1.903-9.006 3.539-14.333 6.405-2.572 1.518-5.753 3.06-8.394 7.571-1.234 2.09-1.821 5.469-1.172 7.851l.192.971.11.481.058.238c-.409-.848.622 1.434.541 1.228l.533.888c.473.676.4.956 1.535 2.136.911.987 1.94 1.93 3.001 2.755.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.709 2.035 3.08 1.084 6.079 1.822 9.074 2.483l17.695 3.33a67.369 67.369 0 017.055 1.772c-2.791 1.007-6.697 2.02-10.066 2.67-12.255 2.587-25.251 4.151-38.468 8.792-3.309 1.259-6.697 2.764-10.02 5.308-3.13 2.371-6.417 7.1-5.997 12.294-1.122.156-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.621-.548a3.077 3.077 0 00-3.132 5.299s1.922 1.306 5.353 2.057c3.414.773 8.217 1.126 14.066.666 1.611-.111 3.498-.351 5.27-.539 1.225 1.766 2.651 3.715 3.981 4.658 3.088 2.591 6.36 4.248 9.62 5.7 13.123 5.075 26.239 6.142 39.027 5.639 6.42-.483 12.739-1.231 19.227-4.126 3.025-1.411 7.177-3.633 8.459-10.061-.003-.817.138-1.192.013-2.367zm-9.439 2.025c-.167-.95-.69 1.205-3.141 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.68-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.94-1.264 16.214-2.755 25.72-2.911 9.053-.166 20.581-.04 28.236 3.767.89.478 1.278.978 1.572 1.279 0 0-.254-.304.029-.499.126.193-.031 1.278-.032 1.876zm283.094-2.025c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.979-3.087-3.364-4.691-4.225-12.639-5.807-23.22-4.667-33.318-4.709-9.973.257-19.302 1.977-26.876 3.635-2.056.414-3.837.723-5.742 1.081.942-1.947 4.395-4.381 9.045-5.857 11.335-3.872 24.276-5.426 36.994-7.906 3.212-.629 6.468-1.366 9.802-2.314 1.796-.615 3.306-1.095 5.42-2.076a22.057 22.057 0 003.834-2.763c1.216-1.094 1.124-1.4 1.749-2.138 2.887-5.498.154-9.411-2.138-11.455-2.209-1.813-4.07-2.522-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.446-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.03-.541-4.896-2.545-4.47-2-5.239-.453 7.174-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.827-2.905 7.468-7.304.519-.912.496-1.135.769-1.733l.302-.759c.656-2.339.294-1.708.447-2.723.309-2.454-.654-5.076-2.178-7.262-3.111-3.362-6.204-4.325-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.704.832-.435.02-.038.002a6.53 6.53 0 00-6.138 6.9c.02.352.185.646.258.98-5.102 1.405-13.176 2.844-21.162.961a2.157 2.157 0 00-2.62 1.616 2.173 2.173 0 001.616 2.62c3.138.74 6.251 1.029 9.22 1.029 6.306 0 11.691-1.283 15.369-2.41 1.186.88 2.628 1.435 4.219 1.343l17.893-1.047c5.331-.192 12.495-.473 18.406.915.489.077.752.229 1.075.366.047-.524-.955.953-2.516 1.712-1.517.979-3.491 1.917-5.545 2.849-4.199 1.903-9.006 3.539-14.333 6.405-2.572 1.518-5.753 3.06-8.394 7.571-1.234 2.09-1.821 5.469-1.172 7.851l.192.971.11.481.058.238c-.409-.848.622 1.434.541 1.228l.533.888c.473.676.4.956 1.535 2.136.911.987 1.94 1.93 3.001 2.755.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.709 2.035 3.08 1.084 6.079 1.822 9.074 2.483l17.695 3.33a67.369 67.369 0 017.055 1.772c-2.791 1.007-6.697 2.02-10.066 2.67-12.255 2.587-25.251 4.151-38.468 8.792-3.308 1.259-6.697 2.764-10.02 5.308-3.13 2.371-6.417 7.1-5.997 12.294-1.122.156-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.621-.548a3.077 3.077 0 00-3.132 5.299s1.922 1.306 5.353 2.057c3.414.773 8.217 1.126 14.066.666 1.611-.111 3.498-.351 5.27-.539 1.225 1.766 2.651 3.715 3.981 4.658 3.088 2.591 6.36 4.248 9.62 5.7 13.123 5.075 26.239 6.142 39.027 5.639 6.42-.483 12.739-1.231 19.227-4.126 3.025-1.411 7.177-3.633 8.459-10.061-.005-.817.136-1.192.011-2.367zm-9.439 2.025c-.167-.95-.69 1.205-3.141 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.68-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.94-1.264 16.214-2.755 25.72-2.911 9.053-.166 20.581-.04 28.236 3.767.89.478 1.278.978 1.572 1.279 0 0-.254-.304.029-.499.127.193-.031 1.278-.032 1.876zM172.411 430.333c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.979-3.087-3.364-4.691-4.225-12.639-5.807-23.22-4.667-33.318-4.709-9.973.257-19.302 1.977-26.876 3.635-2.056.414-3.837.723-5.742 1.081.942-1.947 4.395-4.381 9.045-5.857 11.335-3.872 24.276-5.426 36.994-7.906 3.212-.629 6.468-1.366 9.802-2.314 1.796-.615 3.306-1.095 5.42-2.076a22.057 22.057 0 003.834-2.763c1.216-1.094 1.124-1.4 1.749-2.138 2.887-5.497.154-9.411-2.138-11.455-2.209-1.813-4.07-2.522-5.841-3.25-3.438-1.206-6.623-1.961-9.697-2.603l-17.446-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.03-.541-4.896-2.545-4.471-2-5.239-.453 7.174-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.827-2.905 7.468-7.304.519-.912.496-1.135.769-1.733l.302-.759c.656-2.339.294-1.708.447-2.723.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.204-4.325-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.038.002a6.53 6.53 0 00-6.138 6.9c.02.352.185.646.258.98-5.102 1.405-13.176 2.844-21.162.961a2.157 2.157 0 00-2.62 1.616 2.173 2.173 0 001.616 2.62c3.138.74 6.251 1.029 9.22 1.029 6.305 0 11.691-1.283 15.369-2.41 1.186.88 2.628 1.435 4.219 1.343l17.893-1.047c5.331-.192 12.495-.473 18.406.915.489.077.752.229 1.075.366.047-.524-.955.953-2.516 1.712-1.517.979-3.491 1.917-5.545 2.849-4.199 1.903-9.006 3.539-14.333 6.405-2.572 1.518-5.753 3.06-8.394 7.571-1.234 2.09-1.821 5.469-1.172 7.851l.192.971.11.481.058.238c-.409-.848.622 1.434.541 1.228l.533.888c.473.676.4.956 1.535 2.136.911.987 1.94 1.93 3.001 2.755.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.709 2.035 3.08 1.084 6.079 1.822 9.074 2.483l17.695 3.33a67.369 67.369 0 017.055 1.772c-2.791 1.007-6.697 2.02-10.066 2.67-12.255 2.587-25.251 4.151-38.468 8.792-3.309 1.259-6.697 2.764-10.02 5.308-3.13 2.371-6.417 7.1-5.997 12.294-1.122.156-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.621-.548a3.077 3.077 0 00-3.132 5.299s1.922 1.306 5.353 2.057c3.414.773 8.217 1.126 14.066.666 1.611-.111 3.498-.351 5.27-.539 1.225 1.766 2.651 3.715 3.981 4.658 3.088 2.591 6.36 4.248 9.62 5.699 13.123 5.075 26.239 6.142 39.027 5.639 6.42-.483 12.739-1.231 19.227-4.126 3.025-1.411 7.177-3.633 8.459-10.06-.003-.816.138-1.192.013-2.367zm-9.439 2.026c-.167-.95-.69 1.205-3.141 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.68-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.94-1.264 16.214-2.755 25.72-2.911 9.053-.166 20.581-.04 28.236 3.767.89.478 1.278.978 1.572 1.279 0 0-.254-.304.029-.499.126.193-.031 1.277-.032 1.876zm283.094-2.026c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.979-3.087-3.364-4.691-4.225-12.639-5.807-23.22-4.667-33.318-4.709-9.973.257-19.302 1.977-26.876 3.635-2.056.414-3.837.723-5.742 1.081.942-1.947 4.395-4.381 9.045-5.857 11.335-3.872 24.276-5.426 36.994-7.906 3.212-.629 6.468-1.366 9.802-2.314 1.796-.615 3.306-1.095 5.42-2.076a22.057 22.057 0 003.834-2.763c1.216-1.094 1.124-1.4 1.749-2.138 2.887-5.497.154-9.411-2.138-11.455-2.209-1.813-4.07-2.522-5.841-3.25-3.438-1.206-6.623-1.961-9.697-2.603l-17.446-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.03-.541-4.896-2.545-4.47-2-5.239-.453 7.174-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.827-2.905 7.468-7.304.519-.912.496-1.135.769-1.733l.302-.759c.656-2.339.294-1.708.447-2.723.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.204-4.325-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.704.832-.435.02-.038.002a6.53 6.53 0 00-6.138 6.9c.02.352.185.646.258.98-5.102 1.405-13.176 2.844-21.162.961a2.157 2.157 0 00-2.62 1.616 2.173 2.173 0 001.616 2.62c3.138.74 6.251 1.029 9.22 1.029 6.306 0 11.691-1.283 15.369-2.41 1.186.88 2.628 1.435 4.219 1.343l17.893-1.047c5.331-.192 12.495-.473 18.406.915.489.077.752.229 1.075.366.047-.524-.955.953-2.516 1.712-1.517.979-3.491 1.917-5.545 2.849-4.199 1.903-9.006 3.539-14.333 6.405-2.572 1.518-5.753 3.06-8.394 7.571-1.234 2.09-1.821 5.469-1.172 7.851l.192.971.11.481.058.238c-.409-.848.622 1.434.541 1.228l.533.888c.473.676.4.956 1.535 2.136.911.987 1.94 1.93 3.001 2.755.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.709 2.035 3.08 1.084 6.079 1.822 9.074 2.483l17.695 3.33a67.369 67.369 0 017.055 1.772c-2.791 1.007-6.697 2.02-10.066 2.67-12.255 2.587-25.251 4.151-38.468 8.792-3.308 1.259-6.697 2.764-10.02 5.308-3.13 2.371-6.417 7.1-5.997 12.294-1.122.156-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.621-.548a3.077 3.077 0 00-3.132 5.299s1.922 1.306 5.353 2.057c3.414.773 8.217 1.126 14.066.666 1.611-.111 3.498-.351 5.27-.539 1.225 1.766 2.651 3.715 3.981 4.658 3.088 2.591 6.36 4.248 9.62 5.699 13.123 5.075 26.239 6.142 39.027 5.639 6.42-.483 12.739-1.231 19.227-4.126 3.025-1.411 7.177-3.633 8.459-10.06-.005-.816.136-1.192.011-2.367zm-9.439 2.026c-.167-.95-.69 1.205-3.141 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.68-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.94-1.264 16.214-2.755 25.72-2.911 9.053-.166 20.581-.04 28.236 3.767.89.478 1.278.978 1.572 1.279 0 0-.254-.304.029-.499.127.193-.031 1.277-.032 1.876z" />
    </g>
  </svg>
);

export default SvgMq;
