import { List } from "./List";

const TooltipView = () => {
  return (
    <>
      <div className="container__wrapper gap">
        <List className='list' />
        <List className='list-primary-positive' />
        <List className='list-primary-negative' />
        <List className='list-primary-color' />
        <List className='list-secondary-positive' />
        <List className='list-secondary-negative' />
      </div>
    </>
  );
};

export default TooltipView;
