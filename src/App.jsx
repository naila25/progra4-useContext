import React, { createContext, useContext } from 'react';

// 1. Crear el contexto con un valor por defecto
const GreetingContext = createContext('¡Hola!');

function GreetingComponent() {
  // 2. Usar useContext para acceder al valor del contexto
  const greeting = useContext(GreetingContext);
  return <div>{greeting}</div>;
}

function App() {
  return (
    // 3. Proveer un valor al contexto
    <GreetingContext.Provider value="¡Hola, mundo!">
      <GreetingComponent />
    </GreetingContext.Provider>
  );
}

export default App;
