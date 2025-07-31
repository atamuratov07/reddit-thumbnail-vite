import RedditLogoIcon from '@/assets/reddit-icon-logo.png'
import RedditTextIcon from '@/assets/reddit-text-logo.png'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { useSidebar } from '@/components/ui/sidebar'
import {
	ChartNoAxesColumnIncreasing,
	CircleX,
	Ellipsis,
	Handbag,
	LogIn,
	Menu,
	QrCode,
	Search,
	SquareMousePointer,
} from 'lucide-react'
import { useState } from 'react'

const menuItems = [
	{ icon: <LogIn />, text: 'Log In / Sign Up' },
	{ icon: <SquareMousePointer />, text: 'Advertise on Reddit' },
	{
		icon: <ChartNoAxesColumnIncreasing />,
		text: 'Try Reddit Pro',
		label: 'BETA',
	},
	{ icon: <Handbag />, text: 'Shop Collectable Avatars' },
]

export function AppHeader() {
	const [searchQuery, setSearchQuery] = useState('')
	const { toggleSidebar } = useSidebar()

	return (
		<header className='fixed top-0 z-50 w-full border-b border-border bg-background/95'>
			<div className='flex h-14 items-center justify-between px-4'>
				<div className='flex tems-center gap-x-2'>
					<Button
						variant='ghost'
						className='w-10 h-10 rounded-full xl:hidden'
						onClick={toggleSidebar}
					>
						<Menu className='h-5 w-5' />
					</Button>

					<div className='flex items-center space-x-2 mr-4'>
						<img
							className='w-8 h-8'
							src={RedditLogoIcon}
							alt='reddit-icon-logo'
						/>
						<img
							src={RedditTextIcon}
							alt='Reddit Text Icon'
							className='hidden sm:block h-5.5'
						/>
					</div>
				</div>

				<div className='flex-1 max-w-[750px] xl:max-w-xl'>
					<div className='relative'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
						<Input
							type='text'
							placeholder='Search Reddit'
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							className={
								'pl-10 pr-4 h-10 bg-gray-200 border-0 rounded-4xl focus:bg-background focus:ring focus:ring-ring transition-all duration-200 text-body-medium'
							}
						/>
						{searchQuery && (
							<Button
								variant='ghost'
								size='sm'
								className='absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0'
								onClick={() => setSearchQuery('')}
							>
								<CircleX className='h-3 w-3' />
							</Button>
						)}
					</div>
				</div>

				<div className='flex ml-6 gap-2 items-center'>
					<Button
						size={'lg'}
						className='hidden xl:flex rounded-4xl px-3.5 bg-gray-200 text-secondary-foreground hover:bg-gray-300'
					>
						<QrCode />
						Get App
					</Button>
					<Button size={'lg'} className='rounded-4xl px-3.5'>
						Log In
					</Button>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant={'ghost'}
								className='w-10 h-10 rounded-full text-secondary-foreground hover:bg-gray-200'
							>
								<Ellipsis className='w-5 h-5' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-64 px-0 py-2'>
							{menuItems.map(item => (
								<DropdownMenuItem
									key={item.text}
									className='text-body-medium px-4 py-3.5 hover:bg-background'
								>
									{item.icon}
									<span>{item.text}</span>
									{item.label ?? (
										<span className='text-primary'>{item.label}</span>
									)}
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	)
}
