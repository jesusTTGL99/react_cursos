import { Component } from "react";

class Calculator extends Component {
	// Primer paso del ciclo de vida: El componente se contruye en el "constructor".
	constructor(props) {
		super(props);
		this.state = [0,0];
		this.setNumber = this.setNumber.bind(this);
	}
	
	setNumber(e) {
		let num=e.target.name === "num01"? [e.target.value,this.state[1]] : [this.state[0],e.target.value];
		this.setState(num);
	}
	// Segundo paso del ciclo de vida: El componente se renderiza en el metodo "render"
	render() {
		return (
			<>
				<h2>{ this.props.name }</h2>
				<form>
					<input
						type="number"
						name="num01"
						value={this.state[0]}
						onChange={this.setNumber}
					/>
					<input
						type="number"
						name="num02"
						value={this.state[1]}
						onChange={this.setNumber}
					/>
				</form>
				<span>Resultado: {Number(this.state[0]) + Number(this.state[1])}</span>
			</>
		)
	}
	// Tercer paso del ciclo de vida: El componente se renderizo en el metodo "componentDidMount" 
	componentDidMount() {}
	// Cuarto paso del ciclo de vida: El componente se destruye en el metodo "componentWillUnmount()"
	componentWilUnmount() {}
}

export default Calculator;

