import React ,{Component} from 'react';
import {Card} from 'reactstrap';
class Output extends Component{
	render(){
		const {result}=this.props
		return(
      <div className="row" id="output">
      <div className="col-md-12 mt-3">
      <p>{result}</p>
      </div>
      </div>

			);
	}
}
export default Output;