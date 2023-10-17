import React from "react";

const Services = ({ data }) => {
  const { id, picture, title, description } = data;
  return (
    <div className=" space-y-2">
      <img src={picture} alt="" />
      <p className=" font-titleFont font-bold text-xl">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Services;
