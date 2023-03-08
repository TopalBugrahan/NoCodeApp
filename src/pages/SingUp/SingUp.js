import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
function SingUp() {
  const [emial, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emial, password, cpassword);
    if (password === cpassword) {
      navigate("/");
    }
  };
  return (
    <div className="login_container">
      <div className="login_left_container">
        <div className="sing_up_image">
          <span className="sing_up_title">Welcome Sing Up Page</span>
        </div>
      </div>
      <div className="login_right_container">
        <div className="login_right_inner_container">
          <form className="login_right_form" onSubmit={handleSubmit}>
            <div className="login-icon_container">
              <div className="login_right_icon">
                <AiFillLock color="white" size={"35px"} />
              </div>
              <p style={{ fontSize: "22px" }}>Sign Up</p>
            </div>

            <div className="input_container">
              <input
                className="login_input"
                placeholder="Email"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="Correct Password"
                type="password"
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <button className="login_button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
