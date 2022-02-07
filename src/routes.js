// pages
import Home from './pages/Home';
import KakaoP from './pages/KakaoP';
import Ridi from './pages/Ridi';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ridi',
    name: 'Ridi',
    desc: '리디북스로 보기',
    component: Ridi,
  },
  {
    path: '/kakaop',
    name: 'KakaoP',
    desc: '카카오 페이지로 보기',
    component: KakaoP,
  }
]