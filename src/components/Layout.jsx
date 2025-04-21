import React from "react";
import { Link } from 'react-router-dom';
//import Header from "./Header";
//import Footer from "./Footer";



const Layout = () => {
  return (
    <>
          <section>
         <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card border-0 shadow-sm justify-content-center align-items-center text-center" >
                  <div className="card-body">
                        <h1>Under Construction</h1>
                        <Link to="/" className="btn btn-danger">
                            Go Home
                       </Link>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>
      </>
  );
}

export default Layout;
