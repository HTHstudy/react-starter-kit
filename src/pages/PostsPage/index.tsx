import React, { useCallback } from 'react';
import postsPageCss from './postsPageCss';
import usePosts from '@store/server/hooks/usePosts';
import { useQueryClient } from 'react-query';
import { useInternalRouter } from '@pages/routing';

const PostsPage = () => {
  const queryClient = useQueryClient();
  const router = useInternalRouter();
  const { status, data, error, isFetching } = usePosts();

  const goPostPage = useCallback((postId: number) => router.push(`/posts/${postId}`), []);

  return (
    <div css={postsPageCss.container}>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data?.map((post) => {
                const visited = queryClient.getQueryData(['post', post.id]);
                return (
                  <p
                    key={post.id}
                    onClick={() => goPostPage(post.id)}
                    css={[postsPageCss.listWrap, visited ? postsPageCss.visited : null]}
                  >
                    {post.title}
                  </p>
                );
              })}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
