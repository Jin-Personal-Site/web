import { ExternalItem, Period } from '@/types/utility'

export type ProjectColor = 'orange' | 'blue' | 'gray' | 'pink'

export type ProjectModel = {
	name: string
	slug: string
	repoUrl?: string
	mainImage: string
	mainColor: ProjectColor
	liveDemoUrl?: string
	description: string
	techStack: string[]
}

export enum ProjectType {
	SIDE_PROJECT = 'side',
	CLIENT = 'client',
	EMPLOYMENT = 'employment',
}

export type TechStack = ExternalItem<string> & {
	isHighlight?: boolean
}

export type CompanyProjectInfo = ExternalItem<string> & { id: number }

export type ProjectTypeDetail =
	| {
			projectType: ProjectType.EMPLOYMENT
			companyEmployment: CompanyProjectInfo
	  }
	| {
			projectType: Exclude<ProjectType, ProjectType.EMPLOYMENT>
	  }

export type ProjectDetailModel = {
	projectName: string
	slug: string
	tagline: string
	mainImage: string
	techStack: TechStack[]
	period: Period
	description: string
	content: string // content as HTML
	repoUrl: string
	liveDemoUrl?: string
	mainColor: ProjectColor
} & ProjectTypeDetail

// export type ProjectDetailModel2 = {
// 	name: string
// 	slug: string
// 	tagline: string
// 	images?: string[]
// 	description: string
// 	type: 'side' | 'client' | 'employment'
// 	company: {
// 		id: number
// 		name: string
// 		location: string
// 	}
// 	role: string
// 	period: {
// 		start: string
// 		end?: string
// 	}
// 	teamSize: number
// 	businessContext: string
// 	objectives: string[]
// 	responsibilities: string[]
// 	techStack: string[]
// 	challenges: {
// 		title: string
// 		hurdle: string
// 		solution: string
// 	}[]
// 	results: {
// 		title: string
// 		description: string
// 	}[]
// 	architecture?: {
// 		diagramImage: string
// 		explanation: string
// 	}
// 	links: {
// 		url: string
// 		label?: string
// 		type?: 'demo' | 'repo' | 'case-study'
// 	}[]
// 	learnings: {
// 		title: string
// 		description: string
// 	}[]
// }
