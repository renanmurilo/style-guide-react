import './styles.scss';

const BreadCrumb = (props) => {
  return <>
    <ul className={`breadcrumb ${props.className}`}>
      <li className="breadcrumb-item">
        <a href='' className="item">
          {props.className === 'breadcrumb' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-home.png`} alt="Home" />}
          {props.className === 'breadcrumb-primary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-home.png`} alt="Home" />}
          {
            props.className === 'breadcrumb-primary-negative' &&  <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-home.png`} alt="Home" /> || 
            props.className === "breadcrumb-primary-color"  && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-home.png`} alt="Home" />  ||
            props.className === "breadcrumb-secondary-negative"  && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-home.png`} alt="Home" />
          }
          {
            props.className === 'breadcrumb-secondary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-secondary-positive-home.png`} alt="Home" />
          }
          {''}
          <p>item 01</p>
        </a>
      </li>
      
      
      <div className="arrow">
        {props.className === 'breadcrumb' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-arrow.png`} alt="Arrow" />} 
        {props.className === 'breadcrumb-primary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-arrow.png`} alt="Arrow" />} 
        {
          props.className === 'breadcrumb-primary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> || 
          props.className === 'breadcrumb-primary-color' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> ||
          props.className === 'breadcrumb-secondary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> 
        }
        {
          props.className === 'breadcrumb-secondary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-secondary-positive-arrow.png`} alt="Arrow" />
        }
        {''}
      </div>

      <li className="breadcrumb-item">
        <a href="" className="item">
          {props.className === 'breadcrumb' && <img  src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-store.png`} alt="Store" />}
          {props.className === 'breadcrumb-primary-positive' && <img  src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-store.png`} alt="Store" />}
          {
            props.className === 'breadcrumb-primary-negative' && <img  src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-store.png`} alt="Store" /> || 
            props.className === 'breadcrumb-primary-color' && <img  src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-store.png`} alt="Store" />  ||
            props.className === 'breadcrumb-secondary-negative' && <img  src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-store.png`} alt="Store" />
          }
          {
            props.className === 'breadcrumb-secondary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-secondary-positive-store.png`} alt="Store" />
          }
          {''}
          <p>item 02</p>
        </a>
      </li>

      <div className="arrow">
        {props.className === 'breadcrumb' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-arrow.png`} alt="Arrow" />} 
        {props.className === 'breadcrumb-primary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-arrow.png`} alt="Arrow" />} 
        {
          props.className === 'breadcrumb-primary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> || 
          props.className === 'breadcrumb-primary-color' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> ||
          props.className === 'breadcrumb-secondary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-arrow.png`} alt="Arrow" /> 
        }
        {
          props.className === 'breadcrumb-secondary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-secondary-positive-arrow.png`} alt="Arrow" />
        }
        {''}
      </div>

      <li className="breadcrumb-item">
        <a href="" className="item">
          {props.className === 'breadcrumb' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-page.png`} alt="Page" />}
          {props.className === 'breadcrumb-primary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/${props.className}-page.png`} alt="Page" />}
          {
            props.className === 'breadcrumb-primary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-page.png`} alt="Page" /> || 
            props.className === 'breadcrumb-primary-color' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-page.png`} alt="Page" /> ||
            props.className === 'breadcrumb-secondary-negative' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-primary-negative-page.png`} alt="Page" />
          }
          {
            props.className === 'breadcrumb-secondary-positive' && <img src={`https://renanmurilo.com.br/react/breadcrumb/breadcrumb-secondary-positive-page.png`} alt="Page" />
          }
          {''}
          <p>item 03</p>
        </a>
      </li>
    </ul>
  </>
}
export default BreadCrumb;
