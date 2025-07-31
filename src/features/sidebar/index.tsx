import {
	AtSign,
	BookOpen,
	ChartNoAxesColumnIncreasing,
	ChevronDown,
	CircleQuestionMark,
	Clapperboard,
	Gamepad2,
	Home,
	Hourglass,
	Laugh,
	Megaphone,
	Menu,
	MessageCircleQuestionMark,
	MicVocal,
	PackageSearch,
	Star,
	TrendingUp,
	Triangle,
	Tv,
	Wrench,
} from 'lucide-react'

import { RedditIconCommunity } from '@/components/icons/reddit-icon-community'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	useSidebar,
} from '@/components/ui/sidebar'
import { useState } from 'react'

const mainNavItems = [
	{
		title: 'Home',
		icon: Home,
		url: '#',
	},
	{
		title: 'Popular',
		icon: TrendingUp,
		url: '#',
		isActive: true,
	},
	{
		title: 'Answers',
		label: 'BETA',
		icon: Triangle,
		url: '#',
	},
]

const topics = [
	{
		title: 'Internet Culture (Viral)',
		icon: Laugh,
		url: '#',
	},
	{
		title: 'Games',
		icon: Gamepad2,
		url: '#',
	},
	{
		title: 'Q&As',
		icon: MessageCircleQuestionMark,
		url: '#',
	},
	{
		title: 'Technology',
		icon: Tv,
		url: '#',
	},
	{
		title: 'Pop Culture',
		icon: Star,
		url: '#',
	},
	{
		title: 'Movies & TV',
		icon: Clapperboard,
		url: '#',
	},
]

const resources = [
	{ name: 'About Reddit', icon: RedditIconCommunity, url: '/' },
	{ name: 'Advertise', icon: Megaphone },
	{
		name: 'Reddit Pro',
		icon: ChartNoAxesColumnIncreasing,
		label: 'BETA',
		url: '#',
	},
	{ name: 'Help', icon: CircleQuestionMark, url: '/' },
	{ name: 'Blog', icon: BookOpen, url: '/' },
	{ name: 'Careers', icon: Wrench, url: '/' },
	{ name: 'Press', icon: MicVocal, url: '/' },
]

const general = [
	{
		title: 'Communities',
		icon: AtSign,
		url: '#',
	},
	{
		title: 'Best of Reddit',
		icon: Hourglass,
		url: '#',
	},
	{
		title: 'Topics',
		icon: PackageSearch,
		url: '#',
	},
]
export function AppSidebar() {
	const [expandedSections, setExpandedSections] = useState({
		topics: true,
		resources: true,
	})
	const { isMobile, toggleSidebar } = useSidebar()

	return (
		<Sidebar
			variant='sidebar'
			collapsible='offcanvas'
			className='top-14 h-[calc(100vh-3.5rem)] border-r border-sidebar-border'
		>
			<Button
				variant={'outline'}
				className={`absolute z-100 border-gray-400 shadow right-0 top-5 translate-x-1/2 w-8 h-8 rounded-full ${
					isMobile ? 'hidden' : ''
				}`}
				onClick={toggleSidebar}
			>
				<Menu className='w-4 h-4' />
			</Button>
			<ScrollArea className='h-full'>
				<SidebarContent className='pl-4 pr-6 text-gray-700'>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu className='gap-0'>
								{mainNavItems.map(item => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											isActive={item.isActive}
											className='h-10'
										>
											<a
												href={item.url}
												className='flex items-center space-x-2 px-4 py-0 h-10'
											>
												<item.icon
													strokeWidth={1.5}
													className='h-5 w-5 shrink-0'
												/>
												<span className='text-body-medium'>
													{item.title}
													{item.label && (
														<Badge
															variant='outline'
															className='ml-1 h-5 px-2 text-xs text-primary'
														>
															{item.label}
														</Badge>
													)}
												</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>

					<Separator />

					<Collapsible
						open={expandedSections.topics}
						onOpenChange={open =>
							setExpandedSections(prev => ({ ...prev, topics: open }))
						}
					>
						<SidebarGroup className='gap-y-1'>
							<SidebarGroupLabel
								asChild
								className='justify-between uppercase tracking-wide'
							>
								<CollapsibleTrigger>
									<span className='text-gray-500 font-normal text-body-small'>
										Topics
									</span>
									<ChevronDown
										className={`h-4 w-4 text-secondary-foreground transition-transform duration-200 ${
											expandedSections.topics ? '-rotate-180' : ''
										}`}
									/>
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 duration-200'>
								<SidebarGroupContent>
									<SidebarMenu className='gap-y-0'>
										{topics.map(item => (
											<SidebarMenuItem key={item.title}>
												<SidebarMenuButton
													asChild
													className='px-4 py-2.5 h-auto'
												>
													<a
														href={item.url}
														className='flex items-center justify-between'
													>
														<div className='flex items-center space-x-3'>
															<item.icon
																strokeWidth={1.5}
																className='h-5 w-5'
															/>
															<span className='text-body-medium'>
																{item.title}
															</span>
														</div>
														<ChevronDown className='w-4 h-4 text-sidebar-muted-foreground' />
													</a>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
									<Button
										variant={'ghost'}
										size={'sm'}
										className='text-body-small rounded-4xl ml-2 mt-1'
									>
										See more
									</Button>
								</SidebarGroupContent>
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>

					<div className='h-px w-full border-b border-border' />

					<Collapsible
						open={expandedSections.resources}
						onOpenChange={open =>
							setExpandedSections(prev => ({ ...prev, resources: open }))
						}
					>
						<SidebarGroup>
							<SidebarGroupLabel
								asChild
								className='justify-between uppercase tracking-wide'
							>
								<CollapsibleTrigger>
									<span className='text-gray-500 font-normal text-body-small'>
										Resources
									</span>
									<ChevronDown
										className={`h-4 w-4 text-secondary-foreground transition-transform duration-200 ${
											expandedSections.resources ? '-rotate-180' : ''
										}`}
									/>
								</CollapsibleTrigger>
							</SidebarGroupLabel>
							<CollapsibleContent className='data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 duration-200'>
								<SidebarGroupContent>
									<SidebarMenu className='gap-y-0'>
										{resources.map(item => (
											<SidebarMenuItem key={item.name}>
												<SidebarMenuButton
													asChild
													className='px-4 py-2.5 h-auto'
												>
													<a
														href={item.url}
														className='flex items-center justify-between'
													>
														<div className='flex items-center space-x-3'>
															<item.icon
																strokeWidth={1.2}
																width={'20'}
																height={'20'}
																className='h-5 w-5'
															/>
															<span className='text-body-medium'>
																{item.name}
																{item.label && (
																	<Badge
																		variant='outline'
																		className='ml-1 h-5 px-2 text-xs text-primary'
																	>
																		{item.label}
																	</Badge>
																)}
															</span>
														</div>
													</a>
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</CollapsibleContent>
						</SidebarGroup>
					</Collapsible>

					<Separator />

					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								{general.map(item => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											className='h-10 px-4 py-1'
										>
											<a
												href={`/${item.url}`}
												className='flex items-center justify-between'
											>
												<div className='flex items-center space-x-3'>
													<item.icon
														strokeWidth={1.5}
														className='h-5 w-5'
													/>
													<div className='flex flex-col items-start'>
														<span className='text-body-medium text-reddit-blue'>
															{item.title}
														</span>
													</div>
												</div>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</ScrollArea>
		</Sidebar>
	)
}
