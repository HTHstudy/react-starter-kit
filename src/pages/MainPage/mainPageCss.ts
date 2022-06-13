import { css } from '@emotion/react';
import { flexCenter } from '@constants/styles';

export default {
  container: css`
    ${flexCenter}
    flex-direction: column;
  `,
  imageResize: css`
    width: 300px;
    height: 300px;
  `,
};
