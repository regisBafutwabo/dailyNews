'use client';
import {
  MouseEvent,
  useState,
} from 'react';

import Image from 'next/image';

import { ActionMenu } from '@components/ActionMenu';
import { TextHighlighter } from '@components/common/TextHighlighter';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useUserStore } from '@store/User';

import { ArticleContentProps } from './ArticleContent.types';

export const ArticleContent = ({
	currentArticle,
	selectedId,
}: ArticleContentProps) => {
	const { memos: memoList } = useUserStore();

	const [showActionMenu, setShowActionMenu] = useState(false);
	const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

	const onMouseUp = (
		event: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
	) => {
		const selection = window.getSelection();

		const startOffset = selection?.anchorOffset;
		const endOffset = selection?.focusOffset;

		if (startOffset === endOffset) {
			return;
		}
		const clientx = event.clientX;
		const clienty = event.clientY;

		const left = clientx + window.scrollX;
		const top = clienty + window.scrollY;

		setMousePosition({ left: left, top: top });
		if (selection?.toString() === ' ') {
			setShowActionMenu(false);
			return;
		}
		setShowActionMenu(true);
	};

	const closeActionMenu = () => {
		setShowActionMenu(false);
	};

	const articleMemos = memoList.filter(
		(memo) => memo.articleId === currentArticle.id
	);

	return (
		<>
			<div className="slug-image-container">
				<Image
					src={currentArticle.imageUrl}
					alt={currentArticle.title}
					width={700}
					height={400}
					priority
				/>
			</div>
			<div>
				<h2>{currentArticle.title}</h2>
			</div>
			<div className="slug-content" onBlur={closeActionMenu}>
				<p onMouseUp={onMouseUp} onMouseDown={closeActionMenu}>
					<TextHighlighter
						text={currentArticle.content}
						memos={articleMemos}
						selectedId={selectedId}
					/>
				</p>
			</div>
			<div className="read-more-section">
				<a
					href={currentArticle.readMoreUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>Read More</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</a>
			</div>
			{showActionMenu && (
				<ActionMenu
					onClose={closeActionMenu}
					mousePosition={mousePosition}
					articleTitle={currentArticle.title}
					articleId={currentArticle.id}
				/>
			)}
		</>
	);
};
