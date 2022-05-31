import { count, Count } from '@store/client/atoms/count';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

export const useCount = () => {
  const setCountInner = useSetRecoilState<Count>(count);
  const setCount = useCallback((count: Count) => {
    setCountInner(count);
  }, []);

  return { setCount };
};

export function useCountValue() {
  return useRecoilValue(count);
}
