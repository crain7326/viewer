import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { useEffect, useState } from 'react';

function App() {
  const [ text, setText ] = useState('');
  const [ textBundle, setTextBundle] = useState([]);
  const [ isShow, setIsShow ] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleIsShow = () => {
    setIsShow(isShow => !isShow);
  }

  useEffect(()=>{
    setTextBundle(prev => {
      return text.replace(/(?:\r\n|\r|\n)/g, '<br>').split('<br><br>')
    });
  }, [text])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(route=><Route key={route.name} path={route.path} element={<route.component 
          text={text} textBundle={textBundle} isShow={isShow} handleIsShow={handleIsShow}
          handleChange={route.name === 'Home' && handleChange} />} />)}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
