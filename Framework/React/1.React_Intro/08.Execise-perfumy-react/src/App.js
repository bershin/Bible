// Import Components
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import Products from "./components/Products"
import {About, Footer} from "./components/AboutFooter"

function App(){
    return (
        <div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            <Products></Products>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App