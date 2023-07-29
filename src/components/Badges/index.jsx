import './styles.scss';

const Badge = (props) => {
  return <>
    <div className={`badge ${props.className}`}>
      <div className="content-badge">
        <div className="image">
          {
            props.className === 'badge' && <img src="/badge/badge.png" alt="Badge" /> ||
            props.className === 'badge-primary-positive' && <img src="/badge/badge.png" alt="Badge" />
          }
          {
            props.className === 'badge-primary-negative' && <img src="/badge/badge-primary-negative.png" alt="Badge" /> ||
            props.className === 'badge-primary-color' && <img src="/badge/badge-primary-negative.png" alt="Badge" />
          }
          {
            props.className === 'badge-secondary-positive' && <img src="/badge/badge-secondary-positive.png" alt="Badge" />
          }
          {
            props.className === 'badge-secondary-negative' && <img src="/badge/badge-secondary-negative.png" alt="Badge" />
          }
          <p className="count">2</p>
        </div>

        <h3>Shopping Bag</h3>
      </div>
    </div>
  </>
}
export default Badge;
