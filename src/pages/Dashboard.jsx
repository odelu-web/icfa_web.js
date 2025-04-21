// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";
// import { GoSmiley } from "react-icons/go";
// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

//       if (!token) {
//         // If no token is found, redirect to login page
//         navigate("/loginpage");
//         return;
//       }

//       try {
//         const response = await axios.get(
//           "http://localhost:5002/auth/dashboard",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         setUser(response.data.user);
//       } catch (err) {
//         // If the token is invalid or expired, navigate to the login page
//         navigate("/loginpage");
//         console.error("Error fetching dashboard:", err);
//       }
//     };

//     fetchUser();
//   }, [navigate]); // Re-run the effect when `navigate` changes

//   const handleLogout = () => {
//     // Remove the JWT token from localStorage and redirect to login page
//     localStorage.removeItem("authToken");
//     navigate("/loginpage"); // Redirect to login page after logout
//   };

//   return (
//     <>
//       <section
//         className="p-0"
//         style={{
//           minHeight: "100vh",
//         }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 mb-2">
//               <div className="d-flex align-content-end justify-content-end">
//                 <button className="btn btn-danger" onClick={handleLogout}>
//                   Logout <FiLogOut />
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-12">
//               <div className="card border-0 shadow-sm">
//                 <div className="card-body">
//                   <div>
//                     {user ? (
//                       <div>
//                         <h4>
//                           Welcome ! {user.username} Dashboard{" "}
//                           <GoSmiley className="text-danger" />
//                         </h4>
//                       </div>
//                     ) : (
//                       <p>Loading user data...</p>
//                     )}
//                     <button
//                       className="btn btn-primary me-2"
//                       onClick={() => navigate("/dashboard/facultyprofileform")}
//                     >
//                       Go to Faculty Profile Form
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GoSmiley } from "react-icons/go";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

      if (!token) {
        // If no token is found, redirect to login page
        navigate("/loginpage");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5002/auth/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (err) {
        // If the token is invalid or expired, navigate to the login page
        navigate("/loginpage");
        console.error("Error fetching dashboard:", err);
      }
    };

    fetchUser();
  }, [navigate]); // Re-run the effect when `navigate` changes

  const handleLogout = () => {
    // Remove the JWT token from localStorage and redirect to login page
    localStorage.removeItem("authToken");
    navigate("/loginpage"); // Redirect to login page after logout
  };

  return (
    <section
      className="p-0"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="d-flex align-content-end justify-content-end">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout <FiLogOut />
              </button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div>
                  {user ? (
                    <div>
                      <h4>
                        Welcome! {user.username} Dashboard{" "}
                        <GoSmiley className="text-danger" />
                      </h4>
                    </div>
                  ) : (
                    <p>Loading user data...</p>
                  )}
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body">
                          <a
                            className="btn btn-primary me-2 mb-3"
                            onClick={() =>
                              navigate("/dashboard/facultyprofileform")
                            }
                          >
                            Add Faculty Profile
                          </a>

                          <a
                            className="btn btn-primary me-2"
                            onClick={() =>
                              navigate("/dashboard/facultyprofilestable")
                            }
                          >
                            List Faculty Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
