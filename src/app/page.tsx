// Next, you'll need to make an HTTP request to the English Article Lookup API using the axios library to fetch the article content.
// You can use the useEffect hook to make the API call and store the fetched data in a state variable.
// Render the article content on the screen using React components.
// To implement the text selection functionality, you can use the onMouseUp event to detect when the user has finished selecting text.
// When the user finishes selecting text, you can show a context menu with the required and optional functions.
// To implement the Comments functionality, you can create a state variable to store the comments and use the onMouseOver event to show the tooltip with the contents of the memo.
// To implement the Highlighter functionality, you can create a state variable to store the selected text and use CSS to apply the highlight style to the selected text. You can also add an onClick event to remove the highlight when the user clicks on the highlighted text.
// To implement the Dictionary Search functionality, you can use the window.open() method to open a new window or use an <iframe> to display the search results in a pop-up.
// To implement the list of written notes, you can create a component to render the list of notes and add an onClick event to play the highlight animation when a note is clicked.
// To edit or delete notes, you can add edit and delete buttons to each note in the list and implement the corresponding functionality.

import { Articles } from '@components/Articles';

export default async function Home() {
	const data = await fetch(`${process.env.API_URL}/api/articles`);
	const articles = await data.json();

	return (
		<>
			{articles.data && <Articles articles={articles.data} />}
		</>
	);
}
