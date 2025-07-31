import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
} from '@/components/ui/sidebar'

const popularCommunities = [
	{
		avatar:
			'https://styles.redditmedia.com/t5_2vq0w/styles/communityIcon_6f0n71jeeund1.jpg?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=af8f886b0764af894227b5f1d0f8c947131eaad7',
		name: 'r/DestinyTheGame',
		members: '13,954,115',
	},
	{
		avatar:
			'https://styles.redditmedia.com/t5_2qh22/styles/communityIcon_18jg89hnk9ae1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=fd029310c85c6c9e1af990ff8efac4e36fbdda01',
		name: 'r/anime',
		members: '3,342,072',
	},
	{
		avatar:
			'https://styles.redditmedia.com/t5_2we4j/styles/communityIcon_k5n4c7i07t4d1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=91218d80e2b4db5ffbd035f2e09a1ead6917da49',
		name: 'r/destiny2',
		members: '916,917',
	},
	{
		avatar:
			'https://styles.redditmedia.com/t5_3oeyf/styles/communityIcon_fhf52ssgjp5f1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=8e0053e06d57ab226c8a9d8603f345f0cf5dfac4',
		name: 'r/FortNiteBR',
		members: '5,601,641',
	},
	{
		avatar:
			'https://styles.redditmedia.com/t5_2vbgl/styles/communityIcon_47xlywkzsy7b1.png?width=96&height=96&frame=1&auto=webp&crop=96:96,smart&s=7c8a91844f3ee66935dade4a9c794b21077261a9',
		name: 'r/dndnext',
		members: '792,117',
	},
]

export function AppRightSidebar() {
	return (
		<Sidebar
			side='right'
			variant='sidebar'
			collapsible='none'
			className='w-full'
		>
			<SidebarContent>
				<SidebarGroup className='bg-gray-50 rounded-xl pt-2 pb-1 px-4 my-4'>
					<SidebarGroupLabel className='uppercase text-body-small font-semibold p-0 mb-3 h-auto text-gray-500'>
						Popular Communities
					</SidebarGroupLabel>
					<SidebarGroupContent className='mt-3.5 mb-4'>
						<SidebarMenu>
							{popularCommunities.map(item => (
								<SidebarMenuItem>
									<a
										href='#'
										className='flex items-center gap-2 py-1 px-4'
									>
										<Avatar>
											<AvatarImage src={item.avatar} />
											<AvatarFallback>r/</AvatarFallback>
										</Avatar>
										<span className='py-1.5 flex flex-col justify-center'>
											<span className='text-sm'>{item.name}</span>
											<span className='text-body-small text-grey-300'>
												{item.members} members
											</span>
										</span>
									</a>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
						<Button
							size={'sm'}
							variant={'ghost'}
							className='justify-start text-body-small hover:bg-gray-200 rounded-2xl'
						>
							See more
						</Button>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
