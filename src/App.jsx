import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Workflows React App</h1>
        <p>
          ¡Hola! Esta es tu aplicación React con GitHub Actions.
        </p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>
            Edita <code>src/App.jsx</code> y guarda para ver los cambios.
          </p>
        </div>
        <div className="workflow-info">
          <h2>🔄 Información del Workflow</h2>
          <p>Este proyecto se despliega automáticamente con GitHub Actions</p>
          <ul>
            <li>✅ Instalación de dependencias</li>
            <li>✅ Construcción del proyecto</li>
            <li>✅ Verificación de sintaxis</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
