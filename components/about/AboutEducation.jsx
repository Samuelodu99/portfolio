import { educationData } from '../../data/educationData';

function AboutEducation() {
	return (
		<div className="mt-16 sm:mt-20">
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-primary-light mb-6">
				Education
			</h2>
			<div className="space-y-8">
				{educationData.map((edu, index) => (
					<div
						key={index}
						className="border-l-4 border-primary dark:border-accent pl-6 py-2"
					>
						<h3 className="font-general-semibold text-lg text-ternary-dark dark:text-primary-light">
							{edu.degree}
						</h3>
						<p className="font-general-medium text-primary dark:text-accent mt-1">
							{edu.school} — {edu.period}
						</p>
						<ul className="mt-2 space-y-1 text-ternary-dark dark:text-ternary-light text-sm sm:text-base">
							{edu.modules.map((mod, i) => (
								<li key={i} className="flex items-start gap-2">
									<span className="text-primary dark:text-accent mt-1">•</span>
									{mod}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutEducation;
