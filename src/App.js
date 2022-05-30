import React, { useState } from "react";
import Tabela from "./tabela";
import data from './podaci.json';

function App() {
  
  const [kontakt, setKontakt] = useState(data);

  return (
    <div className="App">
      <Tabela kontakt = {kontakt} setKontakt = {setKontakt} />
    </div>
  );
}

export default App;
