import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = ({ coffeesAll,handleDelete }) => {
  const { _id, name, chef, supplier, taste, category, details, photoURL } =
    coffeesAll;

  return (
    <div className="grid items-center justify-center grid-cols-4 shadow-xl bg-bgColor rounded-xl">
      <figure className=" w-full h-10/12">
        <img className=" w-screen h-10/12" src={photoURL} alt="Album" />
      </figure>
      <div className="card-body col-span-2 ">
        <h2 className="card-title">{name}</h2>
        <p>{chef}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        <p>{category}</p>
        <p>{details}</p>
      </div>
      <div className="join join-vertical p-8 space-y-4">
        <button className="btn join-item">View</button>
        <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
        <button onClick={() => handleDelete(_id)} className="btn join-item">
          X
        </button>
      </div>
    </div>
  );
};

export default Products;
