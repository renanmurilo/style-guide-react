import Badge from "../components/Badges";

const BadgesView = () => {
  return <>
    <div className="container__wrapper gap">
      <Badge className='badge' />
    </div>

    <div className="container__wrapper gap">
      <Badge className='badge-primary-positive' />
      <Badge className='badge-primary-negative' />
      <Badge className='badge-primary-color' />
      <Badge className='badge-secondary-positive' />
      <Badge className='badge-secondary-negative' />
    </div>
  </>
}
export default BadgesView;
