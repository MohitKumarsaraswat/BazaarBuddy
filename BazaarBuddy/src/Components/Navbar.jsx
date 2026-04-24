import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-2 bg-white shadow-md fixed top-0 left-0 w-full ">
      <h1 className="text-2xl font-bold text-gray-800">Bazaar<span className="text-orange-500">Buddy</span></h1>
      <ul className="flex items-center gap-x-10">
        <li className="text-gray-700 hover:text-orange-500 cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-orange-500 cursor-pointer">About Us</li>
        <li className="text-gray-700 hover:text-orange-500 cursor-pointer">Process</li>
        <li className="text-gray-700 hover:text-orange-500 cursor-pointer">Contact Us</li>
      </ul>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center border-2 border-orange-500 rounded-full p-2 bg-gray-50">
          <input 
            type="text" 
            placeholder="Search..." 
            className="outline-none bg-transparent px-4 py-2 w-64 placeholder-gray-500"
          />
          <button className="bg-orange-500 h-10 w-10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
            <FaSearch />
          </button>
        </div>
        <FaHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-transform" />
        <HiMiniShoppingBag className="text-2xl text-orange-500 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </nav>
  )
}

export default Navbar