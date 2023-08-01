import Loading from "../components/Loading";

const LoadingView = () => {
  return <>
    <div className="container__wrapper">
      <Loading className='loading' message='Loading message' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <Loading className='loading-primary-positive' message='Loading message' />
      <Loading className='loading-primary-negative' message='Loading message' />
      <Loading className='loading-primary-color' message='Loading message' />
      <Loading className='loading-secondary-positive' message='Loading message' />
      <Loading className='loading-secondary-negative' message='Loading message' />
    </div>
  </>
}
export default LoadingView;
