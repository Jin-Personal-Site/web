import { prisma } from './prisma'

export async function getPosts() {
	const posts = await prisma.post.findMany({
		where: {
			approved: true,
			published: true,
			publishedAt: {
				lte: new Date(),
			},
		},
		select: {
			id: true,
			title: true,
			slug: true,
			description: true,
			thumbnail: true,
			// publishedAt: true,
			author: {
				select: {
					name: true,
				},
			},
			category: {
				select: {
					slug: true,
					name: true,
					color: true,
				},
			},
			series: {
				select: {
					slug: true,
					name: true,
					thumbnail: true,
					description: true,
				},
			},
		},
	})

	return posts
}

export async function postDetail(id: string | number) {
	const posts = await prisma.post.findFirst({
		where: {
			...(isNaN(+id) ? { slug: id.toString() } : { id: +id }),
			approved: true,
			published: true,
			publishedAt: {
				lte: new Date(),
			},
		},
		select: {
			id: true,
			title: true,
			description: true,
			content: true,
			thumbnail: true,
			coverImage: true,
			// publishedAt: true,
			author: {
				select: {
					id: true,
					name: true,
				},
			},
			category: {
				select: {
					slug: true,
					name: true,
					color: true,
				},
			},
			series: {
				select: {
					slug: true,
					name: true,
					thumbnail: true,
					description: true,
				},
			},
		},
	})

	return posts
}

export async function allPostIds() {
	return await prisma.post.findMany({
		where: {
			approved: true,
			published: true,
			publishedAt: {
				lte: new Date(),
			},
		},
		select: {
			id: true,
			slug: true,
		},
	})
}

