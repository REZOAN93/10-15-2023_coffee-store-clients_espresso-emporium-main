import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  // const loaderUser = useLoaderData();
  // console.log(user,"this userData")
  // useEffect(()=>{
  //   fetch('/')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // },[])

  const [user,setUser]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/users')
    .then(data=>{
      setUser(data.data)
    })
  },[])
console.log(user)
  // const [restUsers, setRestUser] = useState(user);
  
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
        console.log(id)
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(data=>{
          console.log(data.data)
          if (data.data.deletedCount>0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining=user?.filter(na=>na._id!==id)
            setUser(remaining)
          }
        })
          // fetch(`http://localhost:5000/users/${id}`, {
          //   method: "DELETE",
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     if (data.deletedCount > 0) {
          //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
          //       const remaining = user?.filter((na) => na._id !== id);
                
          //       (remaining);
          //     }
          //   });
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
            {user?.map((na) => (
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
