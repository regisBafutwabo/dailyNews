import { v4 } from 'uuid';
import { create } from 'zustand';
import {
  devtools,
  persist,
} from 'zustand/middleware';

import { UserState } from './User.types';

export const useUserStore = create<UserState>()(
	devtools(
		persist(
			(set) => ({
				userId: v4(),
				memos: [],
				addMemo: (memo) => set((state) => ({ memos: [...state.memos, memo] })),
				removeMemo: (memoId) =>
					set((state) => ({
						memos: state.memos.filter((memo) => memo.id !== memoId),
					})),
				editMemo: (memo) =>
					set((state) => ({
						memos: state.memos.map((currentMemo) =>
							currentMemo.id === memo.id ? memo : currentMemo
						),
					})),
			}),
			{
				name: 'user-memo-store',
			}
		)
	)
);
