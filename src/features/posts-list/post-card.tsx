import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	ArrowDown,
	ArrowUp,
	Award,
	Ellipsis,
	Flag,
	Forward,
	MessageCircle,
} from 'lucide-react'
import type { Post } from './posts-mock-data'

export function Post({ postData }: { postData: Post }) {
	return (
		<Card className='w-full border-none shadow-none cursor-pointer hover:bg-gray-50 gap-0'>
			<CardHeader className='text-body-small min-h-8 mb-1 px-0'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-1 flex-wrap'>
						<a
							href='#'
							className='h-8 flex items-center gap-1.5 flex-nowrap whitespace-nowrap font-semibold text-body-small hover:text-blue-800'
						>
							<Avatar>
								<AvatarFallback>r/</AvatarFallback>
							</Avatar>
							<span>{postData.subreddit}</span>
						</a>
						<span className='my-0'>•</span>
						<span className='whitespace-nowrap text-gray-500'>
							{postData.timeAgo}
						</span>
					</div>
					<div className='flex items-center pl-2'>
						<Button className='bg-blue-800 rounded-3xl h-6 px-[11px] font-normal text-body-small text-primary-foreground mx-1 hover:bg-blue-900 items-center cursor-pointer'>
							Join
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant={'ghost'}
									className='w-8 h-8 rounded-full text-secondary-foreground hover:bg-gray-200'
								>
									<Ellipsis className='w-5 h-5' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className='w-20 px-0 py-2'>
								<DropdownMenuItem className='text-body-medium px-4 py-3.5 hover:bg-background'>
									<Flag />
									<span>Report</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</CardHeader>
			<CardContent className='px-0 mb-2'>
				<a
					href='#'
					className='block font-semibold text-body-large md:text-lg mb-1 md:mb-2 overflow-hidden'
				>
					{postData.title}
				</a>
				<div
					className='relative overflow-hidden rounded-2xl bg-center bg-no-repeat w-full min-h-[220px] h-[540px] bg-secondary-foreground'
					style={{
						backgroundImage: `url(${postData.thumbnail})`,
						backgroundSize: 'contain',
					}}
				></div>
			</CardContent>
			<CardFooter className='px-0 gap-x-3 items-center flex-nowrap justify-start'>
				<span className='flex items-center justify-center h-8 font-semibold p-0 text-body-small bg-gray-100 rounded-3xl'>
					<Button
						variant={'ghost'}
						className='p-0 m-0 h-8 w-8 text-secondary-foreground rounded-full bg-gray-100 hover:bg-gray-200 hover:text-primary'
					>
						<ArrowUp />
					</Button>
					<span className='uppercase'>{postData.votes}</span>
					<Button
						variant={'ghost'}
						className='p-0 m-0 h-8 w-8 text-secondary-foreground rounded-full bg-gray-100 hover:bg-gray-200 hover:text-reddit-blue'
					>
						<ArrowDown />
					</Button>
				</span>
				<Button
					variant={'ghost'}
					size={'sm'}
					className='rounded-3xl text-body-small bg-gray-100 hover:bg-gray-200'
				>
					<MessageCircle />
					{postData.comments}
				</Button>
				<Button
					variant={'ghost'}
					size={'sm'}
					className='rounded-3xl text-body-small bg-gray-100 hover:bg-gray-200'
				>
					<Award />
				</Button>
				<Button
					variant={'ghost'}
					size={'sm'}
					className='rounded-3xl text-body-small bg-gray-100 hover:bg-gray-200'
				>
					<Forward />
					Share
				</Button>
			</CardFooter>
		</Card>
	)
}
