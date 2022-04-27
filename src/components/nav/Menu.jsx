import React from "react";
import { Link } from "react-router-dom";
import { Book } from "../resources/Book";
import { Gear } from "../resources/Gear";
import { Home } from "../resources/Home";
import Logo from "../resources/Logo.png";

export const Menu = () => {
    return (
        <div className="Menu">
            <img src={Logo} alt="Logo" />
            <ul>
                <Link to="/Dashboard">
                    <Home />
                    <span>Inicio</span>
                </Link>
                <Link to="/Configuracion">
                    <Gear />
                    <span>Configuracion</span>
                </Link>
                <Link to="/Asignaturas">
                    <Book />
                    <span>Asignaturas</span>
                </Link>
            </ul>
        </div>
    );
};
