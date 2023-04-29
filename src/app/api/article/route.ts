import { NextResponse } from 'next/server';

import { ArticleType } from '@typings/article';

export async function GET(request: Request) {
  const {searchParams, } = new URL(request.url)
  const slug = searchParams.get("slug");

  const data = await fetch('https://inshorts.deta.dev/news?category=world');
	const articles = await data.json();
  
  const currentArticle:ArticleType = articles.data.find(
		(article: ArticleType) => article.id === slug
	);
  return NextResponse.json(currentArticle);
}
