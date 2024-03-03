import Header from "./header/Header";
import Cuadricula from "./course/Cuadricula";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<h1>Cursos de Edteam</h1>
				<Cuadricula />
			</main>
		</>
	)
}

export default App;

