import { Buttons } from '../components/Buttons';

const ButtonsView = () => {
  return (
    <>
      <h2>Default Button</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons color={'button-default-primary-negative'} />
        <Buttons color={'button-default-primary-positive'} />
        <Buttons color={'button-default-primary-color'} />
        <Buttons color={'button-default-secondary-negative'} />
        <Buttons color={'button-default-secondary-positive'} />
      </div>
      <h2>Outline Button</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons color={'outline-button-primary-negative'} />
        <Buttons color={'outline-button-primary-positive'} />
        <Buttons color={'outline-button-primary-color'} />
        <Buttons color={'outline-button-secondary-negative'} />
        <Buttons color={'outline-button-secondary-positive'} />
      </div>
      <h2>Text Button</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons color={'text-button-primary-negative'} />
        <Buttons color={'text-button-primary-positive'} />
        <Buttons color={'text-button-primary-color'} />
        <Buttons color={'text-button-secondary-negative'} />
        <Buttons color={'text-button-secondary-positive'} />
      </div>
      <h2>Line Button</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons color={'line-button-primary-negative'} />
        <Buttons color={'line-button-primary-positive'} />
        <Buttons color={'line-button-primary-color'} />
        <Buttons color={'line-button-secondary-negative'} />
        <Buttons color={'line-button-secondary-positive'} />
      </div>
      <h2>Icon Button</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons icon={'/heart.png'} color={'button-default-primary-negative'} />
        <Buttons icon={'/heart.png'} color={'line-button-primary-negative'} />
        <Buttons icon={'/heart.png'} color={'text-button-primary-negative'} />
      </div>
      <h2>Button Sizes</h2>
      <hr />
      <br />
      <div className='container__wrapper'>
        <Buttons size={'small'} color={'button-default-primary-negative'} />
        <Buttons size={'medium'} color={'button-default-primary-negative'} />
        <Buttons size={'large'} color={'button-default-primary-negative'} />
      </div>
    </>
  );
};

export default ButtonsView;
