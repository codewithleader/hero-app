import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";


export const SearchScreen = () => {

 
 const [ formValues, handleInputChange ] = useForm({
  searchText: '',
 });

 const { searchText } = formValues;

 const heroesFilted = getHeroByName('spiderman');

 const handleSearch = (e) => {
  e.preventDefault();
  console.log(searchText)

  
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
     <h4>Resultados</h4>
     <hr />

     {
      heroesFilted.map(hero => (
       <HeroCard
        key={ hero.id }
        {...hero}
       />
      ))
     }
    </div>
   </div>
  </div>
 )
}