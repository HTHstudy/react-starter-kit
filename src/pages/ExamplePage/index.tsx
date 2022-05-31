import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useInternalRouter } from '@pages/routing';
import { useCountValue, useCount } from '@store/client/hooks/useCount';

const LoginPage = () => {
  const router = useInternalRouter();
  const goMainPage = useCallback(() => router.push('/main'), []);
  const goParentsPage = useCallback(() => router.push('/parents/id_1'), []);
  const count = useCountValue();
  const { setCount } = useCount();
  const addCount = () => setCount(count + 1);
  const subtractCount = () => setCount(count - 1);

  return (
    <div>
      LoginPage
      {count}
      <div
        css={css`
          display: flex;
          gap: 10px;
          & > button {
            background-color: tomato;
          }
        `}
      >
        <button onClick={goMainPage}>Go MainPage</button>
        <button onClick={goParentsPage}>Go ParentsPage</button>
      </div>
      <div
        css={css`
          display: flex;
          gap: 10px;
          & > button {
            background-color: skyblue;
          }
        `}
      >
        <button onClick={addCount}>count ++</button>
        <button onClick={subtractCount}>count --</button>
      </div>
    </div>
  );
};

export default LoginPage;
