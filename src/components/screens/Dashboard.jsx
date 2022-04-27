import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Menu } from "../nav/Menu";
import { Navbar } from "../nav/Navbar";

export const Dashboard = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // TODO: Mover contenido de useEffect a un componente aparte
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user == null) {
                navigate("/login");
            } else {
                setUser(user);
            }
        });
    }, [navigate]);

    return (
        <div className="Dashboard">
            <Menu />
            <div className="Dashboard__container">
                <Navbar />
                <div className="Dashboard__content">{children}</div>
            </div>
        </div>
    );
};
