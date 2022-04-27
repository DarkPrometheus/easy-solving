import React, { useEffect, useState } from "react";
import { Dashboard } from "./Dashboard";
import { Link, useParams } from "react-router-dom";
import arrow from "../resources/arrow.ico";
import { useGetasignatura } from "../../hooks/useGetasignatura";

export const Tema = () => {
    const { asignatura, subtema } = useParams();
    const asignaturaObj = useGetasignatura(asignatura);
    const [title, setTitle] = useState("");

    const getTema = () => {
        asignaturaObj.temas.map((temaObj, index) => {
            temaObj.linksSubTemas.map((linkSubTema, index) => {
                if (linkSubTema === "/" + subtema) {
                    setTitle(temaObj.subTemas[index]);
                }
            });
        });
    };

    useEffect(() => {
        getTema();
    }, []);

    return (
        <Dashboard>
            <div className="CardAsignatura__container">
                <div className={"CardAsignatura__content color1"}>
                    <Link className="title" to={"/Asignaturas/" + asignatura}>
                        {title}
                    </Link>
                    <div className="CardAsignatura__body">
                        <div>
                            {/* {asignaturaObj.list.map((item, index) => (
                                <Link
                                    key={index}
                                    to={
                                        "/Asignaturas" +
                                        asignatura +
                                        asignaturaObj.linksItem[index]
                                    }
                                >
                                    <img src={arrow} />
                                    {item}
                                </Link>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
