import React, {useState, Fragment} from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'

function App() {
  const [names, updateNames] = useState([])
  const [currentName, updateCurrentName] = useState('')
  const increment = () => {
    updateNames([...names, currentName])
  }
  const decrement = () => {
    let currentNames = names // make a separate copy of the array
    let newNames = currentNames.slice(0, -1)
    updateNames(newNames)
  }
  const handleChange = e => {
    updateCurrentName(e.target.value)
  }
  return (
    <Fragment>
      <input onChange={handleChange} placeholder="User name" />
      <button type = "button" class = "btn btn-outline-dark btn-sm-2" onClick={increment}>+</button>
      <button type = "button" class = "btn btn-outline-dark btn-sm-2" onClick={decrement}>-</button>
      <div>
        {names.map(name => {
          return (
            <div>
              <Hello name={name} />
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
