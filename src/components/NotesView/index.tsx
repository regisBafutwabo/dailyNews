"use client";

import {
  MouseEvent,
  useMemo,
  useState,
} from 'react';

import { v4 } from 'uuid';

import { MemoCard } from '@components/common/MemoCard';
import { useSidebarStore } from '@store/Sidebar';
import { useUserStore } from '@store/User';
import { Memo } from '@store/User/User.types';

import { NotesViewProps } from './NotesView.types';

export const NotesView = (props: NotesViewProps) => {
	const { articleId, onMemoClick, title } = props;

	const { closeSidebar, selection } = useSidebarStore();
	const { addMemo, memos, editMemo } = useUserStore();

	const [comment, setComment] = useState<string>("");
	const [memoToEdit, setMemoToEdit] = useState<Memo | undefined>();
	const [loading, setLoading] = useState(false);

	const onCancel = () => {
		closeSidebar();
		setComment("");
	};

	const onSave = () => {
		if (memoToEdit) {
			setLoading(true);

			editMemo({
				...memoToEdit,
				comment,
			});
			setComment("");
			setMemoToEdit(undefined);
			setLoading(false);
		} else {
			setLoading(true);

			addMemo({
				comment,
				textPosition: {
					start: selection?.start as number,
					end: selection?.end as number,
				},
				highlightedText: selection?.selectedText as string,
				articleId: articleId as string,
				articleTitle: title as string,
				updatedAt: new Date().toDateString(),
				id: v4(),
			});
		onCancel()
			
			setLoading(false);
		}
	};

	const onEditMemo = (
		event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
		memo: Memo,
	) => {
		setMemoToEdit(memo);
		setComment(memo.comment);
	};

	const savedMemos = useMemo(
		() => memos.filter((memo) => memo.articleId === articleId),
		[memos, articleId],
	);

	return (
		<div className="notes-container">
			<div className="notes-input-section">
				{(selection?.selectedText || memoToEdit !== undefined) && (
					<>
						<div className="comment">
							<div className="textarea-section">
								{/* <h3>
										{selection?.selectedText ?? memoToEdit?.highlightedText}
									</h3> */}
								<textarea
									placeholder="What are your thoughts?"
									value={comment}
									onChange={(e) => setComment(e.target.value)}
								/>
							</div>
							<div className="comment-buttons">
								<button onClick={onCancel} className="cancel">
									Cancel
								</button>
								<button onClick={onSave} disabled={loading}>
									Save
								</button>
							</div>
						</div>
					</>
				)}
			</div>
			<div className="saved-notes-section">
				<p>This is where all your notes will be saved</p>
				{articleId &&
					savedMemos.map((memo) => (
						<MemoCard
							key={memo.id}
							memo={memo}
							onMemoClick={onMemoClick}
							onEdit={onEditMemo}
						/>
					))}
			</div>
		</div>
	);
};
