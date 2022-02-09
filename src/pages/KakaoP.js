import React from 'react';
import { Link } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';

const KakaoP = ({textBundle, isShow, handleIsShow}) => {
  return (
    <div className='kakao_page'>
      <Navbar />
      <div className='kakao_page_text_wrap' onClick={handleIsShow}>
        <div className='bg-slate-300 w-full h-11 py-2.5'>기본 탭</div>
        {isShow && <div className='bg-slate-500 w-full h-11 py-2.5'>Show!</div>}
        <div className='kakao_page_text'>
          {textBundle.map((text, idx) => (
            <div key={idx}>
              <p>{text}</p>
              {textBundle.length !== idx+1 && <br />}
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