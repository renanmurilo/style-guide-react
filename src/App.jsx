import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsView from './components/CardsView';
import Header from './components/Header/Header';
import TooltipView from './components/TooltipView';
import ListView from './components/ListView';
import './styles/global.scss';

export function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CardsView />} />
          <Route path='tooltip' element={<TooltipView />} />
          <Route path='list' element={<ListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
