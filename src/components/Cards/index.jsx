import './styles.scss'

export function Cards(props) {
  return (
    <div className={`card ${props.className} ${props.size ? props.size : ''}`}>
      <div className={`${props.className}__image ${props.size ? props.size : ''}`}>
        <img src={`/${props.className}.png`} alt="Woman" />
      </div>
      <div className={`${props.className}__bottom ${props.color} ${props.size ? props.size : ''}`}>
        <div className={`${props.className}__content-title`}>
          <h3 className={`${props.className}__title ${props.color} ${props.size ? props.size : ''}`}>Title</h3>
          <p className={`${props.className}__subtitle ${props.color} ${props.size ? props.size : ''}`}>Body</p>
        </div>
        <div className={`${props.className}__buttons`}>
          <a href="javascript:void(0)" className={`${props.className}__button-1 ${props.color}`}>Button</a>
          <a href="javascript:void(0)" className={`${props.className}__button-2 ${props.color}`}>Button</a>   
        </div>
      </div>
    </div>
  )
}