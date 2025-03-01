import Navbar from "./components/Navbar"
import Categories from "./components/Catagories"
import SalesImage from "./components/Sales_Image"
import Footer from "./components/Footer"
import MostPopular from "./components/Most_popular"
import Recommendation from "./components/Recomendation"
import Topic from "./components/Topic"

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Categories></Categories>
            <SalesImage></SalesImage>
            <Recommendation></Recommendation>
            <Topic></Topic>
            <MostPopular></MostPopular>
            <Footer></Footer>
        </div>
    )
}

export default App