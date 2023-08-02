import './styles.scss';

const TextField = (props) => {
  return <>
    <div className={`textField ${props.className}`}>
      <form className={`form__textField`}>
        <div className="form__row">
          <div className="form__controls">
            <label className='label__textField'>{ props.labelName }</label>
          </div>

          <div className={props.className === 'textField-none' ? 'form__controls none' : 'form__controls'}>
            <div className="image">
              {
                props.className === 'textField' && <img src="/textField/textField.png" alt="textField" /> ||
                props.className === 'textField-secondary-positive' && <img src="/textField/textField.png" alt="textField" />  ||
                props.className === 'textField-selected' && <img src="/textField/textField.png" alt="textField" />  ||
                props.className === 'textField-error' && <img src="/textField/textField.png" alt="textField" />
              }
              {
                props.className === 'textField-primary-negative' && <img src="/textField/textField-primary-negative.png" alt="textField" /> ||
                props.className === 'textField-primary-color' && <img src="/textField/textField-primary-negative.png" alt="textField" />
              }
              {
                props.className === 'textField-primary-positive' && <img src="/textField/textField-primary-positive.png" alt="textField" /> 
              }
              {
                props.className === 'textField-secondary-negative' && <img src="/textField/textField-secondary-negative.png" alt="textField" /> 
              }
            </div>

            <input type="text" className='field__textField' placeholder={props.placeholder} />
          </div>
          <p className="helper">{props.helper}</p>
        </div>
      </form>
    </div>
  </>
}
export default TextField;
