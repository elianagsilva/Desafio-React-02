import React, { Component } from 'react';
import styled from 'styled-components';

export const Calculadora = styled.main`

  background: #8B4513;
  max-width: 500px;
  width: 50%;
  height: 60vh;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1{
    color: #F5FFFA;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  input{
    background-color: #FFDEAD;
    outline: none;
    padding: 0.7rem;
    border-radius: 5px;
    border: none;
  }

  button{
    padding: 0.4rem;
    width: 40px;
    margin-left: 5px;
    cursor: pointer;
    color: black;
    background-color: #FFDEAD;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
  }

  button:last-child{
    background-color: #800000;
    color: white;
   
  }

  h2{
    background-color: #FFDEAD;
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

`

export default class App extends Component{

  state = {
    numero1: '',
    numero2: '',
    resultado: ''
  }

  primeiroInput = (event) => {
    this.setState(
      {
        numero1: Number(event.target.value)
      }
    )
  }

  segundoInput = (event) => {
    this.setState(
      {
        numero2: Number(event.target.value)
      }
    )
  }

  soma = () => {
    this.setState(
      {
        resultado: this.state.numero1 + this.state.numero2
      }
    )
  }

  subtracao = () => {
    this.setState(
    {
      resultado: this.state.numero1 - this.state.numero2
    }
    ) 
  }

  divisao = () =>{
    this.setState(
    {
      resultado: this.state.numero1 / this.state.numero2
    }
    )
  }

  multiplicacao = () =>{
    this.setState(
      {
        resultado: this.state.numero1 * this.state.numero2
      }
    )
  }


  apagar = () =>{
    this.setState(
      {
      numero1: '',
      numero2: '',
      resultado: ''
      }
    )
  }

  render(){
    return(
      <>
 
        <Calculadora>
          <h1>Calculadora</h1>
          <input onChange={this.primeiroInput} type="number" value={this.state.numero1} />
          <input onChange={this.segundoInput} type="number" value={this.state.numero2} />
          <div>
            <button onClick={this.soma}>+</button>
            <button onClick={this.subtracao}>-</button>
            <button onClick={this.divisao}>/</button>
            <button onClick={this.multiplicacao}>*</button>
            <button onClick={this.apagar}>C</button>
          </div>
          <h2>{this.state.resultado}</h2>
        </Calculadora>
      </>
    )
  }
}


