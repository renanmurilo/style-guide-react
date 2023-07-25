import './styles.scss'

export function Tooltip(props) {
  return (
    <div className={ `tooltip ${props.className}`}>
      <h3>Tooltip</h3>
      <p>Está no DNA do Aché buscar, constantemente, novas soluções terapêuticas diferenciadas, cumprindo assim seu propósito de levar mais vida às pessoas.</p>
      <a href="javascript:void(0)" className={`${props.className}__button`}>Button</a>
    </div>
  )
}