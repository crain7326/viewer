import React from 'react';
import { Link } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';

const KakaoP = ({text}) => {
  const textArray = text.replace(/(?:\r\n|\r|\n)/g, '<br>').split('<br><br>');
  
  return (
    <div className='kakao_page'>
      <Navbar />
      <div className='kakao_page_text_wrap'>
        <div className='bg-slate-300 w-full h-11 py-2.5'>기본 탭</div>
        <div className='kakao_page_text'>
          {textArray.map((text, idx) => (
            <div key={idx}>
              <p>{text}</p>
              {textArray.length !== idx + 1 && <br />}
            </div>
          ))}
        </div>
      </div>
      <div className='kakao_page_btn_wrap text-center'>
        <Link className='bg-neutral-500 hover:bg-neutral-700 text-white py-2 px-4 rounded' to='../'>뒤로가기</Link>
      </div>
    </div>
  )
};

export default KakaoP;