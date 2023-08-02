import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardsView from './views/CardsView';
import Header from './components/Header/Header';
import TooltipView from './views/TooltipView';
import ListView from './views/ListView';
import ButtonsView from './views/ButtonsView';
import NavigationBarView from './views/NavigationBarView';
import BreadCrumbsView from './views/BreadCrumbsView';
import ChipsView from './views/ChipsView';
import NotificationView from './views/NotificationView';
import BadgesView from './views/BadgesView';
import LoadingView from './views/LoadingView';
import RadiosAndCheckboxView from './views/RadiosAndCheckboxView';
import SearchView from './views/SearchView';
import CarouselView from './views/CarouselView';
import OverlaysView from './views/OverlaysView'
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
          <Route path='breadcrumb' element={<BreadCrumbsView />} />
          <Route path='chips' element={<ChipsView />} />
          <Route path='notification' element={<NotificationView />} />
          <Route path='badges' element={<BadgesView />} />
          <Route path='loading' element={<LoadingView />} />
          <Route path='radiosandcheckbox' element={<RadiosAndCheckboxView />} />
          <Route path='search' element={<SearchView />} />
          <Route path='carousel' element={<CarouselView />} />
          <Route path='overlays' element={<OverlaysView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
