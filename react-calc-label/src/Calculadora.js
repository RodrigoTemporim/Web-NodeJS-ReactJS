import React, {useState} from "react";
import './Calculadora.css'


export default function Calculadora(){

    const[valorTela,setValorTela] = useState('')
    const[resultado, setResultado] = useState(0)
    const[acumulador, setAcumulador] = useState(0)
    const[operado, setOperado] = useState(false)
    

    const Tela=(valor, res) => {
        return(
            <div className = "tela">
                <span className = "telaOperacao">{valor}</span>
                <span className = "telaRes">{res}</span>
            </div>
        )
    }

    const Btn = (label,onClick) => {
        return(
            <button className = "btn" onClick = {onClick}>{label}</button>
        );

    }

    //function 

    const addDigitoTela=(d)=>{
        if((d==='+' || d==='-' ||  d==='*' || d==='/') && operado){
            console.log("+-*/")
            setOperado(false)
            setValorTela(resultado+d)
            return
        }
        if(operado){
            setValorTela(d)
            setOperado(false)
            return
        }

        const valorDigitadoTela= valorTela+d
        setValorTela(valorDigitadoTela)
    }
    const limparMemoria=()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }

    const Operacao=(oper)=>{
        if(oper === 'bs'){
            let vtela = valorTela
            vtela = vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperado(false)
            return
        }
        try{
            const r=eval(valorTela)
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        } catch {
            setResultado('ERRO')
        }
    }



    return(
        <div class = "centro">
        <div className = 'conteiner'>
            <h3>Calculadora Matemática simples</h3>
            {Tela(valorTela, resultado)}
            <div className = 'botoes'>
                {Btn('AC', limparMemoria)}
                {Btn('(', ()=>addDigitoTela('('))}
                {Btn(')', ()=>addDigitoTela(')'))}
                {Btn('/', ()=>addDigitoTela('/'))}
                {Btn('7', ()=>addDigitoTela('7'))}
                {Btn('8', ()=>addDigitoTela('8'))}
                {Btn('9', ()=>addDigitoTela('9'))}
                {Btn('*', ()=>addDigitoTela('*'))}
                {Btn('4', ()=>addDigitoTela('4'))}
                {Btn('5', ()=>addDigitoTela('5'))}
                {Btn('6', ()=>addDigitoTela('6'))}
                {Btn('-', ()=>addDigitoTela('-'))}
                {Btn('1', ()=>addDigitoTela('1'))}
                {Btn('2', ()=>addDigitoTela('2'))}
                {Btn('3', ()=>addDigitoTela('3'))}
                {Btn('+', ()=>addDigitoTela('+'))}
                {Btn('0', ()=>addDigitoTela('0'))}
                {Btn('.', ()=>addDigitoTela('.'))}
                {Btn('<-', ()=>Operacao('bs'))}
                {Btn('=', ()=>Operacao('='))}
                
            </div>
        </div>

        </div>
    );
}