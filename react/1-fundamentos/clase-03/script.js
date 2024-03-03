const article = (img, title, content) => `
	<article class="container-article">
		<div>
			<img src="${img}">
		</div>
		<div>
			<h2>${title}</h2>
			<p>${content}</p>
		</div>
	</article>
`;

body = document.getElementById("root");
body.innerHTML += article("imagen.png", "titulo", "contenido...");

const element = (
	<dvi>
		<h1>Titulo<h1>
		<p>Parrafo...</p>
	</div>
);
