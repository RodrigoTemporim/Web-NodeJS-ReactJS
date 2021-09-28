import react, {Component} from "react";
import "./Eu"

class Eu extends Component {
    render(){


        let img = "\eu.jpeg"

        return(
            <img src={img} width={300} height={400} alt = "eu"/>
        )
    }
}

export default Eu;