import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
function LoginPage() {
  const [emial, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emial, password);
  };
  return (
    <div className="login_container">
      <div className="login_left_container">
        <div className="login_left_background">
          <img className="login_left_image" src="login_image.png" alt="" />
          <h1 style={{ color: "white" }}>Sitemize Hoşgeldiniz</h1>
          <h2 style={{ color: "white" }}>
            Sitemize kayıtınız yoksa lütfen kayıt oluşturunuz.
          </h2>
        </div>
      </div>
      <div className="login_right_container">
        <div className="login_right_inner_container">
          <form className="login_right_form" onSubmit={handleSubmit}>
            <div className="login-icon_container">
              <div className="login_right_icon">
                <AiFillLock color="white" size={"35px"} />
              </div>
              <p style={{ fontSize: "22px" }}>Sign In</p>
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
              <button className="login_button">Sign In</button>
              <div className="login_right_sing_up">
                <Link className="all_link" to="/sing_up">
                  Sing Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
