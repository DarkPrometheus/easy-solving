import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dashboard } from "../Dashboard";

export const SistemaEcuaciones = () => {
    const [x1, setX1] = useState(0);
    const [y1, setY1] = useState(0);
    const [resultado1, setResultado1] = useState(0);

    const [x2, setX2] = useState(0);
    const [y2, setY2] = useState(0);
    const [resultado2, setResultado2] = useState(0);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const HandleInputChange = (e) => {
        const { id, value } = e;
        switch (id) {
            case "x1":
                setX1(value);
                break;
            case "y1":
                setY1(value);
                break;
            case "resultado1":
                setResultado1(value);
                break;
            case "x2":
                setX2(value);
                break;
            case "y2":
                setY2(value);
                break;
            case "resultado2":
                setResultado2(value);
                break;
            default:
                break;
        }
    };

    // function to solve linear equation 2x2
    const solve = () => {
        const det = x1 * y2 - x2 * y1;
        const detx = resultado1 * y2 - resultado2 * y1;
        const dety = x1 * resultado2 - x2 * resultado1;
        setX(detx / det);
        setY(dety / det);
    };

    // function to clear inputs
    const clear = () => {
        setX1(0);
        setY1(0);
        setResultado1(0);
        setX2(0);
        setY2(0);
        setResultado2(0);
        setX(0);
        setY(0);
    };

    // funtion to transform decimal number to fraction
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    const decimalToFraction = function (_decimal) {
        var top = _decimal.toString().replace(/\d+[.]/, "");
        var bottom = Math.pow(10, top.length);
        if (_decimal > 1) {
            top = +top + Math.floor(_decimal) * bottom;
        }
        var x = gcd(top, bottom);
        return (
            <>
                <p className="num">{top / x}</p>
                <p className="den">{bottom / x}</p>
            </>
        );
    };

    // funciont to check if a number is a decimal retuning true or false
    const isDecimal = (num) => {
        return num % 1 !== 0;
    };

    return (
        <Dashboard>
            <div className="CardAsignatura__container">
                <div className={"CardEjercicio__content color1"}>
                    <Link className="title" to="/Asignaturas">
                        Sistemas de ecuaciones 2x2
                    </Link>
                    <div className="CardEjercicio__body">
                        <div className="Ecuaciones">
                            <div className="Ecuacion">
                                <b>Ecuacion 1</b>
                                <div className="inputs">
                                    <input
                                        type="number"
                                        id="x1"
                                        value={x1}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                    <span>x</span>
                                    <input
                                        type="number"
                                        id="y1"
                                        value={y1}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                    <span>y = </span>
                                    <input
                                        type="number"
                                        id="resultado1"
                                        value={resultado1}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="Ecuacion">
                                <b>Ecuacion 2</b>
                                <div className="inputs">
                                    <input
                                        type="number"
                                        id="x2"
                                        value={x2}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                    <span>x</span>
                                    <input
                                        type="number"
                                        id="y2"
                                        value={y2}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                    <span>y = </span>
                                    <input
                                        type="number"
                                        id="resultado2"
                                        value={resultado2}
                                        onChange={(e) =>
                                            HandleInputChange(e.target)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="botones">
                                <button onClick={solve}>Calcular</button>
                                <button onClick={clear}>Limpiar</button>
                            </div>
                        </div>
                        <div className="procedimiento">
                            <div className="paso__container">
                                <h1>Despejo de "x" en la primera ecuacion</h1>
                                <div className="paso">
                                    <span>
                                        {x1}x = {resultado1}-{y1}y
                                    </span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="paso__container">
                                <h1>Remplazo de "x" en la segunda ecuacion</h1>
                                <div className="paso">
                                    <span className="fraccion">
                                        <p>{x2}</p>
                                        <p>&#40;</p>
                                        <div className="fraccion__content">
                                            <div className="top">
                                                {resultado1} - {y1}y
                                            </div>
                                            <div>{x1}</div>
                                        </div>
                                        <p>&#41;</p>
                                    </span>
                                    <span className="resultado__container">
                                        {y2 > 0 ? "+" : ""}
                                        {y2}y = {resultado2}
                                    </span>
                                </div>
                            </div>
                            <div className="paso__container">
                                <h1>Remplazo de "y" en la primera ecuacion</h1>
                                <div className="paso">
                                    <span>
                                        {x1}x {y1 > 0 ? "+" : ""} {y * y1} ={" "}
                                        {resultado1}
                                    </span>
                                </div>
                            </div>
                            <div className="resultado">
                                <h1>Resultado</h1>
                                <div className="valores">
                                    <span>
                                        x:{" "}
                                        {isDecimal(x)
                                            ? decimalToFraction(x)
                                            : x}
                                    </span>
                                    <span>
                                        y:{" "}
                                        {isDecimal(y)
                                            ? decimalToFraction(y)
                                            : y}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
