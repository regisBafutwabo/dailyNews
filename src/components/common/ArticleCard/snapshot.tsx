import { ArticleCard } from '@components/common/ArticleCard';
import { render } from '@testing-library/react';
import { ArticleType } from '@typings/article';

it('renders homepage unchanged', () => {
    const article: ArticleType = {
        author:"Author",
        content:"Content", 
        date: "2023-04-13",
        id: "9cde45d459874c728e49088af880ed57",
        imageUrl: "https://th.bing.com/th/id/OIP.mBPZNM3Jw7BoreL2Me1CoAHaKh?w=135&h=192&c=7&r=0&o=5&dpr=2&pid=1.7",
        readMoreUrl: "https://oops.com",
        time: "",
        title:"For The sake of Testing.",
        url: "https://oops.com/about"
    };

  const { container } = render(<ArticleCard article={article} />)
  expect(container).toMatchSnapshot();
})