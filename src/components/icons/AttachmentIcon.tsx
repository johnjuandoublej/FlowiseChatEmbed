import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#FFD5BE';
export const AttachmentIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={props.class}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
  </svg>
);
