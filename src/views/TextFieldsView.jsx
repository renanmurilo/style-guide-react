import TextField from "../components/TextFields";

const TextFieldsViews = () => {
  return <>
    <div className="container__wrapper">
      <TextField className='textField' placeholder='Input text' labelName='Title' helper='Helper Text' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <TextField className='textField-primary-positive' placeholder='Input text' labelName='Title' helper='Helper Text' />
      <TextField className='textField-primary-negative' placeholder='Input text' labelName='Title' helper='Helper Text' />
      <TextField className='textField-primary-color' placeholder='Input text' labelName='Title' helper='Helper Text' />
      <TextField className='textField-secondary-positive' placeholder='Input text' labelName='Title' helper='Helper Text' />
      <TextField className='textField-secondary-negative' placeholder='Input text' labelName='Title' helper='Helper Text' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <TextField className='textField' placeholder='Input text' labelName='Title' helper='Helper Text' />
      <TextField className='textField' placeholder='Input text' labelName='Title' />
      <TextField className='textField-none' placeholder='Input text' labelName='Title' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <TextField className='textField-selected' placeholder='Input text' labelName='Selected' />
      <TextField className='textField-error' placeholder='Input text' labelName='Error' helper='Error' />
    </div>
  </>
}
export default TextFieldsViews;