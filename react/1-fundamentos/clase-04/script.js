const Article = ({ title, content, img, alt }) => {
	return (
		<>
			<div />
			<div id="mi-article" className="article-container">
				<h1>{ title }</h1>
				<span>{ content }</span>
				<span>
					{ 2 + 5 < 10? (<span>Es menor</span>) : (<span>Es mayor</span>) }
				</span>
			</div>
			<div>
				<img src={ img } alt={ alt }/>
			</div>
			<form>
				<label htmlFor="">correo electronico</label>
				<input type="email" name="email" id="email"/>
			</form>
		</>
	);
}
