import { useRef } from "react";
import "./Curso.css";

const Curso = ({ title, text, image, alt }) => {

	const reference = useRef();
	
	const click = () => {
		reference.current.classList.add("deactivate");
	}

	return (
		<article>
			<figure>
				<img ref={reference} src={image} alt={alt} />
				<figcaption>{alt}</figcaption>
			</figure>
			<h2>{title}</h2>
			<span>{text}</span>
			<button onClick={click}>Desactivar</button>
		</article>
	)
}

export default Curso;

