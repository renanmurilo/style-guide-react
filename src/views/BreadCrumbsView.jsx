import BreadCrumb from "../components/BreadCrumbs";

const BreadCrumbsView = () => {
  return <>
    <div className='container__wrapper'>
      <BreadCrumb className="breadcrumb" />
    </div>

    <div className="container__wrapper gap">
      <BreadCrumb className="breadcrumb-primary-positive" />
      <BreadCrumb className="breadcrumb-primary-negative" />
      <BreadCrumb className="breadcrumb-primary-color" />
      <BreadCrumb className="breadcrumb-secondary-positive" />
      <BreadCrumb className="breadcrumb-secondary-negative" />
    </div>
  </>
}

export default BreadCrumbsView;