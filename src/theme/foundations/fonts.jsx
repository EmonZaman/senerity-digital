import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
       @font-face {
        font-family: 'MyriadPro';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/MYRIADPRO-REGULAR.woff') format('woff');
      }
      `}
  />
);

export const fonts = {
  heading: "MyriadPro",
  body: "MyriadPro",
};
