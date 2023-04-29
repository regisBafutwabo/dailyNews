import { Metadata } from 'next';

import { getArticle } from '@app/api/article/route';
import { Content } from '@components/Content';
import { ArticleType } from '@typings/article';

import NotFound from './not-found';

export async function generateMetadata({ params }:{params:{slug:string}}): Promise<Metadata> {
  const data = await getArticle(params.slug);
  const currentArticle:ArticleType = await data.json();
  return { 
	title: currentArticle.title,
	authors:{name: currentArticle.author},
	publisher: "Daily News",
	openGraph:{
		images:[currentArticle.imageUrl],
		authors:[currentArticle.author]
	},
	twitter:{
		creator: currentArticle.author,
		images:[currentArticle.imageUrl],
		title: currentArticle.title
	}
 }
}

export default async function Article({
	params,
}: {
	params: { slug: string };
}) {
	const data = await getArticle(params.slug);

	const currentArticle = await data.json();
	if (!currentArticle) {
		NotFound();
	}
	
	return <Content currentArticle={currentArticle} articleId={params.slug} />;
}
