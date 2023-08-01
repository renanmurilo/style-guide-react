import './styles.scss'

const Chips = (props) => {
  return <>
    <div className={`chips ${props.className}`}>
      <div className="image">
        {
          props.className === 'chips' && <img src="/chips/chips-star.png" alt="Star" /> ||
          props.className === 'chips-primary-positive' && <img src="/chips/chips-star.png" alt="Star" />
        }
        {
          props.className === 'chips-primary-negative' && <img src="/chips/chips-primary-negative-star.png" alt="Star" /> ||
          props.className === 'chips-primary-color' && <img src="/chips/chips-primary-negative-star.png" alt="Star" />
        }
        {
          props.className === 'chips-secondary-positive' && <img src="/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-enabled' && <img src="/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-disabled' && <img src="/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-hovered' && <img src="/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-pressed' && <img src="/chips/chips-secondary-positive-star.png" alt="Star" />
        }
        {
          props.className === 'chips-secondary-negative' && <img src="/chips/chips-secondary-negative-star.png" alt="Star" />
        }
      </div>
      
      <p>{props.text}</p>

      <a href="" className='close' title='Close'>
        {
          props.className === 'chips' && <img src="/chips/chips-close.png" alt="Close" /> ||
          props.className === 'chips-primary-positive' && <img src="/chips/chips-close.png" alt="Close" />
        }
        {
          props.className === 'chips-primary-negative' && <img src="/chips/chips-primary-negative-close.png" alt="Close" /> ||
          props.className === 'chips-primary-color' && <img src="/chips/chips-primary-negative-close.png" alt="Close" />
        }
        {
          props.className === 'chips-secondary-positive' && <img src="/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-enabled' && <img src="/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-disabled' && <img src="/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-hovered' && <img src="/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-pressed' && <img src="/chips/chips-secondary-positive-close.png" alt="Close" />
        }
        {
          props.className === 'chips-secondary-negative' && <img src="/chips/chips-secondary-negative-close.png" alt="Close" />
        }
      </a>
    </div>
  </>
}
export default Chips;
