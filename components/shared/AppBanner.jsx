import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle, FiMail, FiPhone, FiGithub } from 'react-icons/fi';

function AppBanner() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left order-2 sm:order-1">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
				>
					Samuel Adewole Odu
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-2 text-lg md:text-xl lg:text-2xl text-center sm:text-left leading-normal text-primary dark:text-accent"
				>
					Full-Stack Software Engineer | AI & Data-Driven Solutions Specialist
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.25,
					}}
					className="font-general-regular mt-1 text-base text-gray-500 dark:text-gray-400 text-center sm:text-left"
				>
					Huddersfield, United Kingdom
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="font-general-regular mt-3 text-sm md:text-base text-ternary-dark dark:text-ternary-light text-center sm:text-left italic"
				>
					&ldquo;First-class BSc (Hons) graduate passionate about building secure, privacy-conscious AI-powered applications.&rdquo;
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.35,
					}}
					className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4"
				>
					<a
						href="mailto:samueladewoleodu@gmail.com"
						className="font-general-medium flex items-center text-sm text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
						aria-label="Email"
					>
						<FiMail className="mr-1.5 h-4 w-4" />
						Email
					</a>
					<a
						href="tel:+447931710878"
						className="font-general-medium flex items-center text-sm text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
						aria-label="Phone"
					>
						<FiPhone className="mr-1.5 h-4 w-4" />
						+44 7931 710878
					</a>
					<a
						href="https://github.com/Samuelodu99"
						target="_blank"
						rel="noopener noreferrer"
						className="font-general-medium flex items-center text-sm text-primary hover:text-primary/80 dark:text-accent dark:hover:text-accent/80"
						aria-label="GitHub"
					>
						<FiGithub className="mr-1.5 h-4 w-4" />
						GitHub
					</a>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.4,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Samuel-Odu-CV.pdf"
						href="/files/Samuel-Odu-CV.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 mb-6 sm:mb-0 text-lg border border-primary dark:border-accent py-2.5 sm:py-3 shadow-lg rounded-lg bg-primary/10 dark:bg-accent/10 focus:ring-1 focus:ring-primary hover:bg-primary text-gray-700 dark:text-primary-light hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 flex justify-center sm:justify-end order-1 sm:order-2 mt-0 mb-6 sm:mb-0 sm:mt-0"
			>
				<div className="relative">
					<Image
						src="/me.png"
						alt="Samuel Odu - Graduation"
						width={256}
						height={256}
						className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-xl ring-4 ring-primary/20 dark:ring-accent/30"
						priority
					/>
				</div>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
