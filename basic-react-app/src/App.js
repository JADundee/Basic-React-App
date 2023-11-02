import DisplayBox from './components/DisplayBox';
import InputBox from './components/InputBox';
import { useState } from 'react';

function App() {
  
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)  
  
  
  

  
  return (
    <div className='App'>
      <DisplayBox
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText} 
      />
      <InputBox 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
