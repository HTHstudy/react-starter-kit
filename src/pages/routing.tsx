import { NavigateOptions, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath, options?: NavigateOptions) {
        navigate(path, options);
      },
    };
  }, [navigate]);
}

type RoutePath =
  | '/example'
  | '/main'
  | '/login'
  | '/parents'
  | `/parents/${string}`
  | '/posts'
  | `/posts/${number}`
  | '/todo';
