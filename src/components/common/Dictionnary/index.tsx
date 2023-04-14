import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Dictionnary = ({
	text,
	close,
}: {
	text: string;
	close: () => void;
}) => {
	return (
		<div className="iframe-container">
			<div className="header">
				<h2>Search for Definition</h2>
				<span onClick={close} onKeyUp={close}>
					<FontAwesomeIcon icon={faClose} />
				</span>
			</div>
			<iframe src={`https://small.dic.daum.net/search.do?dic=eng&q=${text}`} />
		</div>
	);
};
