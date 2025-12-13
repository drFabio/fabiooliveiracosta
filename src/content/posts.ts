import { data } from '../../scripts/data/allPosts.json'

export interface Post {
	title: string;
	date: string;
	description: string;
	imageUrl?: string | null;
	slug: string;
	url: string;
}

export const posts: Post[] = data.map((d) => ({
	title: d.title,
	date: d.published_timestamp,
	description: d.description,
	imageUrl: d.cover_image,
	slug: d.slug,
	url: d.url
} satisfies Post))

