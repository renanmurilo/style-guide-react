import { NavigationDepartment } from '../NavigationDepartment';
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../../../Hooks/useOnHoverOutSide";
import './styles.scss';

export function NavigationLink(props) {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <li className='navigationBar__menu-item' onMouseOver={() => setMenuDropDownOpen(true)} ref={dropdownRef}>
      <a href={props.link}>{props.text}</a>
      {props.child && isMenuDropDownOpen ? (
        <div className={'navigationBar__menu-child'}>
          <h4 className={'navigationBar__title-department'}>
            {props.titleDepartment}
          </h4>
          <NavigationDepartment categoryTitle={'Section'}/>
        </div>
      ) : null}
    </li>
  );
}
