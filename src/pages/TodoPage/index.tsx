import React, { FormEvent, useCallback } from 'react';
import { useTodo, useAddTodo } from '@store/server/hooks/useTodo';
import todoPageCss from './todoPageCss';
import { useInternalRouter } from '@pages/routing';

const TodoPage = () => {
  const { status, data, error, isFetching } = useTodo();
  const mutatinoAddTodo = useAddTodo();
  const router = useInternalRouter();
  const goExamplePage = useCallback(() => router.push('/example'), []);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = data.get('text') as string;

    if (!text) return;
    mutatinoAddTodo.mutate(text, { onSuccess: () => console.log('Add') });
    event.currentTarget.reset();
  };
  return (
    <div css={todoPageCss.container}>
      TodoPage
      <button onClick={goExamplePage} css={todoPageCss.button}>
        goExamplePage
      </button>
      <form onSubmit={submitHandler}>
        <input type="text" name="text" />
        <button type="submit" css={todoPageCss.button}>
          Add
        </button>
      </form>
      <div>
        <ul>
          {data?.map((todo, i) => {
            return (
              <li css={todoPageCss.listItem} key={i}>
                {todo}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
