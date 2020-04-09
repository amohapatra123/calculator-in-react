import React ,{Component} from 'react';
import {Card ,CardBody,CardText} from 'reactstrap';
class Keypad extends Component{
	render(){
	const {buttonPressed} =this.props
		return(

     <div className="row"  id="keypad">
     <div className="col-md-12">
     <button name="C" onClick={buttonPressed} className="btn btn-warning col-3 col-md-1 offset-md-1 mt-1 mb-1">C</button>
     </div>
     <div className="col-md-12">
     <button name="7" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-1 mt-1 mb-1">7</button>
     <button name="8" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">8</button>
     <button name="9" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">9</button>
     <button name="/" onClick={buttonPressed} className="btn btn-primary col-3 col-md-1 offset-md-2">/</button>
     <button name="4" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-1 mt-1 mb-1">4</button>
     <button name="5" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">5</button>
     <button name="6" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">6</button>
     <button name="*" onClick={buttonPressed} className="btn btn-primary col-3 col-md-1 offset-md-2">X</button>
     <button name="1" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-1 mt-1 mb-1">1</button>
     <button name="2" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">2</button>
     <button name="3" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2">3</button>
     <button name="-" onClick={buttonPressed} className="btn btn-primary col-3 col-md-1 offset-md-2">-</button>
     <button name="." onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-1 mt-1 mb-3">.</button>
     <button name="0" onClick={buttonPressed} className="btn btn-dark col-3 col-md-1 offset-md-2 mb-3">0</button>
     <button name="=" onClick={buttonPressed} className="btn btn-danger col-3 col-md-1 offset-md-2 mb-3">=</button>
     <button name="+" onClick={buttonPressed} className="btn btn-primary col-3 col-md-1 offset-md-2 mb-3">+</button>
     </div>
     </div>
			);
	}
}
export default Keypad;