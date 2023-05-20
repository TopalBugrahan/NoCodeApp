
import { useEffect, useState } from "react";
import "./HomePage.css"
import axios from "axios";
import { Link, generatePath } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function HomePage() {


    const { user, setUser } = useAuth();
    
    const [projects, setProjects] = useState(null);

    const getProjects = () => {
        axios.get('api/v1/projects').then((response) => {
            setProjects(response.data)
        });
    }

    useEffect(() => {
        getProjects();
    }, [])

    const handleAdd = () => {
        let projectName = prompt("Proje Adı");
        if (projectName != null) {
            addProject({
                name: projectName
            });
        }
    };

    const addProject = (project) => {
        axios.post('/api/v1/projects', project).then((response) => {
            if (response) {
                alert('Proje Eklendi!');
                getProjects();
            }
        });
    }


    const handleEdit = (projectId, index) => {
        let newName = prompt("Proje Adı", projects[index].name);
        if (newName != null) {
            updateProject({
                projectId,
                name: newName
            });
        }
    };

    const updateProject = (project) => {
        axios
            .put(`/api/v1/projects/${project.projectId}/name/${project.name}`)
            .then((response) => {
                if (response) {
                    alert('Proje Güncellendi!');
                    getProjects();
                }
            });
    }

    const handleDelete = (projectId, index) => {
        let text = `${projects[index].name} projesini silmek istediğinizden emin misiniz?`;
        if (window.confirm(text) == true) {
            deleteProject(projectId);
        }
    };

    const deleteProject = (projectId) => {
        axios.delete(`/api/v1/projects/${projectId}`).then((res) => {
            alert('Proje Silindi!');
            getProjects();
        });
    }


    return <div className="homepage">
            { user && 
                <>
                    <div className="pe-5" style={{textAlign: "end"}}>
                        <button onClick={handleAdd}>Yeni Proje</button>
                    </div>
                    {(!projects || projects.length == 0) && <>
                        <div className="ps-5">
                            Henüz hiç projeniz yok.
                        </div>
                    </>}
                    {projects && projects.length > 0 && 
                    <>
                        <div className="px-5 mt-3">
                            <table border="1" cellPadding={3} cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Proje Adı</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((r, i) => (
                                        <tr key={i}>
                                            <td>
                                                <Link to={generatePath("/design_page/:id", {id:r.id})}>{r.name}</Link>
                                            </td>
                                            <td>
                                                <div className="actions">
                                                    <button onClick={() => handleEdit(r.id, i)}>Güncelle</button>
                                                    <button onClick={() => handleDelete(r.id, i)}>Sil</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>}
                </>
            }
            {!user && <>
                <div className="ps-5">
                    Devam etmek için lütfen giriş yapınız
                </div>
            </>}
            </div>;
}
