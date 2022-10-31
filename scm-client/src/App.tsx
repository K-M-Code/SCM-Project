import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import scmRoutes from './pages/scmRoutes';



function App() {
  return (
    <div className="App">
      <Navigation/>
      {scmRoutes}
    </div>
  );
}

export default App;
