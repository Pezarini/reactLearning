export default function List() {
	const listOfNames = [
		{
			id: 1,
			name: 'Maria',
		},
		{
			id: 2,
			name: 'Pedro',
		},
		{
			id: 3,
			name: 'Bryan',
		}
	]

	return(
		<div>
			{listOfNames.map(item => (
				<p key={item.id}>{item.id} - {item.name}</p>
			))}
		</div>
	)
}