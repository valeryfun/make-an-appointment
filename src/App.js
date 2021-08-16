import { BiArchive, BiTrash } from 'react-icons/bi'
import AddAppointment from './components/AddAppointment'
import AppointmentInfo from './components/AppointmentInfo'
import Search from './components/Search'
import { useState, useEffect, useCallback } from 'react'

function App({ myAppointment, item }) {
	const [appointmentList, setAppointmentList] = useState([])
	const [query, setQuery] = useState('')
	const [sortBy, setSortBy] = useState('ownerName')
	const [orderBy, setOrderBy] = useState('asc')

	const filteredAppointment = appointmentList
		.filter(item => {
			return (
				item.petName.toLowerCase().includes(query.toLowerCase()) ||
				item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
				item.aptNotes.toLowerCase().includes(query.toLowerCase())
			)
		})
		.sort((a, b) => {
			let order = orderBy === 'asc' ? 1 : -1
			return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
				? -1 * order
				: 1 * order
		})

	const fetchData = useCallback(() => {
		fetch('./data.json')
			.then(res => res.json())
			.then(data => {
				setAppointmentList(data)
			})
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return (
		<div className='app-header container mx-auto mt-3 font-thin'>
			<h1 className='text-5xl mb-3'>
				<BiArchive className='inline-block text-red-400 align-top' /> Your
				Appointments
			</h1>
			<AddAppointment
				sendAppointment={myAppointment =>
					setAppointmentList([...appointmentList, myAppointment])
				}
				lastId={appointmentList.reduce(
					(max, item) => (Number(item.id) > max ? Number(item.id) : max),
					0
				)}
			/>
			<Search
				query={query}
				onQueryChange={searchQuery => setQuery(searchQuery)}
				orderBy={orderBy}
				onOrderChange={mySort => setOrderBy(mySort)}
				sortBy={sortBy}
				onSortChange={mySort => setSortBy(mySort)}
			/>
			<ul className='divide-y divide-gray-200'>
				{filteredAppointment.map(appointment => (
					<AppointmentInfo
						key={appointment.id}
						appointment={appointment}
						deleteAppointment={appointmentID =>
							setAppointmentList(
								appointmentList.filter(
									appointment => appointment.id !== appointmentID
								)
							)
						}
					/>
				))}
			</ul>
		</div>
	)
}

export default App
