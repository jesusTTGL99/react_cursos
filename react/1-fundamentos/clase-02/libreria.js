export const render = (content, root) => {
	let element = document.getElementById(root);
	element.appendChild(content);
}

export const create_element = (label, attributes, sons) =>{
	const element = document.createElement(label);
	let keys = Object.keys(attributes);
	keys.forEach(key => element.setAttribute(key, attributes[key]));
	sons.forEach(son => {
		if(typeof son === "string") {
			element.innerText += son;
			return;
		}
		element.appendChild(son);
	})
	return element;
}
