import Search from "../components/Searchs";

const SearchView = () => {
  return <>
    <div className="container__wrapper">
      <Search className='search' size='small' placeholder='Search' />
    </div>
    <br />
    <div className="container__wrapper">
      <Search className='search' size='small' placeholder='Small' />
    </div>
    <br />
    <div className="container__wrapper">
      <Search className='search' size='medium' placeholder='Medium' />
    </div>
    <br />
    <div className="container__wrapper">
      <Search className='search' size='large' placeholder='Large' />
    </div>
    <br />
    <div className="container__wrapper gap">
      <Search className='search-primary-positive' size='small' placeholder='Search' />
      <Search className='search-primary-negative' size='small' placeholder='Search' />
      <Search className='search-primary-color' size='small' placeholder='Search' />
      <Search className='search-secondary-positive' size='small' placeholder='Search' />
      <Search className='search-secondary-negative' size='small' placeholder='Search' />
    </div>
  </>
}
export default SearchView;
