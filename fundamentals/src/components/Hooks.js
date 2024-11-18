import { useState, useEffect } from "react";

export default function Hooks() {
	const [idade, setIdade] = useState(19) // A variavel idade se iniciará com 19
	
	function mudarIdade() {
		setIdade(idade + 1);
	}
	useEffect(() => {
		console.log("I'm Executing")
	}, [idade])
	return (
		<div>
			<p>{idade}</p>
				<button onClick={mudarIdade}>Change Age</button>
			</div>
		);
	}