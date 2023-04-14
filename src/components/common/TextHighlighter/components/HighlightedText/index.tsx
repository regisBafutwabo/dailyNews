import { Tooltip } from "@components/common/Tooltip";
import { Memo } from "@store/User/User.types";

import { HighlightedTextProps } from "./HighlightedText.types";

export const HighlightedText = ({
	content,
	highlights,
	selectedId,
}: HighlightedTextProps) => {
	if (!highlights.length) {
		return <>{content}</>;
	}

	const [highlight, ...remainingHighlights] = highlights;

	const { startIndex, endIndex } = highlight.afterRehydration || {};

	const getNewOffset = (current: Memo, prefix: string, endIndex: number) => {
		const currentStart =
			current?.afterRehydration?.startIndex ?? current.textPosition.start;
		const currentEnd =
			current?.afterRehydration?.endIndex ?? current.textPosition.end;

		if (currentStart >= prefix.length) {
			const start = currentStart - endIndex;
			const end = currentEnd - endIndex;
			return {
				startIndex: Math.max(start, 0),
				endIndex: Math.max(end, 0),
			};
		}

		if (
			current.highlightedText !== prefix.substring(currentStart, currentEnd)
		) {
			const start = currentStart - endIndex;
			const end = currentEnd - endIndex;
			return {
				startIndex: Math.max(start, 0),
				endIndex: Math.max(end, 0),
			};
		}
		return {
			startIndex: Math.max(currentStart, 0),
			endIndex: Math.max(currentEnd, 0),
		};
	};

	const prefix = content.substring(
		0,
		startIndex ?? highlight.textPosition.start,
	);

	const highlightedText = content.substring(
		startIndex ?? highlight.textPosition.start,
		endIndex ?? highlight.textPosition.end,
	);
	const suffix = content.substring(
		endIndex ?? highlight.textPosition.end,
		content.length,
	);

	return (
		<>
			<>{prefix}</>
			<Tooltip
				text={highlight.comment}
				highlighted={highlight.id === selectedId}
			>
				{highlightedText}
			</Tooltip>
			<HighlightedText
				content={suffix}
				highlights={remainingHighlights.map((h) => ({
					...h,
					afterRehydration: getNewOffset(h, suffix, endIndex ?? 0),
				}))}
				selectedId={selectedId}
			/>
		</>
	);
};
