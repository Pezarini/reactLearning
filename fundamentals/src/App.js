import './App.css';
import '.';
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';
import Hooks from './components/Hooks';
import List from './components/List';
import Conditional from './components/Conditional';

export default function App() {
	const name = 'Eu sou o Pedro';

	return (
		<div className="App">
		<h1>Hello World! {name}</h1>
		<FirstComponent />
		<Events />
		<img src='./logo192.png'></img>
		<hr/>
		<Hooks />
		<hr/>
		<List />
		<hr/>
		<Conditional name='Pedro'/>
		</div>
	);
}
