import { css } from '@emotion/react';

export default {
  pageMoveContainer: css`
    display: flex;
    gap: 10px;

    & > button {
      background-color: tomato;
    }
  `,
  countContainer: css`
    display: flex;
    gap: 10px;
    & > button {
      background-color: skyblue;
    }
  `,
};
