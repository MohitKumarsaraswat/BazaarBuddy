import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-zinc-100 px-15 py-15 ">
      <div className="flex mx-10 justify-between  mb-20">
        {/* First div */}
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800">
            Bazaar<span className="text-orange-500">Buddy</span>
          </h1>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="mt-5">2026 All Rights reserved </p>
        </div>
        {/* second div */}
        <div>
          <h1 className="text-xl font-bold mb-5">Company</h1>
          <p className=" mb-3">Abouts</p>
          <p>FAQ's</p>
        </div>
        {/* third div */}
        <div>
          <h1 className="text-xl font-bold mb-5">support</h1>
          <p className=" mb-3">Support Center</p>
          <p className=" mb-3"> Contact Us</p>
          <p>Feedback</p>
        </div>
        {/* forth div */}
        <div>
          <h1 className="text-xl font-bold mb-5">Stay Connected</h1>
          <p className=" mb-3">
            Question and feedback <br /> we love to hear from you{" "}
          </p>
          <div className="flex items-center rounded bg-white p-2 gap-x-1  ">
            <input input="text" placeholder="Email address" className="bg-white outline-none"></input>
            <button className="bg-orange-500 h-6 w-6 flex items-center justify-center rounded ">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
