import './styles.scss'

export function Cards(props) {
  return (
    <div className={`card ${props.className}`}>
      <div className={`${props.className}__image`}>
        <img src={`/${props.className}.png`} alt="Woman" />
      </div>
      <div className={`${props.className}__bottom ${props.color}`}>
        <div className={`${props.className}__content-title`}>
          <h3 className={`${props.className}__title ${props.color}`}>Title</h3>
          <p className={`${props.className}__subtitle ${props.color}`}>Body</p>
        </div>
        <div className={`${props.className}__buttons`}>
          <a href="javascript:void(0)" className={`${props.className}__button-1 ${props.color}`}>Button</a>
          <a href="javascript:void(0)" className={`${props.className}__button-2 ${props.color}`}>Button</a>   
        </div>
      </div>
    </div>
  )
}