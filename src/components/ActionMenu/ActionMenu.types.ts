export type ActionMenuProps = {
	mousePosition: {
		top: number;
		left: number;
	};
	articleId: string;
	articleTitle: string;
	onClose: () => void;
};
