import { Tooltip } from "../components/Tooltip";

const TooltipView = () => {
  return (
    <>
      <div className="container__wrapper gap">
        <Tooltip className="tooltip-primary-positive" />
        <Tooltip className="tooltip-primary-negative" />
        <Tooltip className="tooltip-primary-color" />
        <Tooltip className="tooltip-secondary-positive" />
        <Tooltip className="tooltip-secondary-negative" />
      </div>
    </>
  );
};

export default TooltipView;
