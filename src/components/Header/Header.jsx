import { NavLink } from "react-router-dom";
import './styles.scss'

const Header = () => {
  return <nav>
    <NavLink to="/">Cards</NavLink>
    <NavLink to="tooltip">Tooltip</NavLink>
    <NavLink to="list">List</NavLink>
    <NavLink to="buttons">Buttons</NavLink>
    <NavLink to="navigationbar">Navigation Bar</NavLink>
    <NavLink to="breadcrumb">BreadCrumbs</NavLink>
    <NavLink to="chips">Chips</NavLink>
    <NavLink to="notification">Notifications</NavLink>
    <NavLink to="badges">Badges</NavLink>
    <NavLink to="loading">Loading</NavLink>
    <NavLink to="radiosandcheckbox">Radios / Checkbox</NavLink>
    <NavLink to="search">Search</NavLink>
    <NavLink to="carousel">Carousel</NavLink>
    <NavLink to="overlays">Overlays</NavLink>
    <NavLink to="textfields">TextFields</NavLink>
  </nav>
}

export default Header;