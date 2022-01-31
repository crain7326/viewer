import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(route=><Route path={route.path} element={route.component} />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
