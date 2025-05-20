/**
 * Core domain model for Project
 * Used across different features (UI, store, services)
 */
export type Project = {
	name: string
	slug: string
	repoUrl?: string
	image: string
	mainColor: 'orange' | 'blue' | 'gray' | 'pink'
	websiteUrl?: string
	description: string
	techStack: string[]
}

export type ProjectColor = Project['mainColor']

export type ProjectWithDetails = Project & {
	createdAt?: Date
	updatedAt?: Date
	// ... other fields
}
