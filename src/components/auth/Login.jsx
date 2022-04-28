import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../resources/Logo.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import AuthProvider from "./authProvider";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInWithEmailAndPassword = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/Dashboard");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return (
        <AuthProvider>
            <div className="Auth__container">
                <img src={LogoImg} alt="logo" />
                <div className="form">
                    <h1>Iniciar sesion</h1>
                    <div className="input">
                        <p>Correo:</p>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo electronico"
                        />
                    </div>
                    <div className="input">
                        <p>Contraseña:</p>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <button onClick={logInWithEmailAndPassword}>Entrar</button>
                    <Link className="link" to="/register">
                        ¿No tienes cuenta? Creala aqui
                    </Link>
                </div>
            </div>
        </AuthProvider>
    );
};
