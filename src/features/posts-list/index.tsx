import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { SelectTrigger } from '@radix-ui/react-select'
import { ChevronDown, Rows2, Rows3 } from 'lucide-react'
import { useState } from 'react'
import { Post } from './post-card'
import { postsData } from './posts-mock-data'

export function AppPostsList() {
	const [girdLayout, setGridLayout] = useState<string>('card')

	return (
		<div>
			<div className='my-2 mx-1 flex h-8 items-center'>
				<Select defaultValue='best'>
					<SelectTrigger className='h-8 pr-1.5 pl-2.5 flex items-center gap-x-1 rounded-2xl font-medium text-gray-500 hover:bg-gray-100 text-body-small'>
						<SelectValue></SelectValue>
						<ChevronDown className='h-4 w-4 pt-0.5' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Sort By</SelectLabel>
							<SelectItem value='best'>Best</SelectItem>
							<SelectItem value='hot'>Hot</SelectItem>
							<SelectItem value='new'>New</SelectItem>
							<SelectItem value='top'>Top</SelectItem>
							<SelectItem value='rising'>Rising</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select defaultValue='everywhere'>
					<SelectTrigger className='h-8 pr-1.5 pl-2.5 flex items-center gap-x-1 rounded-2xl font-medium text-gray-500 hover:bg-gray-100 text-body-small'>
						<SelectValue></SelectValue>
						<ChevronDown className='h-4 w-4 pt-0.5' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Sort By</SelectLabel>
							<SelectItem value='everywhere'>Everywhere</SelectItem>
							<SelectItem value='united-states'>
								United States
							</SelectItem>
							<SelectItem value='argentina'>Argentina</SelectItem>
							<SelectItem value='australia'>Australia</SelectItem>
							<SelectItem value='bulgaria'>Bulgaria</SelectItem>
							<SelectItem value='canada'>Canada</SelectItem>
							<SelectItem value='chile'>Chile</SelectItem>
							<SelectItem value='colombia'>Colombia</SelectItem>
							<SelectItem value='croatia'>Croatia</SelectItem>
							<SelectItem value='czech-republic'>
								Czech Republic
							</SelectItem>
							<SelectItem value='finland'>Finland</SelectItem>
							<SelectItem value='france'>France</SelectItem>
							<SelectItem value='germany'>Germany</SelectItem>
							<SelectItem value='greece'>Greece</SelectItem>
							<SelectItem value='hungary'>Hungary</SelectItem>
							<SelectItem value='iceland'>Iceland</SelectItem>
							<SelectItem value='india'>India</SelectItem>
							<SelectItem value='ireland'>Ireland</SelectItem>
							<SelectItem value='italy'>Italy</SelectItem>
							<SelectItem value='japan'>Japan</SelectItem>
							<SelectItem value='malaysia'>Malaysia</SelectItem>
							<SelectItem value='mexico'>Mexico</SelectItem>
							<SelectItem value='new-zealand'>New Zealand</SelectItem>
							<SelectItem value='philippines'>Philippines</SelectItem>
							<SelectItem value='poland'>Poland</SelectItem>
							<SelectItem value='portugal'>Portugal</SelectItem>
							<SelectItem value='puerto-rico'>Puerto Rico</SelectItem>
							<SelectItem value='romania'>Romania</SelectItem>
							<SelectItem value='serbia'>Serbia</SelectItem>
							<SelectItem value='singapore'>Singapore</SelectItem>
							<SelectItem value='spain'>Spain</SelectItem>
							<SelectItem value='sweden'>Sweden</SelectItem>
							<SelectItem value='taiwan'>Taiwan</SelectItem>
							<SelectItem value='thailand'>Thailand</SelectItem>
							<SelectItem value='turkey'>Turkey</SelectItem>
							<SelectItem value='united-kingdom'>
								United Kingdom
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select
					value={girdLayout}
					onValueChange={(value: string) => setGridLayout(value)}
				>
					<SelectTrigger className='h-8 pr-1.5 pl-2.5 flex items-center gap-x-1 rounded-2xl font-medium text-gray-500 hover:bg-gray-100 text-body-small'>
						<SelectValue aria-label={girdLayout}>
							{
								{
									card: <Rows2 className='size-4' />,
									compact: <Rows3 className='size-4' />,
								}[girdLayout]
							}
						</SelectValue>
						<ChevronDown className='h-4 w-4 pt-0.5' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>View</SelectLabel>
							<SelectItem
								value='card'
								className='flex items-center gap-x-1'
							>
								<Rows2 className='size-4' /> Card
							</SelectItem>
							<SelectItem
								value='compact'
								className='flex items-center gap-x-1'
							>
								<Rows3 className='size-4' /> Compact
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className='flex flex-col'>
				{postsData.map(postsData => {
					return (
						<>
							<Separator />
							<Post key={postsData.id} postData={postsData} />
						</>
					)
				})}
			</div>
		</div>
	)
}
