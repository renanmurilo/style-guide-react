import { NavLink } from "react-router-dom";
import './styles.scss'

const Header = () => {
  return <nav>
    <NavLink to="/">Cards</NavLink>
    <NavLink to="tooltip">Tooltip</NavLink>
    <NavLink to="list">List</NavLink>
    <NavLink to="buttons">Buttons</NavLink>
    <NavLink to="navigationbar">Navigation Bar</NavLink>
  </nav>
}

export default Header;