import { create_element,render } from "./libreria.js";

const a =  [create_element("a", {"id": "a-01", "class": "a", "href": "/"}, ["Inicio"]),
			create_element("a", {"id": "a-02", "class": "a", "href": "/servicio"}, ["servicio"]),
			create_element("a", {"id": "a-03", "class": "a", "href": "/contacto"}, ["contacto"]),
			create_element("a", {"id": "a-04", "class": "a", "href": "/conocenos"}, ["conocenos"])
];
const li = [create_element("li", {"id": "li-01", "class": "li"}, [a[0]]),
			create_element("li", {"id": "li-02", "class": "li"}, [a[1]]),
			create_element("li", {"id": "li-03", "class": "li"}, [a[2]]),
			create_element("li", {"id": "li-04", "class": "li"}, [a[3]])
];
const ul = create_element("ul", {"id": "ul", "class": "ul"}, li);
const nav = create_element("nav", {"id": "nav", "class": "nav"}, [ul]);
const header = create_element("header", {"id": "header", "class": "header"}, [nav]);
render(header, "root");
