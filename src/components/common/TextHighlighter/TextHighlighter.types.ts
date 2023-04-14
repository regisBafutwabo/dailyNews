import { Memo } from '@store/User/User.types';

export type TextHighlighterProps = {
		text: string;
		memos: Memo[];
		selectedId?: string;
	};

export type getNewOffsetResult = {
	startIndex: number;
	endIndex: number;
};
