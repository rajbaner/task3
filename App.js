import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#3B3B98'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
