import { useEffect } from 'react';

const useOnClickOutside = (ref, handler, handlerArgs) => {
	useEffect(
		() => {
			const listener = (event) => {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(handlerArgs);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		[ref, handler] // eslint-disable-line
	);
};
export default useOnClickOutside;
