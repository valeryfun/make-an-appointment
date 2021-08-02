import { BiArchive, BiTrash } from 'react-icons/bi'
import AddAppointment from './components/AddAppointment'
import AppointmentInfo from './components/AppointmentInfo'
import Search from './components/Search'
import { useState, useEffect, useCallback } from 'react'

function App() {
	const [appointmentList, setAppointmentList] = useState([])

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
			<AddAppointment />
			<Search />
			<ul className='divide-y divide-gray-200'>
				{appointmentList.map(appointment => (
					<AppointmentInfo key={appointment.id} appointment={appointment} />
				))}
			</ul>
		</div>
	)
}

export default App
