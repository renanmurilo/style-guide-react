import { NavigationCategory } from '../NavigationCategory';

import './styles.scss'

export function NavigationDepartment(props) {
  return (
    <div className={'navigationBar__department-wrapper'}>
      <h3 className={'navigationBar__categoryTitle'}>{props.categoryTitle}</h3>
      <ul className={'navigationBar__categories'}>
        <NavigationCategory link={'javascript:void(0)'} title={'item 01'} />
        <NavigationCategory link={'javascript:void(0)'} title={'item 01'} />
        <NavigationCategory link={'javascript:void(0)'} title={'item 01'} />
      </ul>
    </div>
  );
}
