import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Asignatura } from "../screens/Asignatura";
import { Asignaturas } from "../screens/Asignaturas";
import { Dashboard } from "../screens/Dashboard";
import { SistemaEcuaciones } from "../screens/ejercicios/SistemaEcuaciones";
import { Tema } from "../screens/Tema";

// React Router
export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} /> */}
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Configuracion" element={<Dashboard />} />
                <Route path="/Asignaturas" element={<Asignaturas />} />
                <Route
                    path="/Asignaturas/:asignatura"
                    element={<Asignatura />}
                />
                <Route
                    path="/Asignaturas/:asignatura/:subtema"
                    element={<Tema />}
                />
                <Route path="/EjercicioTest" element={<SistemaEcuaciones />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};
