import React from "react";
import { useNavigate } from "react-router-dom";
function Header({ onClick }) {
  const navigate = useNavigate();
  const goStylePage = (e) => {
    e.preventDefault();
    navigate("global_syle_page");
  };
  return (
    <div className="header">
      <div>
        <button className="page_button" onClick={goStylePage}>
          Global Style
        </button>
      </div>
      <button className="page_button" onClick={onClick}>
        Sayfa Aç
      </button>
    </div>
  );
}

export default Header;
