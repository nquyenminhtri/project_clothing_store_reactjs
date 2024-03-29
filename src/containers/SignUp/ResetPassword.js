import React, { useState } from "react";
import customerService from "../../services/customerService";
function ResetPassword() {
  const [email, setEmail] = useState("");
console.log('email:',email);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await customerService.resetPasswordByEmail(email);
          console.log('check res:',response.message);
          alert(`${response.message}`);
          if (response.code === 0) {
              window.location.href = '/login';
          }
      } catch (error) {
        console.error("Error during registration:", error);
        alert(error);
      }
  };

  return (
    <>
      <div className="bg-gradient-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Reset Password</h1>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter email address..."
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            OK
                          </button>
                        </form>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
