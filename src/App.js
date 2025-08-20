import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const displayData = () => {
    setDisplayMessage(input);
  };

  return (
    <div>
      <h1>Display Input</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter something"
      />
      <button onClick={displayData}>Display</button>
      {displayMessage && <p>{displayMessage}</p>}
    </div>
  );
}

export default App;
