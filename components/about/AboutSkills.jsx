import { skillsData } from '../../data/skillsData';

const skillCategories = [
	{ title: 'Languages', skills: skillsData.languages, color: 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary' },
	{ title: 'Frameworks & Libraries', skills: skillsData.frameworks, color: 'bg-accent/10 dark:bg-accent/20 text-amber-700 dark:text-accent' },
	{ title: 'AI/ML', skills: skillsData.aiMl, color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' },
	{ title: 'Tools & Practices', skills: skillsData.tools, color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400' },
];

function AboutSkills() {
	return (
		<div className="mt-16 sm:mt-20">
			<h2 className="font-general-semibold text-2xl sm:text-3xl text-ternary-dark dark:text-primary-light mb-6">
				Technical Skills
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{skillCategories.map((category) => (
					<div key={category.title} className="space-y-3">
						<h3 className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
							{category.title}
						</h3>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill) => (
								<span
									key={skill}
									className={`px-3 py-1 rounded-full text-sm font-general-medium ${category.color}`}
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutSkills;
