import './styles.scss';

const Notification = (props) => {
  return <>
    <div className={`notification ${props.className}`}>
      <div className="content-notification">
        <div className="image">
          {
            props.className === 'success' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-success-done.png" alt="Done" /> ||
            props.className === 'warning' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-warning-done.png" alt="Done" /> ||
            props.className === 'error' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-error-done.png" alt="Done" />
          }
        </div>
        <div className="text">
          <h3>{props.titulo}</h3>
          <p>{props.text}</p>
        </div>
      </div>

      <a href="" className="close">
        {
          props.className === 'success' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-success-close.png" alt="Done" />  ||
          props.className === 'warning' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-warning-close.png" alt="Done" />  ||
          props.className === 'error' && <img src="https://renanmurilo.com.br/react/notificacoes/notification-error-close.png" alt="Done" />
        }
      </a>
    </div>
  </>
}

export default Notification;
