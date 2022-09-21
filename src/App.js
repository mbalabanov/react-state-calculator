import { useState } from "react"
import "./App.css"

function App() {

  const initialState = {
    leftPane: '',
    selectedOperator: '+',
    rightPane: '',
    leftStored: '',
    rightStored: '',
    calculatedResult: 0
  }

  const [state, setState] = useState(initialState)

  const numberClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }

    newState[event.target.className] += event.target.value

    if (newState[event.target.className] !== '0') {
      if (event.target.value === '.' && state[event.target.className].indexOf(".") !== -1) {
        newState[event.target.className] = state[event.target.className]
      }
      if( newState[event.target.className] === '0.' || newState[event.target.className] === '.') {
        console.log(state[event.target.className].indexOf("."))
        newState[event.target.className] = '0.'
      }
      setState(newState)
    }
  }

  const operatorClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }
    newState.selectedOperator = event.target.value

    setState(newState)
  }

  const clearValue = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }
    newState[event.target.className] = ''
    setState(newState)
  }

  const calculateResult = () => {

    let newLeftPane = state.leftPane
    let newRightPane = state.rightPane

    if (newLeftPane[newLeftPane.length - 1] === '.') {
      newLeftPane.slice(0, -1)
    }

    if (newRightPane[newRightPane.length - 1] === '.') {
      newRightPane(0, -1)
    }

    const newState = {
      leftPane: parseInt(newLeftPane),
      selectedOperator: state.selectedOperator,
      rightPane: parseInt(newRightPane),
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }

    if (state.selectedOperator === '+') {
      newState.calculatedResult = newState.leftPane + newState.rightPane
    }

    if (state.selectedOperator === '-') {
      newState.calculatedResult = newState.leftPane - newState.rightPane
    }

    if (state.selectedOperator === '*') {
      newState.calculatedResult = newState.leftPane * newState.rightPane
    }

    if (state.selectedOperator === '÷') {
      newState.calculatedResult = newState.leftPane / newState.rightPane
    }

    setState(newState)
  }

  const storeClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }
    newState[event.target.className] = event.target.value
    setState(newState)
  }

  const recallClick = (event) => {
    const newState = {
      leftPane: state.leftPane,
      selectedOperator: state.selectedOperator,
      rightPane: state.rightPane,
      leftStored: state.leftStored,
      rightStored: state.rightStored,
      calculatedResult: state.calculatedResult
    }
    newState[event.target.className] = event.target.value
    setState(newState)
  }

  const clearAll = () => {
    setState(initialState)
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p className="numberField">{state.leftPane ? state.leftPane : '0'}</p>
        <div className="numbers">
          <button value="1" className="leftPane" onClick={numberClick}>1</button>
          <button value="2" className="leftPane" onClick={numberClick}>2</button>
          <button value="3" className="leftPane" onClick={numberClick}>3</button>
          <button value="4" className="leftPane" onClick={numberClick}>4</button>
          <button value="5" className="leftPane" onClick={numberClick}>5</button>
          <button value="6" className="leftPane" onClick={numberClick}>6</button>
          <button value="7" className="leftPane" onClick={numberClick}>7</button>
          <button value="8" className="leftPane" onClick={numberClick}>8</button>
          <button value="9" className="leftPane" onClick={numberClick}>9</button>
          <button value="0" className="leftPane" onClick={numberClick}>0</button>
          <button value="." className="leftPane" onClick={numberClick}>.</button><br/>
          <button value={ state.leftPane ? state.leftPane : '0' } className="leftStored" onClick={storeClick}>Store</button>
          <button value={ state.leftStored} className="leftPane" onClick={recallClick}>Recall</button>
          <button className="leftPane" onClick={clearValue}>Clear</button>
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
        <p className="numberField">{state.rightPane ? state.rightPane : '0'}</p>
        <div className="numbers">
          <button value="1" className="rightPane" onClick={numberClick}>1</button>
          <button value="2" className="rightPane" onClick={numberClick}>2</button>
          <button value="3" className="rightPane" onClick={numberClick}>3</button>
          <button value="4" className="rightPane" onClick={numberClick}>4</button>
          <button value="5" className="rightPane" onClick={numberClick}>5</button>
          <button value="6" className="rightPane" onClick={numberClick}>6</button>
          <button value="7" className="rightPane" onClick={numberClick}>7</button>
          <button value="8" className="rightPane" onClick={numberClick}>8</button>
          <button value="9" className="rightPane" onClick={numberClick}>9</button>
          <button value="0" className="rightPane" onClick={numberClick}>0</button>
          <button value="." className="rightPane" onClick={numberClick}>.</button><br/>
          <button value={ state.rightPane ? state.rightPane : '0' } className="rightStored" onClick={storeClick}>Store</button>
          <button value={ state.rightStored} className="rightPane" onClick={recallClick}>Recall</button>
          <button className="rightPane" onClick={clearValue}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p className="numberField">{state.calculatedResult}</p>
        <div>
          <button onClick={calculateResult}>=</button><br/><br/>
          <button onClick={clearAll}>Clear All</button>
        </div>
      </div>
    </div>
  )
}

export default App
