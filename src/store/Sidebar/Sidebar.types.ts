type SelectionType = {
	start?: number;
	end?: number;
	selectedText?: string;
};

interface SidebarParams {
	articleId?: string;
	articleTitle?: string;
	selection: SelectionType;
}

export type SidebarState = {
	inView: boolean;
	articleId?: string;
	articleTitle?: string;
	selection: SelectionType | null;
	toggleSidebar: () => void;
	openSidebar: (args: SidebarParams) => void;
	closeSidebar: () => void;
};
