import styles from './styles.scss'

export function Buttons(props) {
  return (
    <div className={`button-content ${props.color ? props.color : ''}`}>
      <button className={`button-content__button ${props.color ? props.color : ''} ${props.size ? props.size : ''}`}>
        {props.icon ? <img src={props.icon} alt="icon" /> : ''}Button</button>
    </div>
  )
}