import "../style.css"

function Navbar(){
    return(
        <div class="navbar">
        <div class="navbar__s1">
          <h1>Udemy</h1>
        </div>
        <div class="navbar__s2">
          <i class="fa-solid fa-magnifying-glass" style={{color: "#0c0d0d"}}></i>
          <input type="text" placeholder="Search for anything here. Tech, Business, Art ..."></input>
        </div>
        <div class="navbar__s3">
          <p>Trending Course</p>
          {/* <!-- <p>My Learning</p> --> */}
          <div class="mylearning">
            <p>My Learning</p>
            <div>
              <p class="mylearning__popup">You haven't purchased anything yet!</p>
            </div>
          </div>
          <i class="fa-solid fa-cart-shopping" style={{color: "#0e0f11"}}></i>
          <i class="fa-solid fa-bell" style={{color: "#070709"}}></i>
          <i class="fa-solid fa-user" style={{color: "#05090f"}}></i>
        </div>
        <div class="navbar__s4">
          <i class="fa-solid fa-bars" style={{color: "#000000"}}></i>
        </div>
      </div>
    )
}
export default Navbar