import './styles.scss';

export function Overlays(props) {
  return (
    <div className={`overlay ${props.color ? props.color : 'main'}`}>
      <div className={'overlay__box-title'}>
        <h4 className={'overlay__title'}>Title</h4>
        <p className={'overlay__subtitle'}>Message</p>
        <button className={'overlay__close'}>X</button>
      </div>
      <div className={'overlay__body'}>
        <form className={'overlay__form'}>
          <div className={'overlay__form-row'}>
            <img src={`https://renanmurilo.com.br/react/${props.image ? props.image : 'user'}.png`} alt='user' />
            <input type='text' placeholder='Input Text' />
          </div>
          <div className={'overlay__form-row'}>
            <img src='https://renanmurilo.com.br/react/user.png' alt='user' />
            <input type='text' placeholder='Input Text' />
          </div>
          <button className={'overlay__button'}>Button</button>
          <button className={'overlay__button overlay__button--2'}>Button</button>
        </form>
      </div>
    </div>
  );
}
