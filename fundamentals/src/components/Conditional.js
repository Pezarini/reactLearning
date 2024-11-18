export default function List({ name }) {
	return(
		<div>
			<p>{name}</p>
			{name && 'Good Night'}
			{name === 'Pedro' ? <p>Name exist</p> : <p>Name don't exist</p>}
		</div>
	)
}