import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsView from './views/CardsView';
import Header from './components/Header/Header';
import TooltipView from './views/TooltipView';
import ListView from './views/ListView';
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
