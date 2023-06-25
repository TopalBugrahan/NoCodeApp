import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";
function Header({ onClick }) {
  const navigate = useNavigate();
  const {projectId} = useParams();
  const goStylePage = (e) => {
    e.preventDefault();
    navigate(`/global_syle_page/${projectId}`);
  };


  const { myScreens, globalStyles} = useSelector(
    (state) => state.screen
  );

  const saveProject = () => {
    axios
      .put(`/api/v1/projects/${projectId}`, {
        content: JSON.stringify(myScreens),
        globalStyles: JSON.stringify(globalStyles)
      })
      .then((response) => {
          if (response) {
              alert('Başarıyla kaydedildi!');
          }
      });
  }

  const downloadProject = () => {
    axios
      .get(`/api/v1/projects/${projectId}/download`,{
        responseType: 'blob'
      })
      .then((response) => {
        let filename = response.headers['content-disposition']
        .split(';')
        .find(n => n.includes('filename='))
        .replace('filename=', '')
        .replaceAll('"', '')
        .trim();
        
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(url);
      });
  }

  return (
    <div className="header">
      <div>
        <button className="page_button" onClick={goStylePage}>
          Global Style
        </button>
      </div>
      <div>

        <button className="page_button me-2" onClick={downloadProject}>
            İndir
        </button>
        <button className="page_button me-2" onClick={saveProject}>
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
