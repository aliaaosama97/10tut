import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>add color Name:</label>
      <input 
        autoFocus
        type="text" 
        placeholder='add color name'
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  )
}

export default Input