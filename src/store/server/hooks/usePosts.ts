import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { queryKeys } from '../queryKeys';

type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
}[];

const getPosts = async () => {
  const { data } = await axios.get<Posts>('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const usePosts = () => useQuery<Posts, AxiosError>(queryKeys.posts, () => getPosts());

export default usePosts;
