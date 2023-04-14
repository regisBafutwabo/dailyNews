import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { SidebarState } from './Sidebar.types';

export const useSidebarStore = create<SidebarState>()(
	devtools((set) => ({
		inView: false,
		articleId: undefined,
		selection: null,
		toggleSidebar: () =>
			set((state) => ({
				...state,
				inView: !state.inView,
				articleId: undefined,
				articleTitle: undefined,
				selection: null,
			})),
		openSidebar: ({ articleId, selection, articleTitle }) =>
			set((state) => ({ ...state, inView: true, articleId, selection, articleTitle })),
		closeSidebar: () =>
			set((state) => ({
				...state,
				inView: false,
				articleId: undefined,
				articleTitle: undefined,
				selection: null,
			})),
	})),
);
