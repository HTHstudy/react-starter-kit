import { Atoms } from '@store/client/constants';
import { atom } from 'recoil';

export type Count = number;

export const count = atom<Count>({
  key: Atoms.Count,
  default: 0,
});
