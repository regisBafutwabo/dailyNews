import { MouseEvent } from 'react';

import { Memo } from '@store/User/User.types';

export type MemoCardProps = {
		memo: Memo;
		onMemoClick: (memoId: string) => void;
		onEdit: (
			event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
			memo: Memo,
		) => void;
	};
