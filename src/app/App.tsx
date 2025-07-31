import { SidebarProvider } from '@/components/ui/sidebar'
import { AppHeader } from '@/features/header'
import { AppPostsList } from '@/features/posts-list'
import { AppRightSidebar } from '@/features/right-sidebar'
import { AppSidebar } from '@/features/sidebar'

export function App() {
	return (
		<SidebarProvider>
			<AppHeader />
			<AppSidebar />
			<div className='mt-14 min-h-[calc(100dvh-56px)] flex flex-col w-full md:max-w-[1120px] md:px-4 lg:px-8 mx-auto justify-stretch'>
				<div className='w-full flex-1 grid place-content-between grid-cols-[minmax(0,1fr)] s:grid-cols-[minmax(0,712px)_minmax(316px,auto)] gap-5 xl:grid-cols-[]'>
					<main className='w-full'>
						<AppPostsList />
					</main>
					<AppRightSidebar />
				</div>
			</div>
		</SidebarProvider>
	)
}
