import './styles.scss';

const Search = (props) => {
  return <>
    <div className={`search ${props.className}`}>
      <form className={`form__search ${props.size}`}>
        <div className="form__row">
          <div className="image">
            {
              props.className === 'search' && <img src="/search/search.png" alt="Search" /> ||
              props.className === 'search-primary-positive' && <img src="/search/search.png" alt="Search" />
            }
            {
              props.className === 'search-primary-negative' && <img src="/search/search-primary-negative.png" alt="Search" /> ||
              props.className === 'search-primary-color' && <img src="/search/search-primary-negative.png" alt="Search" />
            }
            {
              props.className === 'search-secondary-positive' && <img src="/search/search-secondary-positive.png" alt="Search" /> 
            }
            {
              props.className === 'search-secondary-negative' && <img src="/search/search-secondary-negative.png" alt="Search" /> 
            }
          </div>

          <input type="search" className='field__search' placeholder={props.placeholder} />
        </div>
      </form>
    </div>
  </>
}
export default Search;
