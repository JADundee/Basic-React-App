import React from 'react'
import colorNames from 'colornames'

const InputBox = ({ 
  colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText 
}) => {
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input 
        type="text"
        autoFocus
        placeholder='Add Color Name'
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  )
}

export default InputBox