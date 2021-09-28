import React from "react";


class Showandhide extends React.Component{

    state = {
        divcontainer: false,
    }

    render(){

        var Handlechange = e => {

            this.setState({divcontainer:!this.state.divcontainer});
        }

        const x=this.state.divcontainer;

        return(
            <div>
                <center>
                <h1>How to hide & show div element</h1>
                <h3>ReactJS Component</h3>
                <hr/>
                <button onClick = {Handlechange}>{x?"Hide":"Show"}</button>{
                    x &&( <div>My name is charan...!</div>)                
                }
                </center>
            </div>
        );
    }
}

export default Showandhide;