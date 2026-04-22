import { cardData } from "../data/data";
import Card from "./Card";
function Content(){

    return(
        <>
       <section className="service">
      <h2>Roles</h2>
      <div className="cardContainer" >
        {cardData.map((value,index) => (
            <Card 
                key={index}
                role={value.title}
                responsibility={value.description}
            />
        ))};
      </div>
    </section>
    
        </>
)
}


export default Content;