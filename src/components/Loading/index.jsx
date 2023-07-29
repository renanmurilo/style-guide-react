import './styles.scss';

const Loading = (props) => {
  return <>
    <div className={`loading ${props.className}`}>
      <div className="content-loading">
        <div class="spinner"></div>
        <h3>Loading</h3>
        <p>{props.message}</p>
      </div>
    </div>
  </>
}
export default Loading;
