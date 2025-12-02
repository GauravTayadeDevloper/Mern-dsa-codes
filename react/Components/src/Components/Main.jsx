import Welcome from "./Welcome"
import Data from "./Data"
import Quote from "./Quote"
import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import "./Styles/Main.css"
function Main() {
 

  return (
 <>
<Header/>
    <div className="main">
        <Welcome/>
        <Data/>
        <Card/>
        <Quote/>
    </div>
 <Footer/>
 </>
  )
}

export default Main;
