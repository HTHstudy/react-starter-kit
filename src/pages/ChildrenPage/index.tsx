import React from 'react';
import { useParams } from 'react-router-dom';

const ChildrenPage = () => {
  const params = useParams();
  return (
    <div>
      ChildrenPage
      <div>current params id: {params.id}</div>
    </div>
  );
};

export default ChildrenPage;
