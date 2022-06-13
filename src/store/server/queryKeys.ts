export const queryKeys = {
  posts: ['posts'] as const,
  post: (id: number) => ['post', id] as const,
  todo: ['todo'] as const,
};
