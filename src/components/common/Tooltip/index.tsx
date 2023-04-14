import { useState } from 'react';

import { TooltipProps } from './Tooltip.types';

export const Tooltip = ({
	text,
	children,
	highlighted = false,
}: TooltipProps) => {
	const [show, setShow] = useState(false);

	return (
		<span
			onMouseEnter={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
			className={`tooltip-container ${highlighted && 'highlighted'}`}
		>
			{children}
			{show && <span className="tooltip-text">{text}</span>}
		</span>
	);
};
