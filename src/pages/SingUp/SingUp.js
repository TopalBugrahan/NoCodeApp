import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function SingUp() {
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCPassword] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useAuth();

     if (user) {
        navigate('/', { replace: true });
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === cpassword) {
      axios.post('auth/register', {
        nameSurname: fullname,
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
    }
    else
    {
      alert("Girdiğiniz şifreler uyuşmuyor");
    }
  };
  return (
    <div className="login_container">
      <div className="login_left_container">
        <div className="sing_up_image">
          <span className="sing_up_title">Kayıt Ol</span>
        </div>
      </div>
      <div className="login_right_container">
        <div className="login_right_inner_container">
          <form className="login_right_form" onSubmit={handleSubmit}>
            <div className="login-icon_container">
              <div className="login_right_icon">
                <AiFillLock color="white" size={"35px"} />
              </div>
              <p style={{ fontSize: "22px" }}>Kayıt ol</p>
            </div>

            <div className="input_container">
            <input
                className="login_input"
                placeholder="Tam ad"
                type="text"
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="E-Posta"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="Şifre"
                type="password"
                minLength={6}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                className="login_input"
                placeholder="Şifre tekrarı"
                type="password"
                minLength={6}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <button className="login_button">Kayıt Ol</button>
              <div className="login_right_sing_up">
                <Link className="all_link" to="/login">
                  Giriş Sayfası
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
