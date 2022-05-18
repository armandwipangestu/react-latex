import React from 'react';
var Latex = require("react-latex")

function App() {

  const fraction = `$$\\frac{1}{2}$$`
  const pythagorean = `$$a^2 + b^2 = c^2$$`
  const fendomental_theorem = `$$\\frac{d}{dx}\\int_{a}^{x}f(t)dt = f(x)$$`

  return (
    <div style={{ fontSize: 50 }}>
      <Latex>
        {fraction}
      </Latex>
      <hr />
      <Latex>
        {pythagorean}
      </Latex>
      <hr />
      <Latex>
        {fendomental_theorem}
      </Latex>
    </div>
  );
}

export default App;
