import { useState } from 'react';

import { Dictionnary } from '@components/common/Dictionnary';
import { faComment, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidebarStore } from '@store/Sidebar';

import { ActionMenuProps } from './ActionMenu.types';

export const ActionMenu = (props: ActionMenuProps) => {
	const { mousePosition, articleId, onClose, articleTitle } = props;

	const { openSidebar } = useSidebarStore();
	const [openSearch, setOpenSearch] = useState(false);
	const [selectedText, setselectedText] = useState('');
	// const selectionRef = useRef<Selection | null>(null);

	const onCommentClick = () => {
		const selection = window.getSelection();
		const selectionStart = selection?.anchorOffset;
		const selectionEnd = selection?.focusOffset;
		const selectionText = selection?.toString();
		openSidebar({
			articleId,
			articleTitle,
			selection: {
				start: selectionStart,
				end: selectionEnd,
				selectedText: selectionText,
			},
		});
		onClose();
	};

	const onSearchClick = () => {
		const selected = window.getSelection();
		const selectedString = selected?.toString();

		setselectedText(selectedString as string);
		setOpenSearch(true);
	};

	const onDictionnaryClose = () => {
		setOpenSearch(false);
	};

	return (
		<div
			className="action-menu-container"
			style={{
				left: mousePosition.left - 32,
				top: mousePosition.top - 60,
			}}
		>
			<div className="actions-container">
				<button className="action-button" onClick={onCommentClick}>
					<FontAwesomeIcon icon={faComment} />
				</button>
				<button className="action-button" onClick={onSearchClick}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
			{openSearch && (
				<Dictionnary text={selectedText} close={onDictionnaryClose} />
			)}
		</div>
	);
};
