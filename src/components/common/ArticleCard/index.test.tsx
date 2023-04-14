import '@testing-library/jest-dom';

import { useRouter } from 'next/router';

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ArticleType } from '@typings/article';

import { ArticleCard } from './index';

jest.mock('next/link', () => ({ children }) => children);
jest.mock("next/dist/client/router", () => ({
   useRouter: jest.fn(),
}))

describe('ArticleCard', () => { 
    const mockPush = jest.fn(() => Promise.resolve(true));

    const article: ArticleType={
        author:"Author",
        content:"Content",
        date: "2023-04-13",
        id: "9cde45d459874c728e49088af880ed57",
        imageUrl: "https://th.bing.com/th/id/OIP.mBPZNM3Jw7BoreL2Me1CoAHaKh?w=135&h=192&c=7&r=0&o=5&dpr=2&pid=1.7",
        readMoreUrl: "https://oops.com",
        time: "",
        title:"For The sake of Testing.",
        url: "https://oops.com/about"
    }

    beforeAll(() => {
    useRouter.mockReturnValue({
      asPath: "/",
      query: {},
      push: mockPush,
      prefetch: () => Promise.resolve(true)
    })
  })
    it('renders an article',()=>{
        render(<ArticleCard article={article}/>);

        const title = screen.getByTestId("article-title");

        expect(title).toHaveTextContent('For The sake of Testing.');
    });

    it('Link is visible', ()=>{
        render(<ArticleCard article={article}/>);

        const link = screen.getByTestId("article-link");

        expect(link).toBeInTheDocument();
    });

    it('Link is clickable', ()=>{
        render(<ArticleCard article={article}/>);

        const link = screen.getByTestId("article-link");

        fireEvent.click(link);

        expect(mockPush).toHaveBeenCalledWith("/article/9cde45d459874c728e49088af880ed57", expect.anything(), expect.anything())
    })
 })