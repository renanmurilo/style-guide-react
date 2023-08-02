import './styles.scss';

const Badge = (props) => {
  return <>
    <div className={`badge ${props.className}`}>
      <div className="content-badge">
        <div className="image">
          {
            props.className === 'badge' && <img src="https://renanmurilo.com.br/react/badge/badge.png" alt="Badge" /> ||
            props.className === 'badge-primary-positive' && <img src="https://renanmurilo.com.br/react/badge/badge.png" alt="Badge" />
          }
          {
            props.className === 'badge-primary-negative' && <img src="https://renanmurilo.com.br/react/badge/badge-primary-negative.png" alt="Badge" /> ||
            props.className === 'badge-primary-color' && <img src="https://renanmurilo.com.br/react/badge/badge-primary-negative.png" alt="Badge" />
          }
          {
            props.className === 'badge-secondary-positive' && <img src="https://renanmurilo.com.br/react/badge/badge-secondary-positive.png" alt="Badge" />
          }
          {
            props.className === 'badge-secondary-negative' && <img src="https://renanmurilo.com.br/react/badge/badge-secondary-negative.png" alt="Badge" />
          }
          <p className="count">2</p>
        </div>

        <h3>Shopping Bag</h3>
      </div>
    </div>
  </>
}
export default Badge;
