import { useState, useEffect } from "react";

const Calculator = ({ name }) => {
	const [numbers, setNumbers] = useState([0,0]);
	const [text, setText] = useState("");
	
	useEffect(() => {
		console.log(new Date().getTime());
		return () => {}
	}, [text])
	
	const setNumber = (e) => {
		let num = e.target.name === "num01"? [e.target.value,numbers[1]] : [numbers[0],e.target.value];
		setNumbers(num);
	}
	return (
		<>
			<h2>{ name }</h2>
			<form>
				<input
					type="number"
					name="num01"
					value={numbers[0]}
					onChange={setNumber}
				/>
				<input
					type="number"
					name="num02"
					value={numbers[1]}
					onChange={setNumber}
				/>
			</form>
			<span>Resultado: {Number(numbers[0]) + Number(numbers[1])}</span>
			<input
				type="text"
				onChange={e => { setText(e.target.value) }}
			/>
			<span>{ text }</span>
		</>
	)
}

export default Calculator;

