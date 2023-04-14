import Image from 'next/image';
import Link from 'next/link';

import { ArticleType } from '@typings/article';

export const ArticleCard = ({ article }: { article: ArticleType }) => {
	return (
		<div className="article">
			<div className="card-content">
				<header className="card-header">
					<span>{article.author}</span>
					<span>·</span>
					<span className="date">{article.date}</span>
				</header>
				<div className="article-title" >
					<Link href={`/article/${article.id}`} data-testid="article-link">
						<h2 data-testid="article-title">{article.title}</h2>
					</Link>
				</div>
			</div>
			<div className="card-image">
				<Image
					src={article.imageUrl}
					alt={article.title}
					width={150}
					height={150}
				/>
			</div> 
		</div>
	);
};
