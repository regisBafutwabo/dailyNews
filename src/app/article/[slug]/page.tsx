import { Content } from '@components/Content';
import { ArticleType } from '@typings/article';

export default async function Article({
	params,
}: {
	params: { slug: string };
}) {
	const data = await fetch('https://inshorts.deta.dev/news?category=world');
	const articles = await data.json();

	const currentArticle: ArticleType = articles.data.find(
		(article: ArticleType) => article.id === params.slug
	);

	// if (!currentArticle) {
	// 	notFound();
	// }

	return <Content currentArticle={currentArticle} articleId={params.slug} />;
}
