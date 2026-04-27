import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Catagory from './Components/Catagory'
import Values from './Components/Values'
import Products from './Components/Products'
import OurProcess from './Components/OurProcess'
import CustomerReview from './Components/CustomerReview'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero/>
      <Catagory/>
      <Values/>
      <Products/>
      <OurProcess/>
      <CustomerReview/>
      <Footer/>



    </div>
  )
}

export default App
