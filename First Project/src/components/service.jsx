import Card from "./card";
import {serviceData} from "./data/data";
function Service(){
return (<>
   <section class="service">
      <h2>Service</h2>
      <div class="cardContainer" id="service">
        {serviceData.map((value,index) => (
            <Card 
                key={index}
                title={value.title}
                description={value.description}
            />
        ))};
      </div>
    </section>
    </>
    );
}
export default Service;