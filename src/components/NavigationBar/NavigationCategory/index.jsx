import './styles.scss'

export function NavigationCategory (props) {
  return (
    <li className={'navigationBar__category-item'}>
      <a href={props.link}>{props.title}</a>
    </li>
  )
}