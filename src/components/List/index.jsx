import './styles.scss'

export function List(props) {
  return(
    <div className={`list ${props.className}`}>
      <ul className='list__content'>
        <li className="list__item">
          <a href="javascript:void(0)" className="link">Item 
          {
            props.className === 'list' &&  <img src='https://renanmurilo.com.br/react/list/list.png' alt="Arrow" /> ||
            props.className === 'list-primary-positive' &&  <img src='https://renanmurilo.com.br/react/list/list.png' alt="Arrow" /> 
          }
          {
            props.className === 'list-primary-negative' &&  <img src='https://renanmurilo.com.br/react/list/list-primary-negative.png' alt="Arrow" /> ||
            props.className === 'list-primary-color' &&  <img src='https://renanmurilo.com.br/react/list/list-primary-negative.png' alt="Arrow" /> 
          }
          {
            props.className === 'list-secondary-positive' &&  <img src='https://renanmurilo.com.br/react/list/list-secondary-positive.png' alt="Arrow" />
          }
          {
            props.className === 'list-secondary-negative' &&  <img src='https://renanmurilo.com.br/react/list/list-secondary-negative.png' alt="Arrow" />
          }
          </a>
          <p>Description</p>
        </li>

        <li className="list__item">
          <a href="javascript:void(0)" className="link">Item 
          {
            props.className === 'list' &&  <img src='https://renanmurilo.com.br/react/list/list.png' alt="Arrow" /> ||
            props.className === 'list-primary-positive' &&  <img src='https://renanmurilo.com.br/react/list/list.png' alt="Arrow" /> 
          }
          {
            props.className === 'list-primary-negative' &&  <img src='https://renanmurilo.com.br/react/list/list-primary-negative.png' alt="Arrow" /> ||
            props.className === 'list-primary-color' &&  <img src='https://renanmurilo.com.br/react/list/list-primary-negative.png' alt="Arrow" /> 
          }
          {
            props.className === 'list-secondary-positive' &&  <img src='https://renanmurilo.com.br/react/list/list-secondary-positive.png' alt="Arrow" />
          }
          {
            props.className === 'list-secondary-negative' &&  <img src='https://renanmurilo.com.br/react/list/list-secondary-negative.png' alt="Arrow" />
          }
          </a>
          <p>Description</p>
        </li>
      </ul>
    </div>
  )
}