import RadioAndCheckbox from "../components/RadiosAndCheckbox";

const RadiosAndCheckboxView = () => {
  return <>
    <div className="container__wrapper">
      <RadioAndCheckbox className='buttons' type='radio' htmlFor='Radio Button' />
      <RadioAndCheckbox className='buttons' type='checkbox' htmlFor='Checkbox' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <div className="box primary-positive">
        <RadioAndCheckbox className='buttons-primary-positive' type='radio' htmlFor='Radio Button Positive' />
        <RadioAndCheckbox className='buttons-primary-positive' type='checkbox' htmlFor='Checkbox positive' />
      </div>

      <div className="box primary-negative">
        <RadioAndCheckbox className='buttons-primary-negative' type='radio' htmlFor='Radio Button Negative' />
        <RadioAndCheckbox className='buttons-primary-negative' type='checkbox' htmlFor='Checkbox negative' />
      </div>

      <div className="box primary-color">
        <RadioAndCheckbox className='buttons-primary-color' type='radio' htmlFor='Radio Button Color' />
        <RadioAndCheckbox className='buttons-primary-color' type='checkbox' htmlFor='Checkbox color' />
      </div>

      <div className="box secondary-positive">
        <RadioAndCheckbox className='buttons-secondary-positive' type='radio' htmlFor='Radio Button SP' />
        <RadioAndCheckbox className='buttons-secondary-positive' type='checkbox' htmlFor='Checkbox SP' />
      </div>

      <div className="box secondary-negative">
        <RadioAndCheckbox className='buttons-secondary-negative' type='radio' htmlFor='Radio Button SN' />
        <RadioAndCheckbox className='buttons-secondary-negative' type='checkbox' htmlFor='Checkbox SN' />
      </div>
    </div>
  </>
}
export default RadiosAndCheckboxView;