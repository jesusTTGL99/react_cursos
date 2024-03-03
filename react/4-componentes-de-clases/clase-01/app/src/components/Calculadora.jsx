import { useState } from "react";

const Calculator = ({ name }) => {
	const [state, setState] = useState([0,0]);
	
	const setNumber = (e) => {
		let num = e.target.name === "num01"? [e.target.value,state[1]] : [state[0],e.target.value];
		setState(num);
	}
	return (
		<>
			<h2>{ name }</h2>
			<form>
				<input
					type="number"
					name="num01"
					value={state[0]}
					onChange={setNumber}
				/>
				<input
					type="number"
					name="num02"
					value={state[1]}
					onChange={setNumber}
				/>
			</form>
			<span>Resultado: {Number(state[0]) + Number(state[1])}</span>
		</>
	)
}

export default Calculator;

