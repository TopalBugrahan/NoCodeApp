import React from "react";

function Header({ onClick }) {
  return (
    <div className="header">
      <button className="page_button" onClick={onClick}>
        Sayfa Aç
      </button>
    </div>
  );
}

export default Header;
