import Accesscard from "./Components/accesscard/Accesscard"
import Availabity from "./Components/avaible/Availabity"
import Carditem from "./Components/carditems/Carditem"
import Footer from "./Components/footer/Footer"
import Navbar from "./Components/navbar/Navbar"
import Success from "./Components/success/Success"
import Videosection from "./Components/videopage/Videosection"
import './app.css'


function App() {


  return (
    <>
      <div>
        <Navbar/>
        <div className="body">
        <Videosection/>
        <Carditem/>
        <Availabity/>
        <Success/>
        <Accesscard/>
        </div>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
