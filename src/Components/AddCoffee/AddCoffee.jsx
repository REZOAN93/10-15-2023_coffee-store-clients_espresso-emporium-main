import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";


const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const singleCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoURL,
    };
    console.log(singleCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(singleCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Coffee is added Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };
  return (
    <div>
        
        <div className=" bg-hero-pattern bg-cover">
      <div className=" max-w-4xl mx-auto py-5 space-y-2">
        <Link
          className="font-titleFont flex gap-3 items-center drop-shadow-md font-bold text-2xl"
          to={"/"}
        >
          {" "}
          <span className=" font-extrabold">
            <BsArrowLeft />
          </span>{" "}
          Back to Home
        </Link>
        <div
          style={{ backgroundColor: "#F4F3F0" }}
          className=" rounded-lg py-8"
        >
          <div className=" px-10 pb-2 space-y-4">
            <h1 className="font-titleFont text-3xl text-center font-extrabold saturate-200">
              Add New Coffee
            </h1>
            <p className=" text-justify text-base text-gray-400">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="px-10">
            <form onSubmit={handleAddCoffee} className=" space-y-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee name"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="chef"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee chef"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="supplier"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee supplier"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="taste"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee taste"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="category"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee category"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      name="details"
                      className="input input-bordered join-item w-full"
                      placeholder="Enter coffee details"
                    />
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <div className="join">
                  <input
                    name="photoURL"
                    className="input input-bordered join-item w-full"
                    type="url"
                    placeholder="Enter photo URL"
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  className=" bg-basicColor w-full cursor-pointer hover:bg-amber-700 mt-5 p-3 rounded-lg font-titleFont font-bold text-bgBtn"
                  type="submit"
                  value="Add Coffee"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddCoffee;
