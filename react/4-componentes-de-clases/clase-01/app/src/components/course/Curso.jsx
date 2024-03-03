const Curso = ({ title, text, image, alt }) => {
	return (
		<article>
			<figure>
				<img src={image} alt={alt} />
				<figcaption>{alt}</figcaption>
			</figure>
			<h2>{title}</h2>
			<span>{text}</span>
		</article>
	)
}

export default Curso;

