import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios, { AxiosError } from 'axios';
import { queryKeys } from '../queryKeys';

const getTodo = async () => {
  const data = localStorage.getItem('todo');
  if (!data) return [];

  return JSON.parse(data);
};

export const useTodo = () => useQuery<string[], AxiosError>(queryKeys.todo, () => getTodo(), {});

const addTodo = async (todo: string) => {
  const res = await getTodo();
  res.push(todo);
  localStorage.setItem('todo', JSON.stringify(res));
  return res;
};
export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodo, {
    // ✅ always invalidate the todo list
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.todo);
    },
  });
};
