import React, { useState } from "react";


const ForgotPassword = () => {
  
  const [email, setEmail] = useState("");

  return (
    <div className="main d-flex w-100 justify-content-center">
      <div className="d-flex flex-column container">
        <div className="h-100 row">
          <div className="mx-auto d-table h-100 col-lg-6 col-md-8 col-sm-10">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">
                 Rest Password
                </h1>
                <p className="lead">
                Rest Password
                </p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form className="">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="text-center mt-3">
                        <button className="btn btn-primary btn-lg">
                         Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword
