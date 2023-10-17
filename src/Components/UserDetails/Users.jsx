import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const user = useLoaderData();
  const [restUsers, setrestUser] = useState(user);
  const handleDeleteUser = (id) => {
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = restUsers.filter((na) => na._id !== id);
              setrestUser(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto w-11/12 mx-auto my-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Date</th>
              <th>LastLogin Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restUsers.map((na) => (
              <>
                <tr>
                  <th>{na.name}</th>
                  <td>{na.email}</td>
                  <td>{na.userCreationTime}</td>
                  <td>{na.LastLogInTime}</td>
                  <td
                    onClick={() => handleDeleteUser(na._id)}
                    className=" cursor-pointer"
                  >
                    X
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
