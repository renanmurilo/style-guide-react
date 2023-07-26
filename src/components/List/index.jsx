import './styles.scss'

export function List(props) {
  return(
    <div className={`list ${props.className}`}>
      <ul className='list__content'>
        <li className="list__item">
          <a href="javascript:void(0)" className="link">Item <img src={`${props.className === 'list' ||  props.className === 'list-primary-positive' ? '/primary-list.png' : 'white-list.png'}`} alt="Arrow" /></a>
          <p>Description</p>
        </li>

        <li className="list__item">
          <a href="javascript:void(0)" className="link">Item <img src={`${props.className === 'list' ||  props.className === 'list-primary-positive' ? '/primary-list.png' : 'white-list.png'}`} alt="Arrow" /></a>
          <p>Description</p>
        </li>
      </ul>
    </div>
  )
}