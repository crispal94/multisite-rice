import { SVGProps } from 'react';

export const UserIcon = (
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
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
