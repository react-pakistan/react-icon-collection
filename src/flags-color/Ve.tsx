import * as React from "react";
import { IIconProps } from "../styled";

const SvgVe = (props: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#FFE15A" d="M0 0h512v171.02H0z" />
    <path fill="#FF4B55" d="M0 340.98h512V512H0z" />
    <path fill="#41479B" d="M0 170.5h512v171H0z" />
    <path
      d="M153.86 284.665l2.902 8.701 9.172.071c1.188.009 1.68 1.525.725 2.23l-7.379 5.449 2.767 8.745c.358 1.132-.931 2.069-1.897 1.378l-7.462-5.334-7.462 5.334c-.966.691-2.255-.246-1.897-1.378l2.767-8.745-7.379-5.449c-.955-.705-.463-2.221.725-2.23l9.172-.071 2.902-8.701c.375-1.126 1.968-1.126 2.344 0zm17.819-27.7l-1.555 9.04 8.05 4.398c1.042.569.76 2.138-.415 2.308l-9.078 1.314-1.695 9.015c-.219 1.167-1.798 1.383-2.323.318l-4.055-8.227-9.097 1.173c-1.178.152-1.871-1.283-1.02-2.111l6.572-6.399-3.927-8.289c-.508-1.073.642-2.176 1.693-1.623l8.117 4.273 6.67-6.297c.86-.816 2.264-.063 2.063 1.107zm22.549-24.243l-4.305 8.1 6.27 6.695c.812.867.053 2.268-1.117 2.062l-9.034-1.591-4.43 8.032c-.574 1.04-2.141.751-2.306-.425l-1.278-9.083-9.008-1.731c-1.166-.224-1.376-1.804-.309-2.325l8.244-4.022-1.137-9.102c-.147-1.178 1.29-1.866 2.115-1.012l6.373 6.597 8.305-3.894c1.076-.504 2.174.65 1.617 1.699zm27.137-15.042l-6.329 6.64 4.233 8.137c.548 1.054-.56 2.198-1.631 1.685l-8.27-3.967-6.431 6.541c-.833.847-2.264.147-2.106-1.031l1.217-9.092-8.208-4.095c-1.063-.53-.839-2.108.329-2.322l9.023-1.652 1.358-9.072c.176-1.174 1.745-1.449 2.31-.404l4.359 8.071 9.047-1.512c1.172-.194 1.918 1.214 1.099 2.073zm31.19-6.969l-7.876 4.702 1.899 8.974c.246 1.162-1.129 1.968-2.023 1.186l-6.905-6.038-7.948 4.579c-1.029.593-2.22-.465-1.753-1.557l3.608-8.433-6.811-6.144c-.882-.795-.244-2.256.939-2.149l9.135.826 3.739-8.376c.484-1.084 2.07-.929 2.334.229l2.038 8.943 9.122.967c1.18.126 1.522 1.682.502 2.291zm105.585 73.954l-2.902 8.701-9.172.071c-1.188.009-1.68 1.525-.725 2.23l7.379 5.449-2.767 8.745c-.358 1.132.931 2.069 1.897 1.378l7.462-5.334 7.462 5.334c.966.691 2.255-.246 1.897-1.378l-2.767-8.745 7.379-5.449c.955-.705.463-2.221-.725-2.23l-9.172-.071-2.902-8.701c-.375-1.126-1.968-1.126-2.344 0zm-17.819-27.7l1.555 9.04-8.05 4.398c-1.042.569-.76 2.138.415 2.308l9.078 1.314 1.695 9.015c.219 1.167 1.798 1.383 2.323.318l4.055-8.227 9.097 1.173c1.178.152 1.871-1.283 1.02-2.111l-6.572-6.399 3.927-8.289c.508-1.073-.642-2.176-1.693-1.623l-8.117 4.273-6.67-6.297c-.86-.816-2.264-.063-2.063 1.107zm-22.549-24.243l4.305 8.1-6.27 6.695c-.812.867-.053 2.268 1.117 2.062l9.034-1.591 4.43 8.032c.574 1.04 2.141.751 2.306-.425l1.278-9.083 9.008-1.731c1.166-.224 1.376-1.804.309-2.325l-8.244-4.022 1.137-9.102c.147-1.178-1.29-1.866-2.115-1.012l-6.373 6.597-8.305-3.894c-1.076-.504-2.174.65-1.617 1.699zm-27.137-15.042l6.329 6.64-4.233 8.137c-.548 1.054.56 2.198 1.631 1.685l8.27-3.967 6.431 6.541c.833.847 2.264.147 2.106-1.031l-1.217-9.092 8.208-4.095c1.063-.53.839-2.108-.329-2.322l-9.023-1.652-1.358-9.072c-.176-1.174-1.745-1.449-2.31-.404l-4.359 8.071-9.047-1.512c-1.172-.194-1.918 1.214-1.099 2.073zm-31.19-6.969l7.876 4.702-1.899 8.974c-.246 1.162 1.129 1.968 2.023 1.186l6.905-6.038 7.948 4.579c1.029.593 2.22-.465 1.753-1.557l-3.608-8.433 6.811-6.144c.882-.795.244-2.256-.939-2.149l-9.135.826-3.739-8.376c-.484-1.084-2.07-.929-2.334.229l-2.038 8.943-9.121.967c-1.181.126-1.523 1.682-.503 2.291z"
      fill="#F5F5F5"
    />
  </svg>
);

export default SvgVe;
