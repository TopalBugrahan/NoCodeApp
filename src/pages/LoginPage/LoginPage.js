import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, setUser } = useAuth();

     if (user) {
        navigate('/', { replace: true });
    }


  const [email, setEmail] = useState("admin@koumobilio.com");
  const [password, setPassword] = useState("123456");
  const handleSubmit = (event) => {
    axios.post('auth/login', {
      usernameOrEmail: email,
      password: password
    }).then((response) => {
      setUser(response.data); //Access Token

      navigate(location?.state?.return_url || '/', { replace: true });
    })
    .catch((error) => {
      let message = error.response.data.messages.join('\n') ||
                    error.response.statusText
      alert(message);
    })
    event.preventDefault();
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
                defaultValue={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="Password"
                type="password"
                defaultValue={password}
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
