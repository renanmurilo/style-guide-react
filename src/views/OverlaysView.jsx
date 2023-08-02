import { Overlays } from '../components/Overlays';

const OverlaysView = () => {
  return (
    <>
      <h2>Olverlays </h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Overlays />
      </div>
      <br />
      <h2>Olverlays - Color Styles </h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Overlays color={'overlay-primary-positive'} image={'user'} />
        <Overlays color={'overlay-primary-negative'}/>
        <Overlays color={'overlay-primary-color'}/>
        <Overlays color={'overlay-secondary-positive'}/>
        <Overlays color={'overlay-secondary-negative'}/>
      </div>
    </>
  );
};

export default OverlaysView;
