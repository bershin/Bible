
// Import images
import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Products(){
    return(
      <div class="products">
        <div class="box">
                    <img src={one} alt="Fogg"></img>
                    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
        </div>
        
        <div class="box">
            <img src={two} alt="villain"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
        </div>
        <div class="box">
            <img src={three} alt="Designs Club"></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      
      </div>
    )
  }

export default Products