function Events() {
	const handleClick = () => {
		console.log('Clicked')
	}

	return (
		<div className="FirstComponent">
			<button onClick={handleClick}>Click here</button>
			<hr/>
			<button onClick={() => console.log('Test')}>Event in the element</button>
		</div>
	);
}

export default Events;
