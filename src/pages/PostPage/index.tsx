import React, { useCallback } from 'react';
import postPageCss from './postPageCss';
import { useParams } from 'react-router-dom';
import usePost from '@store/server/hooks/usePost';
import { useInternalRouter } from '@pages/routing';

const PostPage = () => {
  const { postId } = useParams();
  const router = useInternalRouter();
  const { status, data, error, isFetching } = usePost(Number(postId));
  const goBack = useCallback(() => router.goBack(), []);

  return (
    <div css={postPageCss.container}>
      <h1>Post Page</h1>

      <button css={postPageCss.backButton} onClick={goBack}>
        Back
      </button>

      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <div css={postPageCss.postContainer}>
          <h1>{data?.title}</h1>
          <div>
            <p>{data?.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
