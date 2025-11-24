import HeroSection from "./HeroSection"
import Navigation from "./Navigation"
import Items from "./Items"
import Footer from "./Footer"
import Products from "./Products"
import LoginPage from "./LoginPage"

function LandingPage()
{
    return(<>
    <Navigation/>
    <HeroSection/>
    <Items/>
    <Products/>
    <Footer/> 
    {/* <LoginPage/> */}
  </>)
}
export default LandingPage;