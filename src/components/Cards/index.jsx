import './styles.scss'

export function Cards() {
  return (
    <div className='card-vertical'>
      <div className='card-vertical__image'>
        <img src="/card-image.png" alt="Woman" />
      </div>
      <div className='card-vertical__bottom'>
        <h3 className='card-vertical__title'>Title</h3>
        <p className='card-vertical__subtitle'>Body</p>
        <div className='card-vertical__buttons'>
          <button className='card-vertical__button-1'>Button</button>
          <button className='card-vertical__button-2'>Button</button>   
        </div>
      </div>
    </div>
  )
}