import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import parentsPageCss from './parentsPageCss';

const ParentsPage = () => {
  return (
    <div css={parentsPageCss.container}>
      ParentsPage (border black)
      <Outlet />
    </div>
  );
};

export default ParentsPage;
