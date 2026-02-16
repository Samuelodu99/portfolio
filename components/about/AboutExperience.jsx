import { experienceData } from '../../data/experienceData';

function AboutExperience() {
	return (
		<div className="mt-16 sm:mt-20">
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-primary-light mb-6">
				Experience & Achievements
			</h2>
			<div className="space-y-6">
				{experienceData.map((exp, index) => (
					<div
						key={index}
						className="p-4 rounded-lg bg-primary-light dark:bg-ternary-dark shadow-sm"
					>
						<h3 className="font-general-semibold text-lg text-ternary-dark dark:text-primary-light">
							{exp.role}
						</h3>
						<p className="font-general-medium text-primary dark:text-accent text-sm mt-1">
							{exp.company}, {exp.location} — {exp.period}
						</p>
						<ul className="mt-2 space-y-1 text-ternary-dark dark:text-ternary-light text-sm">
							{exp.details.map((detail, i) => (
								<li key={i} className="flex items-start gap-2">
									<span className="text-primary dark:text-accent mt-0.5">•</span>
									{detail}
								</li>
							))}
						</ul>
					</div>
				))}
				<div className="p-4 rounded-lg bg-primary-light dark:bg-ternary-dark shadow-sm border-l-4 border-accent dark:border-primary">
					<h3 className="font-general-semibold text-lg text-ternary-dark dark:text-primary-light">
						Key Achievements
					</h3>
					<ul className="mt-2 space-y-1 text-ternary-dark dark:text-ternary-light text-sm">
						<li>• Nominated for Global Award at University of Huddersfield</li>
						<li>• Multiple Best Footballer awards — Camp Sunflower Laugh and Learn (Nigeria)</li>
						<li>• Best in Arts & Crafts — Camp Sunflower Laugh and Learn (Nigeria)</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutExperience;
