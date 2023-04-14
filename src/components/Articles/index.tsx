import { ArticleCard } from '@components/common/ArticleCard';
import { ArticleType } from '@typings/article';

export const Articles = ({ articles }: { articles: ArticleType[] }) => {
	return (
		<div className="articles-container">
			{articles.map((article: ArticleType) => (
				<ArticleCard article={article} key={article.id}/>
			))}
		</div>
	);
};
