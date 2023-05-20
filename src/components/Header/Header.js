import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function Header({ onClick }) {
  const navigate = useNavigate();
  const {projectId} = useParams();
  const goStylePage = (e) => {
    e.preventDefault();
    navigate(`/global_syle_page/${projectId}`);
  };
  return (
    <div className="header">
      <div>
        <button className="page_button" onClick={goStylePage}>
          Global Style
        </button>
      </div>
      <div>
        <button className="page_button" onClick={onClick}>
            Kaydet
        </button>
        <button className="page_button" onClick={onClick}>
          Sayfa Aç
        </button>
      </div>
    </div>
  );
}

export default Header;
