
import { IoStarSharp } from "react-icons/io5";const arr = [
    {
        id:1,
        image:'https://media.licdn.com/dms/image/v2/D5603AQFw_0B_XY6ZJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694585983456?e=1778716800&v=beta&t=alSPEPgbU6bUUWifFxix1R_BAZlJFxd3Kno1hycVOk4',
        Name:'Mohit Saraswat',
        Contant:'This website offers a clean and user-friendly interface with smooth navigation and fast loading speed. The design is modern and responsive, making it easy to access across different devices. Overall, it provides a great user experience with well-organized content.',
        Icon:<IoStarSharp  className='size-5'/>
    },
    {
        id:2,
        image:'https://media.licdn.com/dms/image/v2/D4E03AQE8pCHs_g2oJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726246711624?e=1778716800&v=beta&t=8hDjd_he6r_D7Uqq0cop43QQtsnRtizgJruuAsp909A',
        Name:'Mukul Sharma ',
        Contant:'A well-designed website with intuitive navigation and a visually appealing layout. It performs smoothly and delivers a seamless user experience, making it both functional and engaging.',
        Icon:<IoStarSharp  className='size-5'/>
    },
    {
        id:3,
        image:'https://media.licdn.com/dms/image/v2/D5603AQEqZ_ipCpV6yw/profile-displayphoto-scale_400_400/B56ZsnIj.XJoAk-/0/1765888116397?e=1778716800&v=beta&t=snfh2g84-wQQVigvqm5eXi67CUp8C0Nc893e_7PWvxE',
        Name:'Ajay Nayak',
        Contant:'The website demonstrates strong UI/UX design principles with responsive layouts and optimized performance. Its structured content and interactive elements enhance usability and provide an efficient browsing experience.',
        Icon:<IoStarSharp  className='size-5'/>
    },
] 
const Data = arr.map((elm)=>{
    return(
        <div key={elm.id} className="bg-gray-100 w-110 p-5 ">
            <h1 className="text-2xl font-bold mx-auto flex items-center justify-center mb-5  ">{elm.Name}</h1>
            <img src={elm.image} className="h-20 w-20 rounded-full  mx-auto mb-5 "/>
            <p className="text-m  text-justify mb-2 ">{elm.Contant}</p>
            <h3>Rating:<span className=" mt-1 flex text-orange-500">{elm.Icon}{elm.Icon}{elm.Icon}{elm.Icon}{elm.Icon}</span></h3>
        </div>
    )
})
const CustomerReview = () => {
  return (
    <div className="mx-10 min-h-screen">
         <div className="  mt-10 flex items-center justify-center mb-20">
        <h1 className="text-4xl font-bold ">
          Customer <span className="text-orange-500">Review</span>
        </h1>
      </div>
      <div className="flex justify-between "> 
        {Data}
    </div>
  
    </div>
    )
}

export default CustomerReview