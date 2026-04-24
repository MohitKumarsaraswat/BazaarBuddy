import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Catagory from './Components/Catagory'
import Values from './Components/Values'
import Products from './Components/Products'
const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero/>
      <Catagory/>
      <Values/>
      <Products/>

    </div>
  )
}

export default App
