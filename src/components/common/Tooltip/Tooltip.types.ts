import { ReactNode } from 'react';

export type TooltipProps = {
	text: string;
	children: ReactNode;
	highlighted?: boolean;
    id?: string;
};
