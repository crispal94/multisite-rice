import { SVGProps } from 'react';

export const ShoppingBagIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={props.size || 24}
    role="presentation"
    viewBox="0 0 24 24"
    width={props.size || 24}
    {...props}
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M9 10C9 10 9 6 12 6C15 6 15 10 15 10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
