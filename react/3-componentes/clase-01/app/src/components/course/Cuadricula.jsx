import Curso from "./Curso";

const Cuadricula = () => {
	return (
		<section>
			<Curso 
				title="React desde cero"
				text="Crea interfaces de usuario reutilizables y basadas en componentes con la librería para el desarrollo frontend más usada en el mundo."
				image="./react.jpeg"
				alt="Logo del curso de react desde cero"
			/>
			<Curso 
				title="Angular desde cero"
				text="Aprende la última versión de Angular, una de las plataformas más usadas para crear apps web escalables y de alto rendimiento"
				image="./angular.jpeg"
				alt="Logo del curso de angular desde cero"
			/>
			<Curso 
				title="Vue desde cero"
				text="Domina Vue.js en su versión más actualizada y crea interfaces de usuario dinámicas y eficientes."
				image="./vue.jpeg"
				alt="Logo del curso de vue desde cero"
			/>
			<Curso 
				title="Svelte desde cero"
				text="Desarrolla tus apps con la librería más reciente que utiliza un enfoque distinto al momento de crear interfaces de usuario."
				image="./svelte.jpeg"
				alt="Logo del curso de svelte desde cero"
			/>
			<Curso 
				title="TypeScript desde cero"
				text="Domina el lenguaje que te da más control sobre tu código JavaScript a través de tipado estático, clases y programación orientada a objetos."
				image="./typescript.jpeg"
				alt="Logo del curso de typescript desde cero"
			/>
			<Curso 
				title="Html desde cero"
				text="Domina el lenguaje sobre el que está construida toda la web con el mejor curso en español."
				image="./html.jpeg"
				alt="Logo del curso de html desde cero"
			/>
			<Curso 
				title="Css desde cero"
				text="Domina el lenguaje que hace hermosa a la web con el mejor curso y el mejor profesor de CSS en español."
				image="./css.jpeg"
				alt="Logo del curso de css desde cero"
			/>
			<Curso 
				title="Javascript desde cero"
				text="Domina las bases del único lenguaje que te da la oportunidad de trabajar del lado del cliente y del lado del servidor."
				image="./javascript.jpeg"
				alt="Logo del curso de javascript desde cero"
			/>
			<Curso 
				title="Git desde cero"
				text="Domina las bases del único lenguaje que te da la oportunidad de trabajar del lado del cliente y del lado del servidor."
				image="./git.png"
				alt="Logo del curso de git desde cero"
			/>
			<Curso 
				title="Golang desde cero"
				text="Domina la última versión de Go, uno de los lenguajes backend con mayor demanda laboral."
				image="./golang.jpeg"
				alt="Logo del curso de golang desde cero"
			/>
		</section>		
	)
}

export default Cuadricula;

