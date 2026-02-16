import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	// Use undefined for initial render so server and client match (avoids hydration error)
	const [theme, setTheme] = useState(undefined);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.theme || 'light';
		setTheme(stored);
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(stored);
	}, []);

	useEffect(() => {
		if (!mounted || theme === undefined) return;
		const root = window.document.documentElement;
		const activeTheme = theme === 'dark' ? 'light' : 'dark';
		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, mounted]);

	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	// During SSR and before mount, use 'dark' as placeholder so UI renders consistently
	return [mounted ? activeTheme : 'dark', setTheme];
};

export default useThemeSwitcher;
