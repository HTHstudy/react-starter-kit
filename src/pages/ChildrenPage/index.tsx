import React from 'react';
import { useParams } from 'react-router-dom';
import childrenPageCss from './childrenPageCss';

const ChildrenPage = () => {
  const params = useParams();
  return (
    <div css={childrenPageCss.container}>
      ChildrenPage (border red)
      <div>current params id: {params.id}</div>
    </div>
  );
};

export default ChildrenPage;
