import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = () => {
	const isClient = typeof window === 'object';

	const getScreenSize = useCallback(
		() => ({
			width: isClient ? window.innerWidth : 0,
			height: isClient ? window.innerHeight : 0,
		}),
		[isClient]
	);

	const [screenSize, setScreenSize] = useState(getScreenSize);

	useEffect(() => {
		if (!isClient) return;

		function handleResize() {
			setScreenSize(getScreenSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [getScreenSize, isClient]);

	return {
		screenSize,
		isMobile: screenSize.width < 576,
		isLargeMobile: screenSize.width >= 576,
		isTablet: screenSize.width >= 768,
		isDesktop: screenSize.width >= 992,
		isLargeDesktop: screenSize.width >= 1200,
	};
};

export default useMediaQuery;
