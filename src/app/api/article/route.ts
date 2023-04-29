import { NextResponse } from 'next/server';

import { ArticleType } from '@typings/article';

export async function getArticle(slug:string) {

  const data = await fetch('https://inshorts.deta.dev/news?category=world');
	const articles = await data.json();
  
  const currentArticle:ArticleType = articles.data.find(
		(article: ArticleType) => article.id === slug
	);
  return NextResponse.json(currentArticle);
}
