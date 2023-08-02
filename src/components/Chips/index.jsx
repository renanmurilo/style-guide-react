import './styles.scss'

const Chips = (props) => {
  return <>
    <div className={`chips ${props.className}`}>
      <div className="image">
        {
          props.className === 'chips' && <img src="https://renanmurilo.com.br/react/chips/chips-star.png" alt="Star" /> ||
          props.className === 'chips-primary-positive' && <img src="https://renanmurilo.com.br/react/chips/chips-star.png" alt="Star" />
        }
        {
          props.className === 'chips-primary-negative' && <img src="https://renanmurilo.com.br/react/chips/chips-primary-negative-star.png" alt="Star" /> ||
          props.className === 'chips-primary-color' && <img src="https://renanmurilo.com.br/react/chips/chips-primary-negative-star.png" alt="Star" />
        }
        {
          props.className === 'chips-secondary-positive' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-enabled' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-disabled' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-hovered' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-star.png" alt="Star" /> ||
          props.className === 'chips-pressed' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-star.png" alt="Star" />
        }
        {
          props.className === 'chips-secondary-negative' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-negative-star.png" alt="Star" />
        }
      </div>
      
      <p>{props.text}</p>

      <a href="" className='close' title='Close'>
        {
          props.className === 'chips' && <img src="https://renanmurilo.com.br/react/chips/chips-close.png" alt="Close" /> ||
          props.className === 'chips-primary-positive' && <img src="https://renanmurilo.com.br/react/chips/chips-close.png" alt="Close" />
        }
        {
          props.className === 'chips-primary-negative' && <img src="https://renanmurilo.com.br/react/chips/chips-primary-negative-close.png" alt="Close" /> ||
          props.className === 'chips-primary-color' && <img src="https://renanmurilo.com.br/react/chips/chips-primary-negative-close.png" alt="Close" />
        }
        {
          props.className === 'chips-secondary-positive' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-enabled' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-disabled' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-hovered' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-close.png" alt="Close" /> ||
          props.className === 'chips-pressed' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-positive-close.png" alt="Close" />
        }
        {
          props.className === 'chips-secondary-negative' && <img src="https://renanmurilo.com.br/react/chips/chips-secondary-negative-close.png" alt="Close" />
        }
      </a>
    </div>
  </>
}
export default Chips;
