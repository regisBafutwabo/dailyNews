import { MouseEvent } from 'react';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserStore } from '@store/User';

import { MemoCardProps } from './MemoCard.types';

export const MemoCard = ({ memo, onMemoClick, onEdit }: MemoCardProps) => {
	const { removeMemo } = useUserStore();

	const onDelete = (
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	) => {
		event.stopPropagation();

		removeMemo(memo.id);
	};

	return (
		<div
			className="saved-note-card"
			key={memo.id}
			onClick={() => onMemoClick(memo.id)}
			onKeyUp={() => onMemoClick(memo.id)}
		>
			<div>
				<b>{memo.highlightedText}</b>
				<p>{memo.comment}</p>
			</div>
			<div className="card-buttons-wrapper">
				<button onClick={(e) => onEdit(e, memo)}>
					<FontAwesomeIcon icon={faEdit} />
				</button>
				<button onClick={onDelete}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</div>
	);
};
