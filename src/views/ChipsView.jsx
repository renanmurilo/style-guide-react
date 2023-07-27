import Chips from "../components/Chips";

const ChipsView = () => {
  return <>
    <div className="container__wrapper">
      <Chips className='chips' text='Main Chip' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <Chips className='chips-primary-positive' text='Chip-Primary-Positive' />
      <Chips className='chips-primary-negative' text='Chip-Primary-Negative' />
      <Chips className='chips-primary-color' text='Chip-Primary-Color' />
      <Chips className='chips-secondary-positive' text='Chip-Secondary-Positive' />
      <Chips className='chips-secondary-negative' text='Chip-Secondary-Negative' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <Chips className='chips-enabled' text='Enabled' />
      <Chips className='chips-disabled' text='Disabled' />
      <Chips className='chips-hovered' text='Hovered' />
      <Chips className='chips-pressed' text='Pressed' />
    </div>
  </>
}
export default ChipsView;
