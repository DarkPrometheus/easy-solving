import React from "react";
import { Link } from "react-router-dom";
import arrow from "../resources/arrow.ico";

export const CardMateria = ({ title, list, color, linkTitle, linksItem }) => {
    return (
        <div className={"CardMateria__content " + color}>
            <Link className="title" to={"/Asignaturas" + linkTitle}>
                {title}
            </Link>
            <div className="CardMateria__body">
                <ul>
                    {list.map((item, index) => (
                        <Link
                            key={index}
                            to={"/Asignaturas" + linkTitle + linksItem[index]}
                        >
                            <img src={arrow} />
                            {item}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};
