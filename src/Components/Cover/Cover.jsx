import { useEffect, useState } from "react";
import "./Cover.css";
import Services from "./Services";
const Cover = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/cover.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="coverContainer flex justify-end ">
        <div className=" w-7/12 pt-10">
          <div className="py-24 px-10 space-y-8">
            <p className=" font-titleFont text-white text-4xl">
              Would you like a Cup of Delicious Coffee?
            </p>
            <p className=" text-gray-400 text-base">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <p className=" font-titleFont btn bg-coverBtn">Learn More</p>
          </div>
        </div>
      </div>
      <div className="bg-bgColor">
        <div className="w-10/12 mx-auto grid grid-cols-4 py-10 gap-10">
          {services.map((na) => (
            <Services key={na.id} data={na}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cover;
