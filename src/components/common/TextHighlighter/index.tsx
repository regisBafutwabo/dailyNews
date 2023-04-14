"use client";
import { memo, useEffect, useState } from "react";

import Loading from "@app/loading";

import { HighlightedText } from "./components/HighlightedText";
import { TextHighlighterProps } from "./TextHighlighter.types";

const Highlighter = ({ text, memos, selectedId }: TextHighlighterProps) => {
	const [initialize, setInitialize] = useState(false);

	const orderedMemos = [...memos].sort(
		(a, b) => a.textPosition.start - b.textPosition.start,
	);

	useEffect(() => {
		if (!initialize) setInitialize(true);
	}, []);

	return (
		<>
			{initialize ? (
				<HighlightedText
					content={text}
					highlights={orderedMemos}
					selectedId={selectedId}
				/>
			) : (
				<span className="center with-space">
					<Loading />
				</span>
			)}
		</>
	);
};

export const TextHighlighter = memo(Highlighter);
