import React ,{Component} from 'react';
import Output from './output';
import Keypad from './keypad';
import {Card} from 'reactstrap';
class Main extends Component{


	state={
		result:''
	};

buttonPressed(e){
if(e.target.name==='='){
	this.calculate();
}else if(e.target.name==='C'){
  this.setState({
    
    result:''
  });
}else{


	this.setState({
   result:this.state.result+e.target.name
});
}

};



calculate=()=>{
	this.setState({
		result:eval(this.state.result)
	});
};



	render(){
		return(


<div>
<Output result={this.state.result}></Output>
<Keypad buttonPressed={(e)=>this.buttonPressed(e)}></Keypad>
</div>

			);
	}
}
export default Main;