import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetch('https://inshorts.deta.dev/news?category=world', {
    next: { revalidate: 3600 } // Revalidate every 60 seconds
  });
	const articles = await data.json();
  
  return NextResponse.json(articles);
}
