import React from "react";
import { render } from 'react-dom';

import Food from "./components/food"; 

function App() {
  return (
    <main>
      <p>Hello, world!</p>
      <div>
        <Food />
      </div>
    </main>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)