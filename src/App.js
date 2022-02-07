import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { useState } from 'react';

function App() {
  const [ text, setText ] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(route=><Route key={route.name} path={route.path} element={<route.component text={text} handleChange={route.name === 'Home' && handleChange} />} />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
