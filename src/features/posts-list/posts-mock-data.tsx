export type Post = {
	id: string
	title: string
	content: string
	subreddit: string
	votes: string // formatted like "4.2k"
	comments: string // formatted like "300.1k"
	thumbnail: string
	timeAgo: string
}
export const postsData: Post[] = [
	{
		id: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
		title: 'What are your go-to productivity hacks?',
		content: 'Let’s discuss small habits that make a big difference.',
		subreddit: 'r/productivity',
		votes: '1.2k',
		comments: '342',
		thumbnail:
			'https://preview.redd.it/why-not-believe-the-victims-v0-366e8dbp34gf1.jpeg?width=1080&crop=smart&auto=webp&s=aab302f4cccadc2e5f2dce040e1e726d3426a7a7',
		timeAgo: '3 hours ago',
	},
	{
		id: 'b2c3d4e5-f6a7-8910-bc23-de45fg67hi89',
		title: 'Is TypeScript really worth it?',
		content: 'I’ve been considering moving from JS to TS. Thoughts?',
		subreddit: 'r/typescript',
		votes: '889',
		comments: '129',
		thumbnail:
			'https://preview.redd.it/good-times-fr-v0-fcgh5tmih3gf1.jpeg?width=1080&crop=smart&auto=webp&s=44647b7bd896c541af4400bb2bc184d46b58b25c',
		timeAgo: '5 hours ago',
	},
	{
		id: 'c3d4e5f6-a7b8-9012-cd34-ef56gh78ij90',
		title: 'The most underrated VS Code extensions',
		content: 'Share the ones you can’t live without.',
		subreddit: 'r/vscode',
		votes: '1.4k',
		comments: '187',
		thumbnail:
			'https://preview.redd.it/when-im-happy-i-bake-when-im-sad-i-bake-when-im-stressed-i-v0-ou9c6z9n24gf1.jpeg?width=640&crop=smart&auto=webp&s=0fef8503ba594d7374a8ac12a4f4915d6b0c7b3c',
		timeAgo: '8 hours ago',
	},
	{
		id: 'd4e5f6a7-b8c9-0123-de45-fg67hi89jk01',
		title: 'AI art vs traditional art: your opinion?',
		content: 'Do you think AI-generated art will replace artists?',
		subreddit: 'r/art',
		votes: '672',
		comments: '210',
		thumbnail: 'https://i.redd.it/3p2o1n0m9l8.jpg',
		timeAgo: '1 day ago',
	},
	{
		id: 'e5f6a7b8-c9d0-1234-ef56-gh78ij90kl12',
		title: 'Beginner mistakes in React',
		content: 'Let’s help newcomers avoid common pitfalls.',
		subreddit: 'r/reactjs',
		votes: '1.1k',
		comments: '302',
		thumbnail:
			'https://preview.redd.it/coulter-and-noem-both-earned-this-burn-v0-7xrbe826r3gf1.jpeg?width=640&crop=smart&auto=webp&s=914c622fd4dcd7623e94b07890c945717c1d0ece',
		timeAgo: '2 days ago',
	},
]
