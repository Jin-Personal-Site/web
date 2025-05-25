import { ProjectDetailModel, ProjectType } from '@/models/project'

export const getProjectDetail = async (
	_slug: string,
): Promise<ProjectDetailModel> => {
	return {
		projectName: 'Beverage Store System',
		slug: 'beverage-store-system',
		tagline: 'A complete ordering system for chain cafés.',
		mainImage: '/project1.avif',
		mainColor: 'orange',
		// projectType: ProjectType.SIDE_PROJECT,
		projectType: ProjectType.EMPLOYMENT,
		companyEmployment: {
			name: 'Vitalify Asia',
			icon: 'https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/33988ae362a9a46c4ad65c85d75bfe61.png',
			id: 1,
		},
		period: {
			start: '2022/01',
			end: '2023/12',
		},
		description:
			'Built a complete ordering system for a chain café, including customer, store, and delivery apps with real-time updates. The system handles order management, inventory tracking, and delivery coordination.',
		content: `
			<h2>👨‍💻 My Role & Responsibilities</h2>
			<ul>
				<li>Solo lead/full-stack architect</li>
				<li>• Led the full-stack development team and designed system architecture</li>
				<li>• Implemented real-time features using Socket.IO and Redis</li>
				<li>• Developed RESTful APIs and comprehensive documentation</li>
				<li>• Created responsive frontend interfaces for all user types</li>
				<li>• Managed deployment and DevOps processes</li>
			</ul>

			<h2>🎯 Challenges & Solutions</h2>
			<table>
				<thead>
					<tr>
						<th>Challenge</th>
						<th>Solution</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Real-time order updates across platforms</td>
						<td>Socket.IO + Redis pub/sub messaging</td>
					</tr>
					<tr>
						<td>Concurrent order management</td>
						<td>Optimistic locking + Redis distributed locks</td>
					</tr>
					<tr>
						<td>Multiple payment integrations</td>
						<td>Payment provider abstraction layer</td>
					</tr>
				</tbody>
			</table>

			<h2>📈 Results & Impact</h2>
			<ul>
				<li><strong>Operational Efficiency:</strong> 60% faster order processing, 30% cost reduction</li>
				<li><strong>Customer Experience:</strong> 45% improvement in satisfaction scores</li>
				<li><strong>Business Growth:</strong> Expanded from 5 to 15 locations in first year</li>
			</ul>

			<h2>🛠️ Technical Deep-Dive</h2>
			<p><strong>Tech Stack:</strong></p>
			<ul>
				<li>NestJS — Microservices architecture</li>
				<li>Socket.IO — Real-time communication</li>
				<li>Redis — Pub/sub messaging and caching</li>
				<li>MongoDB — Flexible document storage</li>
				<li>Vue/Nuxt — Progressive web apps</li>
				<li>AWS — Cloud infrastructure</li>
			</ul>

			<h2>🏗️ Architecture & Artifacts</h2>
			<img src="https://picsum.photos/400/250" alt="System Architecture" />
			<p><em>Microservices architecture with separate services for order management, inventory, payment processing, and delivery coordination</em></p>

			<h2>📚 What I Learned</h2>
			<ul>
				<li>• Real-time system design at scale, including connection management and data consistency</li>
				<li>• Best practices for payment gateway integration and security</li>
				<li>• Effective team leadership and technical debt management</li>
			</ul>

			<h2>🔗 Links</h2>
			<ul>
				<li><a href="#">🔗 Live Demo</a></li>
				<li><a href="https://github.com/orgs/VT-Store-Manager/repositories">💻 GitHub Repo</a></li>
				<li><a href="#">📄 Case Study PDF</a></li>
			</ul>
		`,
		repoUrl: 'https://github.com/orgs/VT-Store-Manager/repositories',
		liveDemoUrl: '#',
		techStack: [
			{
				name: 'Typescript',
				icon: 'https://cdn.simpleicons.org/typescript/3178c6',
				isHighlight: true,
			},
			{
				name: 'NestJS',
				icon: 'https://cdn.simpleicons.org/nestjs/e0234e',
				isHighlight: true,
			},
			{
				name: 'MongoDB',
				icon: 'https://cdn.simpleicons.org/mongodb/47a248',
				isHighlight: true,
			},
			{
				name: 'Mongoose',
				icon: 'https://cdn.simpleicons.org/mongoose/880000/a52a2a',
			},
			{
				name: 'Redis',
				icon: 'https://cdn.simpleicons.org/redis/ff4438',
				isHighlight: true,
			},
			{
				name: 'NuxtJS',
				icon: 'https://cdn.simpleicons.org/nuxt/00dc82',
				isHighlight: true,
			},
			{
				name: 'Socket.IO',
				icon: 'https://cdn.simpleicons.org/socketdotio/010101/white',
				isHighlight: true,
			},
			{
				name: 'Pinia',
				icon: 'https://logo.svgcdn.com/l/pinia.png',
				isHighlight: true,
			},
			{
				name: 'SCSS',
				icon: 'https://cdn.simpleicons.org/sass/cc6699',
				isHighlight: true,
			},
			{ name: 'Vuetify', icon: 'https://cdn.simpleicons.org/vuetify/1867c0' },
			{
				name: 'Momo',
				icon: 'https://cdn.brandfetch.io/idn4xaCzTm/w/180/h/180/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B',
				isHighlight: true,
			},
			{
				name: 'Twilio',
				icon: 'https://cdn.simpleicons.org/twilio/f22f46',
			},
			{
				name: 'Google Map API',
				icon: 'https://cdn.simpleicons.org/googlemaps/4285f4',
			},
			{ name: 'AWS S3', icon: 'https://cdn.simpleicons.org/amazons3/569a31' },
			{ name: 'Swagger', icon: 'https://cdn.simpleicons.org/swagger/85ea2d' },
			{ name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/ff6c37' },
		],
	}
}
