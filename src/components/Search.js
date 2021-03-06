import { BiSearch, BiCaretDown } from 'react-icons/bi'
import Dropdown from './Dropdown'
import { useState } from 'react'

const Search = ({
	query,
	onQueryChange,
	sortBy,
	onSortChange,
	orderBy,
	onOrderChange
}) => {
	const [toggleDropdown, setToggleDropdown] = useState(false)
	return (
		<div className='py-5'>
			<div className='mt-1 relative rounded-md shadow-sm'>
				<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
					<BiSearch />
					<label htmlFor='query' className='sr-only' />
				</div>
				<input
					type='text'
					name='query'
					id='query'
					className='pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300'
					placeholder='Search'
					value={query}
					onChange={e => {
						onQueryChange(e.target.value)
					}}
				/>
				<div className='absolute inset-y-0 right-0 flex items-center'>
					<div>
						<button
							type='button'
							className='justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center'
							id='options-menu'
							aria-haspopup='true'
							aria-expanded='true'
							onClick={() => setToggleDropdown(!toggleDropdown)}
						>
							Sort By <BiCaretDown className='ml-2' />
						</button>
						<Dropdown
							toggle={toggleDropdown}
							sortBy={sortBy}
							onSortChange={mySort => onSortChange(mySort)}
							orderBy={orderBy}
							onOrderChange={myOrder => onOrderChange(myOrder)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Search
