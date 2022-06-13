import React from 'react';
import mainPageCss from './mainPageCss';
import joker_image from '@asset/joker.jpg';

const MainPage = () => {
  return (
    <div css={mainPageCss.container}>
      MainPage
      <div>
        <img css={mainPageCss.imageResize} src={joker_image} alt="joker" />
      </div>
    </div>
  );
};

export default MainPage;
