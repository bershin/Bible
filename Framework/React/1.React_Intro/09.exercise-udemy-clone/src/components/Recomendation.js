import "../style.css"
import c1 from "../asset/images/c1.jpeg"
import c2 from "../asset/images/c2.jpeg"
import c3 from "../asset/images/c3.jpeg"
import c4 from "../asset/images/c4.jpeg"

function Recommendation(){
    return(
        <div class="recommended">
        <h1>Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
          <div class="course-card">
            <img src={c1} alt=""></img>
            <h3>2023 Python Course</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c2} alt=""></img>
            <h3>Web Development</h3>
            <p>Col Steele</p>
            <p>3.2 ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c3} alt=""></img>
            <h3>UI/UX Design</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
          </div>
          <div class="course-card">
            <img src={c4} alt=""></img>
            <h3>Java Programming</h3>
            <p>Col Steele</p>
            <p>4.8 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
          </div>
        </div>
      </div>
    )
}
export default Recommendation