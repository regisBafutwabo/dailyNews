'use client';

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div>
			<h2>Something went wrong!</h2>
			<p style={{ color: 'red' }}>{error.message}</p>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
