import { allPostIds, postDetail } from '@/lib/db'

type Params = {
	slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
	const posts = await allPostIds()

	return [
		...posts.map((post) => ({
			slug: post.slug,
		})),
		...posts.map((post) => ({
			slug: post.id.toString(),
		})),
	]
}

export default async function BlogDetail({
	params,
}: {
	params: Promise<Params>
}) {
	const post = await postDetail((await params).slug)
	if (!post) {
		return <p>No data</p>
	}
	return (
		<>
			<p>{post.title}</p>
			<p>{post.content}</p>
		</>
	)
}

