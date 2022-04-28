import React from "react";
import { useGetasignatura } from "../../hooks/useGetasignatura";
import { CardMateria } from "../sections/CardMateria";
import { Dashboard } from "./Dashboard";

export const Asignaturas = () => {
    const list = [
        {
            title: "Calculo Diferencial",
            list: [
                "Numeros reales",
                "Funciones",
                "Limites y continuidad",
                "Derivadas",
                "Aplicaciones de la derivada"
            ],
            color: "color1",
            linkTitle: "/CalculoDiferencial",
            linksItem: [
                "/NumerosReales",
                "/Funciones",
                "/LimitesyContinuidad",
                "/Derivadas",
                "/AplicacionesDeLaDerivada"
            ]
        },
        {
            title: "Fundamentos de Programacion",
            list: [
                "Diseño de algoritmos",
                "Introduccion a la programacion",
                "Control de flujo",
                "Organizacion de datos",
                "Modularidad"
            ],
            color: "color2",
            linkTitle: "/FundamentosDeProgramacion",
            linksItem: [
                "/DiseñoDeAlgoritmos",
                "/IntroduccionALaProgramacion",
                "/ControlDeFlujo",
                "/OrganizacionDeDatos",
                "/Modularidad"
            ]
        },
        {
            title: "Algebra Lineal",
            list: [
                "Números complejos",
                "Matrices y determinantes",
                "Sistemas de ecuaciones lineales",
                "Espacios vectoriales",
                "Transformaciones lineales"
            ],
            color: "color7",
            linkTitle: "/AlgebraLineal",
            linksItem: [
                "/NúmerosComplejos",
                "/MatricesyDeterminantes",
                "/SistemasDeEcuacionesLineales",
                "/EspaciosVectoriales",
                "/TransformacionesLineales"
            ]
        },
        {
            title: "Estructura de Datos",
            list: [
                "Introducción a las estructuras de datos",
                "Recursividad",
                "Estructuras lineales",
                "Estructuras no lineales",
                "Métodos de ordenamiento",
                "Métodos de búsqueda"
            ],
            color: "color4",
            linkTitle: "/EstructuraDeDatos",
            linksItem: [
                "/IntroducciónALasEstructurasDeDatos",
                "/Recursividad",
                "/EstructurasLineales",
                "/EstructurasNoLineales",
                "/MétodosDeOrdenamiento",
                "/MétodosDeBúsqueda"
            ]
        },
        {
            title: "Sistemas Operativos",
            list: [
                "Introducción a los Sistemas Operativos",
                "Administración de Procesos y del procesador",
                "Administración de memoria",
                "Administración de entrada/salida",
                "Sistemas de archivos",
                "Protección y seguridad "
            ],
            color: "color5",
            linkTitle: "/SistemasOperativos",
            linksItem: [
                "/IntroducciónaLosSistemasOperativos",
                "/AdministraciónDeProcesosyDelProcesador",
                "/AdministraciónDeMemoria",
                "/AdministraciónDeEntrada/salida",
                "/SistemasDeArchivos",
                "/ProtecciónySeguridad"
            ]
        }
    ];

    let subTemas = [];
    list.forEach((item) => {
        let asignatura = useGetasignatura(item.linkTitle.substring(1));
        subTemas.push(asignatura);
    });

    return (
        <Dashboard>
            <div className="CardMateria__container">
                {subTemas.map((item, index) => (
                    <CardMateria key={index} {...item} />
                ))}
            </div>
        </Dashboard>
    );
};
