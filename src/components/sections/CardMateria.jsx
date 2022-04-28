import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../resources/arrow.ico";

export const CardMateria = ({
    nombreAsignatura,
    linkAsignatura,
    temas,
    color
}) => {
    const [subMenu, setSubMenu] = useState("");
    const elemRef = useRef([,]);
    const [refRow, setRefRow] = useState();

    const toggleSubMenu = (e) => {
        console.log(elemRef);
    };

    return (
        <div className={"CardMateria__content " + color}>
            <Link className="title" to={"/Asignaturas" + linkAsignatura}>
                {nombreAsignatura}
            </Link>
            <div className="CardMateria__body">
                {temas.map((tema, temaIndex) => (
                    <div className="tema" key={temaIndex}>
                        <div
                            onClick={(e) => toggleSubMenu(e)}
                            className="temaTitle"
                        >
                            <div className="img">
                                <img src={arrow} />
                            </div>
                            <h2>{tema.nombreTema}</h2>
                        </div>
                        <div
                            ref={(el) => (elemRef.current[(refRow, 0)] = el)}
                            className={"subtemas " + subMenu}
                        >
                            {tema.subTemas.map((subTema, index) => (
                                <Link
                                    key={index}
                                    to={
                                        "/Asignaturas" +
                                        linkAsignatura +
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
    );
};
