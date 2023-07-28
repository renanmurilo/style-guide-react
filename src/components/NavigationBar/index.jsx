import { NavigationLink } from "./NavigationLink"

import './styles.scss'

export function NavigationBar(props) {
  return (
    <div className={`navigationBar ${props.size ? props.size : ''}`}>
      <div className={'navigationBar__logo'}>
        <img src="/Logo.png" alt="Logo" />
      </div>
      <nav className={'navigationBar__menu-nav'}>
        <ul className={'navigationBar__menu'}>
          <NavigationLink child={true} titleDepartment={'Title'} link={'javascript:void(0)'} text={'Página'} />
          <NavigationLink link={'javascript:void(0)'} text={'Página'} />
          <NavigationLink child={true} titleDepartment={'Title'} link={'javascript:void(0)'} text={'Página'} />
          <NavigationLink link={'javascript:void(0)'} text={'Página'} />
          <NavigationLink link={'javascript:void(0)'} text={'Página'} />
        </ul>
      </nav>
      <div className={'navigationBar__search'}>
        <a href="javascript:void(0)">
          <img src="/search.png" alt="Busca" />
        </a>
      </div>
      <div className={'navigationBar__user'}>
        <img src="/user.png" alt="Usuário" />
      </div>
    </div>
  )
}