import { BiCheck } from 'react-icons/bi'

const Dropdown = ({ toggle, onSortChange, onOrderChange, sortBy, orderBy }) => {
	if (!toggle) {
		return null
	}
	return (
		<div
			className='origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
		>
			<div
				className='py-1'
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='options-menu'
			>
				<div
					className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer'
					role='menuitem'
					onClick={() => onSortChange('petName')}
				>
					Pet Name {sortBy === 'petName' && <BiCheck />}
				</div>
				<div
					className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer'
					role='menuitem'
					onClick={() => onSortChange('ownerName')}
				>
					Owner Name {sortBy === 'ownerName' && <BiCheck />}
				</div>
				{/* <div
					className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer'
					role='menuitem'
					onClick={() => onSortChange('Date')}
				>
					Date {sortBy === 'aptDate' && <BiCheck />}
				</div> */}
				<div
					className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2'
					role='menuitem'
					onClick={() => onOrderChange('asc')}
				>
					Asc {orderBy === 'asc' && <BiCheck />}
				</div>
				<div
					className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer'
					role='menuitem'
					onClick={() => onOrderChange('desc')}
				>
					Desc {orderBy === 'desc' && <BiCheck />}
				</div>
			</div>
		</div>
	)
}

export default Dropdown
