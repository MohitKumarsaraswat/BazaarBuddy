import React from "react";

const Catagory = (props) => {
  const CatagoryData = CardData.map((elm) => {
    return (
      
        // catagory Data mapping
      <div id="Catagory"className="mx-10  bg-gray-100" key={elm.id}>
        <img  className=' flex h-80 w-80 items-center ml-7' src={elm.image}></img>
        <div className=" text-m p-4">
            <h1 className=" flex font-bold justify-center text-xl ">{elm.title}</h1>
            <p className="ml-5">{elm.discription}</p>
        </div>
        <div className="flex items-center justify-center mb-5 ">
        <button className=" text-xl mx-10 bg-orange-500 rounded p-2 active:scale-110 ">shop now </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {/* catagory heading */}
      <div className="  mt-8 flex items-center justify-center">
        <h1 className="text-4xl font-bold ">
          Shop by <span className="text-orange-500">Catagory</span>
        </h1>
      </div>
      {/* catagory card */}
      <div className="flex  mb-15">
        {CatagoryData}
      </div>
    </div>
  );
};

export default Catagory;

// Catagory card Data

const CardData = [
  {
    id: 1,
    title: 'Fruits',
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed aliquid eius a quasi",
    image: 'https://i.pinimg.com/736x/ee/89/cd/ee89cd28311d8842973c0b3070ee36ef.jpg',
  },
  {
    id: 2,
    title: 'Vegtable',
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed aliquid eius a quasi",
    image: 'https://i.pinimg.com/736x/ae/c7/94/aec7945d884d045450ddc8810f9f4ce1.jpg',
  },
  {
    id: 3,
    title: 'Dairy',
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed aliquid eius a quasi",
    image:'https://i.pinimg.com/736x/27/81/06/278106bc0af1cf666e55a70795800fc1.jpg'
  },
];
