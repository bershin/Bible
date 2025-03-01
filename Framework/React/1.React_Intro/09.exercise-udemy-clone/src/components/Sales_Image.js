import "../style.css"
import salesImage from "../asset/images/sales-image.jpeg"

function SalesImage(){
    return(
        <div class="sales-image">
        <img src={salesImage} alt=""></img>
        <div class="sales-image__offer">
          <h2>Udemy Flash Sales! 24 hours to save.</h2>
          <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
        </div>
      </div>
    )
}
export default SalesImage