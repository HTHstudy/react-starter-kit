import React, { useCallback } from 'react';
import { useInternalRouter } from '@pages/routing';
import { useCountValue, useCount } from '@store/client/hooks/useCount';
import examplePageCss from './examplePageCss';

const ExamplePage = () => {
  const router = useInternalRouter();
  const goMainPage = useCallback(() => router.push('/main'), []);
  const goParentsPage = useCallback(() => router.push('/parents/id_1'), []);
  const goPostsPage = useCallback(() => router.push('/posts'), []);
  const goTodoPage = useCallback(() => router.push('/todo'), []);
  const count = useCountValue();
  const { setCount } = useCount();
  const addCount = () => setCount(count + 1);
  const subtractCount = () => setCount(count - 1);

  return (
    <div>
      ExamplePage
      <div css={examplePageCss.pageMoveContainer}>
        <button onClick={goMainPage}>Go MainPage</button>
        <button onClick={goParentsPage}>Go ParentsPage</button>
        <button onClick={goPostsPage}>Go PostPage</button>
        <button onClick={goTodoPage}>Go TodoPage</button>
      </div>
      <div css={examplePageCss.countContainer}>
        <button onClick={addCount}>count ++</button>
        <button onClick={subtractCount}>count --</button>
      </div>
      count : {count}
    </div>
  );
};

export default ExamplePage;
