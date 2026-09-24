import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@material-ui/core';
import Home from './pages/home.jsx'



function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="min-h-screen bg-[#030A22]  text-white items-center justify-center mx-auto px-0,h-screen">
     <Home/>
    </div>
  );
}

export default App;