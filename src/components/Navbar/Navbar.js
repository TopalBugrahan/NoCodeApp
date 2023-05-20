import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const classNameHandler = ({ isActive }) =>
    isActive
        ? `active`
        : ``;
export default function Navbar() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const logOut = () => {
        setUser(null);
        navigate('login');
    }
    return (
        <div id="navbar">
            <ul className="nav">       
                <li>
                    {!user && (
                        <NavLink to="/login" className={classNameHandler}>
                            Giriş Yap
                        </NavLink>
                    )}
                    {user && (
                        <a
                            href="#"
                            onClick={logOut}
                            className={classNameHandler({})}
                        >
                            Çıkış Yap
                        </a>
                    )}
                </li>
            </ul>
        </div>
    );
}
