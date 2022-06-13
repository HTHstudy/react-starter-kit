import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import ExamplePage from '@pages/ExamplePage';
import MainPage from '@pages/MainPage';
import ParentsPage from '@pages/ParentsPage';
import ChildrenPage from '@pages/ChildrenPage';
import PostsPage from '@pages/PostsPage';
import PostPage from '@pages/PostPage';
import TodoPage from '@pages/TodoPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:postId" element={<PostPage />} />
      <Route path="/todo" element={<TodoPage />} />

      <Route path="/parents" element={<ParentsPage />}>
        <Route path=":id" element={<ChildrenPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path="*" element={<Navigate replace to="/example" />} />
    </ReactRouterRoutes>
  );
};
