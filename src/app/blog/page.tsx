import StorageImage from '@/components/storage_image'
import { getPosts } from '@/lib/db'
import Link from 'next/link'

export default async function Page() {
	const posts = await getPosts()
	return (
		<ul>
			{posts.map((post) => (
				<li key={post.id}>
					<Link href={`/blog/${post.id}`} className="hover:bg-gray-700">
						{post.thumbnail && (
							<StorageImage
								src={post.thumbnail}
								alt={post.title}
								width={50}
								height={50}
								priority
								className="rounded"
							/>
						)}
						<p>{post.title}</p>
						<p>{post.description}</p>
						<p>{post.author.name}</p>
					</Link>
				</li>
			))}
		</ul>
	)
}

