import React from "react";
import Eu from "./Eu";

class MeuPerfil extends React.Component{
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
                <h1>Meu Perfil</h1>
                <Eu />
                <hr/>
                <button class = "App-buton" onClick = {Handlechange}>{x?"Hide":"Show"}</button>{
                    x &&( 
                    <>
                    <h2>{"Nome: Rodrigo Temporim"}</h2>
                    <h2>Formação: Cursando Ciencias da Computação</h2>                    
                    <h2>Experiência: Nenhuma por enquanto</h2>                    
                    <hr/>
                    <button class = "App-buton2" onClick="https://github.com/RodrigoTemporim">Projetos</button> 
                    </>
                    )                
                }
                </center>
            </div>
        );
    }
}

export default MeuPerfil;


