import { KeyboardEventHandler } from 'react';

export function handleEnterKeyPress(
	callback: () => void
): KeyboardEventHandler {
	return (event) => {
		if (event.key === 'Enter') {
			callback();
		}
	};
}
