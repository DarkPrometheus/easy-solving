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
                <div className={"Tema__container color1"}>
                    <Link className="title" to={"/Asignaturas/" + asignatura}>
                        {title}
                    </Link>
                    <div className="Tema__content">
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nihil odit sint eos molestiae quo sequi quia
                            cum! Soluta sapiente distinctio rerum architecto
                            magni obcaecati quia repellat voluptatibus
                            consequuntur. Libero, mollitia! Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Nihil odit
                            sint eos molestiae quo sequi quia cum! Soluta
                        </p>
                        <img src="#" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. A, libero pariatur ipsum in saepe officiis
                            animi quibusdam at. Laboriosam aliquam esse eveniet
                            neque a laudantium dolores enim repellat, sed
                            debitis. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Voluptatibus illum explicabo
                            omnis. Quo debitis eligendi provident quos error!
                            Quasi consectetur quas voluptate eos sint doloremque
                            mollitia obcaecati at porro. Consectetur!
                        </p>
                        <img src="#" alt="" />
                        <h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Natus amet impedit enim? Tenetur amet alias
                            facilis magni aliquid minima, libero non quas ipsum
                            eligendi natus necessitatibus adipisci ipsa veniam
                            saepe.
                        </p>
                        <img src="#" alt="" />
                        <h1>Natus amet impedit enim</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Nesciunt quibusdam officiis beatae eius
                            voluptas non, officia placeat omnis maiores atque
                            dolor perferendis provident dolore inventore nisi,
                            accusamus enim dicta voluptatum. Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Omnis,
                            voluptatum aperiam nemo harum blanditiis nisi ea
                            numquam quia repellendus quam veniam, ullam
                            molestias, iusto facilis qui aut voluptatem alias
                            ipsa. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eos et corrupti, praesentium a
                            officia alias itaque dolores hic id blanditiis iste
                            consequatur facilis quasi dolorum incidunt nesciunt,
                            facere, rem quisquam.
                        </p>
                        <Link to="/EjercicioTest" className="button">
                            Ir a ejercios
                        </Link>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
