import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const Home = ({text, handleChange}) => {
  return (
    <div className='home'>
      <nav><h1>Logo</h1></nav>
      <div className='tarea_wrap'>
        <textarea value={text} onChange={handleChange} autoFocus />
      </div>
      <div className='btn_wrap'>
        {routes.map(route => {
          return route.name !== 'Home' && <Link className={route.name} key={route.name} to={route.path}>{route.desc}</Link>
        })}
      </div>
    </div>
  )
};

export default Home;