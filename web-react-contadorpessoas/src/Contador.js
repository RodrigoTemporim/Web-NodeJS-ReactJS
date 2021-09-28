import React from "react";

class Contador extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { count: 0};
    }
    
  

    render(){
        return(
            <div>
                <center class = "center">
                <h1>Pessoas : {this.state.count}</h1>
                <button class = "btn effect01" data-sm-link-text="+" target="_blank" onClick = {() => this.setState({count: this.state.count +1})}>Mais</button>
                <button class = "btn effect01" data-sm-link-text="-" target="_blank" onClick = {() => this.setState({count: this.state.count -1})}>Menos</button>
                </center>                
            </div>
        )
    }
}

export default Contador;