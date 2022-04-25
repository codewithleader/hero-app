import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

 const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  // rows-cols-1 row-cols-md-3
  return (    
     <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 animate__animated animate__fadeIn">
       {
        heroes.map(hero => (
          <HeroCard
            key={ hero.id }
            { ...hero }
         />
        ))
        }
     </div>
  )
}
