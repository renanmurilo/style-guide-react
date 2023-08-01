import './styles.scss';

const RadioAndCheckbox = (props) => {
  return <>
    <div className={`buttons ${props.className}`}>
      <div className="form__row">
        <input type={props.type} className={props.type === 'checkbox' ? 'field active' : 'field'} id={props.htmlFor} />
        <label htmlFor={props.htmlFor} className={props.type === 'checkbox' ? 'label__field active' : 'label__field'}>{props.htmlFor}</label>
      </div>
    </div>
  </>
}
export default RadioAndCheckbox;
