import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";



export const SearchScreen = () => {

 const navigate = useNavigate();
 const location = useLocation();

 const { q = '' } = queryString.parse(location.search);

 
 const [ formValues, handleInputChange ] = useForm({
  searchText: q,
 });

 const { searchText } = formValues;

 const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

 const handleSearch = (e) => {
   e.preventDefault();
   if (searchText === '') return (navigate(''));

  navigate(`?q=${searchText}`);

  
 }

 return (
  <div>
   <h1>Search Screen</h1>
   <hr />
   <div className="row">
    <div className="col-5">
     <h4>Search</h4>
     <hr />

     <form onSubmit={handleSearch}>
      <input
       type="text"
       placeholder="Search hero"
       className="form-control"
       name="searchText"
       autoComplete="off"
       value={ searchText }
       onChange={ handleInputChange }
      />
      <button
       type="submit"
       className="btn btn-outline-light mt-3"
      >
       Search
      </button>
     </form>
    </div>

    <div className="col-7">
     <h4>Results</h4>
     <hr />

     {
      (q === '')
       ? <div className="alert bg-dark">The results will be displayed here...</div>
       : (heroesFiltered.length === 0) && <div className="alert alert-danger">No results for: { q }</div>
     }

     <div className="row row-cols-1 g-3">
       {
        heroesFiltered.map(hero => (
         <HeroCard
          key={ hero.id }
          {...hero}
         />
        ))
       }
     </div>
    </div>
   </div>
  </div>
 )
}