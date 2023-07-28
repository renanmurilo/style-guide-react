import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsView from './views/CardsView';
import Header from './components/Header/Header';
import TooltipView from './views/TooltipView';
import ListView from './views/ListView';
import ButtonsView from './views/ButtonsView';
import NavigationBarView from './views/NavigationBarView';
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
          <Route path='buttons' element={<ButtonsView />} />
          <Route path='navigationbar' element={<NavigationBarView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
