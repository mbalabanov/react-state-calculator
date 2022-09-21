import { useState } from "react"
import "./App.css"

function App() {

  const initialState = {
    leftPane: '',
    selectedOperator: '+',
    rightPane: '',
    calculatedResult: 0
  }

  const [state, setState] = useState(initialState)

  const leftNumberClick = (event) => {

    const newState = {
      leftPane: state.leftPane + event.target.value,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      calculatedResult: state.calculatedResult
    }
    if (newState.leftPane !== '0') {
      setState(newState)
    }
  }

  const rightNumberClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane + event.target.value,
      calculatedResult: state.calculatedResult
    }
    
    if (newState.rightPane !== '0') {
      setState(newState)
    }
  }

  const operatorClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: event.target.value,
      rightPane: state.rightPane,
      calculatedResult: state.calculatedResult
    }
    setState(newState)
  }

  const clearLeftValue = (event) => {
    console.log(event.target.className)
    const newState = {
      leftPane: '',
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      calculatedResult: state.calculatedResult
    }
    setState(newState)
  }

  const clearRightValue = (event) => {
    console.log(event.target.className)
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: '',
      calculatedResult: state.calculatedResult
    }
    setState(newState)
  }

  const calculateResult = () => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      calculatedResult: state.calculatedResult
    }

    if (state.selectedOperator === '+') {
      newState.calculatedResult = state.leftPane + state.rightPane
    }

    if (state.selectedOperator === '-') {
      newState.calculatedResult = state.leftPane - state.rightPane
    }

    if (state.selectedOperator === '*') {
      newState.calculatedResult = state.leftPane * state.rightPane
    }

    if (state.selectedOperator === '/') {
      newState.calculatedResult = state.leftPane / state.rightPane
    }
    setState(newState)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p className="numberField">{state.leftPane ? state.leftPane : 0}</p>
        <div className="numbers">
          <button value="1" className="leftPane" onClick={leftNumberClick}>1</button>
          <button value="2" className="leftPane" onClick={leftNumberClick}>2</button>
          <button value="3" className="leftPane" onClick={leftNumberClick}>3</button>
          <button value="4" className="leftPane" onClick={leftNumberClick}>4</button>
          <button value="5" className="leftPane" onClick={leftNumberClick}>5</button>
          <button value="6" className="leftPane" onClick={leftNumberClick}>6</button>
          <button value="7" className="leftPane" onClick={leftNumberClick}>7</button>
          <button value="8" className="leftPane" onClick={leftNumberClick}>8</button>
          <button value="9" className="leftPane" onClick={leftNumberClick}>9</button>
          <button value="0" className="leftPane" onClick={leftNumberClick}>0</button>
          <button className="leftPane" onClick={clearLeftValue}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p className="operatorField">{state.selectedOperator}</p>
        <div className="numbers">
          <button value="+" className="selectedOperator" onClick={operatorClick}>+</button>
          <button value="-" className="selectedOperator" onClick={operatorClick}>-</button>
          <button value="*" className="selectedOperator" onClick={operatorClick}>*</button>
          <button value="÷" className="selectedOperator" onClick={operatorClick}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p className="numberField">{state.rightPane ? state.rightPane : 0}</p>
        <div className="numbers">
          <button value="1" className="rightPane" onClick={rightNumberClick}>1</button>
          <button value="2" className="rightPane" onClick={rightNumberClick}>2</button>
          <button value="3" className="rightPane" onClick={rightNumberClick}>3</button>
          <button value="4" className="rightPane" onClick={rightNumberClick}>4</button>
          <button value="5" className="rightPane" onClick={rightNumberClick}>5</button>
          <button value="6" className="rightPane" onClick={rightNumberClick}>6</button>
          <button value="7" className="rightPane" onClick={rightNumberClick}>7</button>
          <button value="8" className="rightPane" onClick={rightNumberClick}>8</button>
          <button value="9" className="rightPane" onClick={rightNumberClick}>9</button>
          <button value="0" className="rightPane" onClick={rightNumberClick}>0</button>
          <button className="rightPane" onClick={clearRightValue}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p className="numberField">{state.calculatedResult}</p>
        <div>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
