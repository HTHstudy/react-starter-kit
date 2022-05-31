import React from 'react';
import { css, Global } from '@emotion/react';
import normalize from 'emotion-normalize';

// Write global style here
const GlobalStyle = () => (
  <Global
    styles={css`
      ${normalize}
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }
      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
