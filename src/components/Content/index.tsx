'use client';
import { useEffect, useState } from 'react';

import { ArticleContent } from '@components/ArticleContent';
import { NotesView } from '@components/NotesView';

import { ContentProps } from './Content.types';

export const Content = ({ currentArticle, articleId }: ContentProps) => {
	const [intialize, setIntialize] = useState(false);
	const [selectedMemo, setSelectedMemo] = useState<string | undefined>(
		undefined
	);

	const onMemoClick = (memoId: string) => {
		setSelectedMemo(memoId);
	};

	useEffect(() => {
		if (!intialize) {
			setIntialize(true);
		}
	}, []);

	return (
		<>
			{intialize && (
				<div className="slug-sections">
					<article className="slug-container">
						<header className="slug-header">
							<div className="author">{currentArticle.author}</div>
							<div className="date">{currentArticle.date}</div>
						</header>

						<ArticleContent
							currentArticle={currentArticle}
							selectedId={selectedMemo}
						/>
					</article>
					<NotesView
						articleId={articleId}
						title={currentArticle.title}
						onMemoClick={onMemoClick}
					/>
				</div>
			)}
		</>
	);
};
