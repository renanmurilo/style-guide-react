import { Cards } from './components/Cards';
import { Tooltip } from './components/Tooltip';

import './styles/global.scss';

export function App() {
  return (
    <div className='container'>
      {/* <h2>Cards - Variations</h2>
      <hr />
      <div className='container__wrapper'>
        <Cards className='card-vertical' />
        <Cards className='card-horizontal' />
        <Cards className='card-mobile' />
      </div>
      <h2>Cards - Color styles vertical</h2>
      <hr />
      <div className='container__wrapper'>
        <Cards className='card-vertical' color="pink-10"/>
        <Cards className='card-vertical' color="bordo-60" />
        <Cards className='card-vertical' color="gray-20" />
        <Cards className='card-vertical' color="brown-90" />
      </div>
      <h2>Cards - Color styles horizontal</h2>
      <hr />
      <div className='container__wrapper'>
        <Cards className='card-horizontal' color="pink-10"/>
        <Cards className='card-horizontal' color="bordo-60" />
        <Cards className='card-horizontal' color="gray-20" />
        <Cards className='card-horizontal' color="brown-90" />
      </div>
      <h2>Cards - Color styles mobile</h2>
      <hr />
      <div className='container__wrapper'>
        <Cards className='card-mobile' color="pink-10"/>
        <Cards className='card-mobile' color="bordo-60" />
        <Cards className='card-mobile' color="gray-20" />
        <Cards className='card-mobile' color="brown-90" />
      </div>
      <h2>Cards - Sizes vertical</h2>
      <hr />
      <div className='container__wrapper'>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="medium" />
        <Cards className='card-vertical' color="pink-10" size="large" />
      </div> */}

      <div className='container__wrapper gap'>
        <Tooltip className="tooltip-primary-positive"/>
        <Tooltip className="tooltip-primary-negative"/>
        <Tooltip className="tooltip-primary-color"/>
        <Tooltip className="tooltip-secondary-positive"/>
        <Tooltip className="tooltip-secondary-negative"/>
      </div>
    </div>
  );
}
