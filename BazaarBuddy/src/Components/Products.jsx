import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const ProductData = [
  { id: 1, title: "Apple", image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=300&fit=crop", rates: "₹120/kg", category: "Fruits" },
  { id: 2, title: "Banana", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop", rates: "₹60/dozen", category: "Fruits" },
  { id: 3, title: "Orange", image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=300&fit=crop", rates: "₹80/kg", category: "Fruits" },
  { id: 4, title: "Mango", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop", rates: "₹150/kg", category: "Fruits" },
  { id: 5, title: "Pineapple", image: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=400&h=300&fit=crop", rates: "₹90/piece", category: "Fruits" },
  { id: 6, title: "Grapes", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop", rates: "₹70/kg", category: "Fruits" },
  { id: 7, title: "Strawberry", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop", rates: "₹200/kg", category: "Fruits" },
  { id: 8, title: "Papaya", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=400&h=300&fit=crop", rates: "₹50/kg", category: "Fruits" },
  { id: 9, title: "Watermelon", image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=300&fit=crop", rates: "₹40/kg", category: "Fruits" },
  { id: 10, title: "Kiwi", image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=300&fit=crop", rates: "₹180/kg", category: "Fruits" },
  { id: 11, title: "Tomato", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop", rates: "₹40/kg", category: "Vegetables" },
  { id: 12, title: "Potato", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop", rates: "₹30/kg", category: "Vegetables" },
  { id: 13, title: "Onion", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&h=300&fit=crop", rates: "₹35/kg", category: "Vegetables" },
  { id: 14, title: "Carrot", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop", rates: "₹50/kg", category: "Vegetables" },
  { id: 15, title: "Cabbage", image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&h=300&fit=crop", rates: "₹25/kg", category: "Vegetables" },
  { id: 16, title: "Cauliflower", image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&h=300&fit=crop", rates: "₹45/kg", category: "Vegetables" },
  { id: 17, title: "Spinach", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop", rates: "₹20/bunch", category: "Vegetables" },
  { id: 18, title: "Brinjal", image: "https://i.pinimg.com/736x/6a/be/d6/6abed635e5ee0a42eeedbe68c8ac32eb.jpg", rates: "₹40/kg", category: "Vegetables" },
  { id: 19, title: "Capsicum", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop", rates: "₹60/kg", category: "Vegetables" },
  { id: 20, title: "Broccoli", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=300&fit=crop", rates: "₹80/kg", category: "Vegetables" },
  { id: 21, title: "Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop", rates: "₹60/litre", category: "Dairy" },
  { id: 22, title: "Curd", image: "https://i.pinimg.com/736x/f3/34/ab/f334ababa4f3de69c5f8c90f5e67f3e7.jpg", rates: "₹50/kg", category: "Dairy" },
  { id: 23, title: "Butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop", rates: "₹500/kg", category: "Dairy" },
  { id: 24, title: "Cheese", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=400&h=300&fit=crop", rates: "₹400/kg", category: "Dairy" },
  { id: 25, title: "Paneer", image: "https://i.pinimg.com/1200x/e1/94/e3/e194e3ac3198d486f4e5e10e482c8849.jpg", rates: "₹300/kg", category: "Dairy" },
  { id: 26, title: "Ghee", image: "https://i.pinimg.com/736x/f8/2b/8e/f82b8e1f370cbae187e3abf79714fbc2.jpg", rates: "₹600/litre", category: "Dairy" },
  { id: 27, title: "Cream", image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=400&h=300&fit=crop", rates: "₹250/litre", category: "Dairy" },
  { id: 28, title: "Ice Cream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop", rates: "₹200/litre", category: "Dairy" },
  { id: 29, title: "Condensed Milk", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop", rates: "₹120/can", category: "Dairy" },
  { id: 30, title: "Buttermilk", image: "https://i.pinimg.com/736x/70/51/00/7051000892a72d263fc8931347092d2d.jpg", rates: "₹40/litre", category: "Dairy" },
];

const Products = () => {
  const ButtonData = ["All", "Fruits", "Vegetables", "Dairy"]
  const [change, setchange] = useState("All")

  const filteredProducts =
    change === "All"
      ? ProductData
      : ProductData.filter((elm) => elm.category === change)

  return (
    <section id="products" className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Our <span className="text-orange-500">Products</span>
          </h1>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {ButtonData.map((elm) => (
            <button
              key={elm}
              onClick={() => setchange(elm)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                change === elm ? "bg-orange-500 text-white" : "bg-zinc-200 text-gray-700"
              }`}
            >
              {elm}
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((elm) => (
            <div key={elm.id} className="rounded-[2rem] bg-gray-100 p-5 shadow-sm transition hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <FaHeart className="text-xl text-gray-500 transition hover:text-orange-500" />
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition active:scale-95">
                  <FaPlus className="text-base" />
                </button>
              </div>

              <img
                src={elm.image}
                alt={elm.title}
                className="h-52 w-full rounded-[1.5rem] object-cover"
              />

              <h1 className="mt-4 text-center text-lg font-semibold">{elm.title}</h1>
              <p className="mt-2 text-center text-gray-600">{elm.rates}</p>
              <div className="mt-4 flex justify-center">
                <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition active:scale-95">
                  Shop now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;