function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}{' '}
				<span className="text-secondary-dark dark:text-secondary-light font-medium">
					Samuel Adewole Odu
				</span>
				.{' '}
				<a
					href="https://github.com/realstoman/nextjs-tailwindcss-portfolio"
					target="__blank"
					rel="noopener noreferrer"
					className="hover:underline hover:text-primary dark:hover:text-accent ml-1 duration-500"
				>
					Built with Next.js & Tailwind CSS
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
