import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { BsCup } from "react-icons/bs";
import Cover from "./Components/Cover/Cover";
import Products from "./Components/Products/Products";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [balance, setBalance] = useState(coffees);

  const handleDelete = (id) => {
    console.log("Delete the ID #", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = balance.filter((na) => na._id !== id);
            setBalance(remaining);
          });
      }
    });
  };
  return (
    <>
      <Cover></Cover>
      <div className=" mt-20">
        <div className=" text-center space-y-5">
          <h1 className=" text-2xl">--- Sip & Savor ---</h1>
          <p className=" font-titleFont text-4xl">Our Popular Products</p>
          <Link
            to={"/addCoffee"}
            className="btn font-titleFont bg-coverBtn font-bold text-white"
          >
            Add Coffee{" "}
            <span className=" text-2xl font-bold">
              <BsCup />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto my-10">
          {balance.map((na) => (
            <Products
              key={na._id}
              coffeesAll={na}
              handleDelete={handleDelete}
            ></Products>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
