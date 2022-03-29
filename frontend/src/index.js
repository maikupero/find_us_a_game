import React from "react";
import { render } from 'react-dom';

function App() {
  return (
    <main>
      <p>Hello, world!</p>
    </main>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)