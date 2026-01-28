import { SVGProps } from 'react';

export const MenuIcon = (
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
      d="M3 7H21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M3 17H21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
