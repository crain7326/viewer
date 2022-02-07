import React from 'react';

// components
import Kbar from '../components/Kbar';

const KakaoP = ({text}) => {
  return (
    <div className='kakao_page'>
      <p className=''>Kakao page</p>
      <Kbar text={text} />
    </div>
  )
};

export default KakaoP;