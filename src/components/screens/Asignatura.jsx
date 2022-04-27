import React from "react";
import { Link, useParams } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import arrow from "../resources/arrow.ico";
import { useGetasignatura } from "../../hooks/useGetasignatura";

export const Asignatura = () => {
    const { asignatura } = useParams();
    const asignaturaObj = useGetasignatura(asignatura);

    return (
        <Dashboard>
            <div className="CardAsignatura__container">
                <div className={"CardAsignatura__content color1"}>
                    <Link className="title" to="/Asignaturas">
                        {asignaturaObj.nombreAsignatura}
                    </Link>
                    <div className="CardAsignatura__body">
                        {asignaturaObj.temas.map((tema, index) => (
                            <div key={index} className="CardTema__content">
                                <h1 className="tema__title">
                                    {tema.nombreTema}
                                </h1>
                                <div>
                                    {tema.subTemas.map((subTema, index) => (
                                        <Link
                                            key={index}
                                            to={
                                                "/Asignaturas" +
                                                asignaturaObj.linkAsignatura +
                                                tema.linksSubTemas[index]
                                            }
                                        >
                                            <img src={arrow} />
                                            {subTema}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
