import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { queryKeys } from '../queryKeys';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

const getPostById = async (id: number) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

const usePost = (postId: number) =>
  useQuery<Post, AxiosError>(queryKeys.post(postId), () => getPostById(postId), { enabled: !!postId });
// useQuery<Post, AxiosError>(queryKeys.post(postId), () => getPostById(postId));

export default usePost;
