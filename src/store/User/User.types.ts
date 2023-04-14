export type Memo = {
	id: string;
	comment: string;
	articleId: string;
	articleTitle: string;
	highlightedText: string;
	textPosition: {
		start: number;
		end: number;
	};
	updatedAt: string;
	afterRehydration?: {
		startIndex: number;
		endIndex: number;
	};
};

export type UserState = {
	userId: string;
	memos: Memo[];
	addMemo: (memo: Memo) => void;
	removeMemo: (memoId: string) => void;
	editMemo: (memo: Memo) => void;
};
