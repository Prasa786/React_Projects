import Card from "./card";
import { cardData } from "./data/data";

function About(){
    return (
        <>
        <section class="about" id="about">
            <h2>About Us</h2>
            <div class="cardContainer" id="cardContainer">
                {cardData.map((item,index) => (
                    <Card 
                    key={index}
                    title={item.title}
                    description={item.description}     
                    />               
                ))}
            </div>
        </section>
        </>
    )
}
export default About;