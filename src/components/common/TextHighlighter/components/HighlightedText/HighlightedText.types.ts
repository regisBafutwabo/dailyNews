import { Memo } from '@store/User/User.types';

export type HighlightedTextProps = {
    content: string;
    highlights: Memo[];
    selectedId?: string;
}