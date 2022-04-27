import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../resources/Logo.png";

import { registerNewUserDoc } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthProvider from "./authProvider";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [carrera, setCarrera] = useState("Selecciona una carrera");

    const registerWithEmailAndPassword = async () => {
        if (
            email === "" ||
            password === "" ||
            passwordConfirm === "" ||
            carrera === "Selecciona una carrera"
        ) {
            alert("Faltan datos por ingresar");
            return;
        } else {
            if (password.length < 6 || passwordConfirm.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres");
                return;
            } else {
                if (password !== passwordConfirm) {
                    alert("Las contraseñas no coinciden");
                    return;
                } else {
                    try {
                        const res = await createUserWithEmailAndPassword(
                            auth,
                            email,
                            password
                        );
                        const user = res.user;
                        await registerNewUserDoc({
                            uid: user.uid,
                            email: email,
                            carrera: carrera
                        });
                    } catch (err) {
                        console.error(err);
                        alert(err.message);
                    }
                }
            }
        }
    };

    return (
        <AuthProvider>
            <div className="Auth__container">
                <img src={LogoImg} alt="logo" />
                <div className="form">
                    <h1>Crear cuenta</h1>
                    <div className="input">
                        <p>Correo:</p>
                        <input
                            type="email"
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
                            placeholder="Elige una contraseña"
                        />
                    </div>
                    <div className="input">
                        <p>Confirmar contraseña:</p>
                        <input
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="Elige una contraseña"
                        />
                    </div>
                    <div className="input">
                        <p>Carrera:</p>
                        <select
                            name="Carreras"
                            value={carrera}
                            onChange={(e) => setCarrera(e.target.value)}
                        >
                            <option value="">Selecciona una carrera</option>
                            <option value="">Ingenieria en Sistemas</option>
                            <option value="">Ingenieria en Informatica</option>
                            <option value="">Ingenieria en Electronica</option>
                            <option value="">Ingenieria en Mecatronica</option>
                            <option value="">Ingenieria en Mecanica</option>
                            <option value="">Ingenieria en Electrica</option>
                            <option value="">Ingenieria en Quimica</option>
                            <option value="">Ingenieria en Biomedica</option>
                            <option value="">
                                Ingenieria en Ingenieria Civil
                            </option>
                            <option value="">
                                Ingenieria en Ingenieria Ambiental
                            </option>
                        </select>
                    </div>
                    <button onClick={registerWithEmailAndPassword}>
                        Registrarse
                    </button>
                    <Link className="link" to="/login">
                        ¿Ya tienes cuenta? Inicia sesion aqui
                    </Link>
                </div>
            </div>
        </AuthProvider>
    );
};
