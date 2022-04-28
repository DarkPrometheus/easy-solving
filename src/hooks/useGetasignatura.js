import { useEffect, useState } from "react";

export const useGetasignatura = (asignatura) => {
    let asignaturaObj;

    switch (asignatura) {
        case "CalculoDiferencial":
            asignaturaObj = {
                nombreAsignatura: "Calculo Diferencial",
                linkAsignatura: "/CalculoDiferencial",
                temas: [
                    {
                        nombreTema: "Numeros reales",
                        subTemas: [
                            "Los números reales",
                            "Axiomas de los números reales",
                            "Intervalos y su representación gráfica",
                            "Valor absoluto y sus propiedades",
                            "Propiedades de las desigualdades",
                            "Resolución de desigualdades de primer y segundo grado con una incógnita",
                            "Resolución de desigualdades que incluyan valor absoluto"
                        ],
                        linksSubTemas: [
                            "/LosNumerosReales",
                            "/AxiomasDeLosNumerosReales",
                            "/IntervalosySuRepresentacionGráfica",
                            "/ValorAbsolutoySusPropiedades",
                            "/PropiedadesDeLasDesigualdades",
                            "/ResolucionDeDesigualdadesDePrimerySegundoGradoConUnaIncognita",
                            "/ResoluciónDeDesigualdadesQueIncluyanValorAbsoluto"
                        ]
                    },
                    {
                        nombreTema: "Funciones",
                        subTemas: [
                            "Definición de variable, función, dominio y rango",
                            "Función real de variable real y su representación gráfica",
                            "Función inyectiva, suprayectiva y biyectiva",
                            "Funciones algebraicas: polinomiales y racionales",
                            "Funciones trascendentes: trigonométricas, logarítmicas y exponenciales",
                            "Funciones escalonadas",
                            "Operaciones con funciones: adición, multiplicación, división y composición",
                            "Función inversa",
                            "Función implícita",
                            "Otro tipo de funciones"
                        ],
                        linksSubTemas: [
                            "/DefiniciónDeVariableFunciónDominioyRango",
                            "/FunciónRealDeVariableRealySuRepresentación gráfica",
                            "/FunciónInyectivaSuprayectivayBiyectiva",
                            "/FuncionesAlgebraicasPolinomialesyRacionales",
                            "/FuncionesTrascendentesTrigonométricasLogarítmicasyExponenciales",
                            "/FuncionesEscalonadas",
                            "/OperacionesConFuncionesAdiciónMultiplicaciónDivisiónyComposición",
                            "/FunciónInversa",
                            "/FunciónImplícita",
                            "/OtroTipoDeFunciones"
                        ]
                    },
                    {
                        nombreTema: "Limites y continuidad",
                        subTemas: [
                            "Noción de límite",
                            "Definición de límite de una función",
                            "Propiedades de los límites",
                            "Cálculo de límites",
                            "Límites laterales",
                            "Límites infinitos y límites al infinito",
                            "Asíntotas",
                            "Continuidad en un punto y en un intervalo",
                            "Tipos de discontinuidades"
                        ],
                        linksSubTemas: [
                            "/NociónDeLímite",
                            "/DefiniciónDeLímiteDeUnaFunción",
                            "/PropiedadesDeLosLímites",
                            "/CálculoDeLímites",
                            "/LímitesLaterales",
                            "/LímitesInfinitosyLímitesAlInfinito",
                            "/Asíntotas",
                            "/ContinuidadEnUnPuntoyEnUnIntervalo",
                            "/TiposDeDiscontinuidades"
                        ]
                    },
                    {
                        nombreTema: "Derivadas",
                        subTemas: [
                            "Interpretación geométrica de la derivada",
                            "Incremento y razón de cambio",
                            "Definición de la derivada de una función",
                            "Diferenciales",
                            "Cálculo de derivadas",
                            "Regla de la cadena",
                            "Derivada de funciones implícitas",
                            "Derivadas de orden superior"
                        ],
                        linksSubTemas: [
                            "/InterpretaciónGeométricaDeLaDerivada",
                            "/IncrementoyRazónDeCambio",
                            "/DefiniciónDeLaDerivadaDeUnaFunción",
                            "/Diferenciales",
                            "/CálculoDeDerivadas",
                            "/ReglaDeLaCadena",
                            "/DerivadaDFuncionesImplícitas",
                            "/DerivadasDeOrdenSuperior"
                        ]
                    },
                    {
                        nombreTema: "Aplicaciones de la derivada",
                        subTemas: [
                            "Recta tangente y recta normal a una curva en un punto",
                            "Teorema de Rolle y teoremas del valor medio",
                            "Función creciente y decreciente",
                            "Máximos y mínimos de una función",
                            "Criterio de la primera derivada para máximos y mínimos",
                            "Concavidades y puntos de inflexión",
                            "Criterio de la segunda derivada para máximos y mínimos",
                            "Análisis de la variación de una función",
                            "Problemas de optimización y de tasas,relacionadas",
                            "Cálculo de aproximaciones usando diferenciales",
                            "La regla de L’Hôpital"
                        ],
                        linksSubTemas: [
                            "/RectaTangenteyRectaNormalAUnaCurvaEnUnPunto",
                            "/TeoremaDeRolleyTeoremasDelValorMedio",
                            "/FunciónCrecienteyDecreciente",
                            "/MáximosyMínimosDeUnaFunción",
                            "/CriterioDeLaPrimeraDerivadaParaMáximosyMínimos",
                            "/ConcavidadesyPuntosDeInflexión",
                            "/CriterioDeLaSegundaDerivadaParaMáximosyMínimos",
                            "/AnálisisDeLaVariaciónDeUnaFunción",
                            "/ProblemasDeOptimizaciónyDeTasasRelacionadas",
                            "/CálculoDeAproximacionesUsandoDiferenciales",
                            "/LaReglaDeLHopital"
                        ]
                    }
                ],
                linksTemas: [
                    "/NumerosReales",
                    "/Funciones",
                    "/LimitesyContinuidad",
                    "/Derivadas",
                    "/AplicacionesDeLaDerivada"
                ],
                color: "color1"
            };
            break;
        case "FundamentosDeProgramacion":
            asignaturaObj = {
                nombreAsignatura: "Fundamentos de Programacion",
                linkAsignatura: "/FundamentosDeProgramacion",
                temas: [
                    {
                        nombreTema: "Diseño de algoritmos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Introduccion a la programacion",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Control de flujo",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Organizacion de datos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Modularidad",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    }
                ],
                linksTemas: [
                    "/DiseñoDeAlgoritmos",
                    "/IntroduccionALaProgramacion",
                    "/ControlDeFlujo",
                    "/OrganizacionDeDatos",
                    "/Modularidad"
                ],
                color: "color2"
            };
            break;
        case "AlgebraLineal":
            asignaturaObj = {
                nombreAsignatura: "Algebra Lineal",
                linkAsignatura: "/AlgebraLineal",
                temas: [
                    {
                        nombreTema: "Números complejos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Matrices y determinantes",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Sistemas de ecuaciones lineales",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Espacios vectoriales",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Transformaciones lineales",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    }
                ],
                linksTemas: [
                    "/NúmerosComplejos",
                    "/MatricesyDeterminantes",
                    "/SistemasDeEcuacionesLineales",
                    "/EspaciosVectoriales",
                    "/TransformacionesLineales"
                ],
                color: "color7"
            };
            break;
        case "EstructuraDeDatos":
            asignaturaObj = {
                nombreAsignatura: "Estructura de Datos",
                linkAsignatura: "/EstructuraDeDatos",
                temas: [
                    {
                        nombreTema: "Introducción a las estructuras de datos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Recursividad",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Estructuras lineales",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Estructuras no lineales",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Métodos de ordenamiento",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Métodos de búsqueda",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    }
                ],
                linksTemas: [
                    "/IntroducciónALasEstructurasDeDatos",
                    "/Recursividad",
                    "/EstructurasLineales",
                    "/EstructurasNoLineales",
                    "/MétodosDeOrdenamiento",
                    "/MétodosDeBúsqueda"
                ],
                color: "color4"
            };
            break;
        case "SistemasOperativos":
            asignaturaObj = {
                nombreAsignatura: "Sistemas Operativos",
                linkAsignatura: "/SistemasOperativos",
                temas: [
                    {
                        nombreTema: "Introducción a los Sistemas Operativos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema:
                            "Administración de Procesos y del procesador",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Administración de memoria",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Administración de entrada/salida",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Sistemas de archivos",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    },
                    {
                        nombreTema: "Protección y seguridad ",
                        subTemas: [
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet",
                            "Lorem ipsum dolor sit amet"
                        ],
                        linksSubTemas: [
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet",
                            "/LoremIpsumDolorSitAmet"
                        ]
                    }
                ],
                linksTemas: [
                    "/IntroducciónaLosSistemasOperativos",
                    "/AdministraciónDeProcesosyDelProcesador",
                    "/AdministraciónDeMemoria",
                    "/AdministraciónDeEntrada/salida",
                    "/SistemasDeArchivos",
                    "/ProtecciónySeguridad"
                ],
                color: "color5"
            };
            break;
        default:
            asignaturaObj = null;
            break;
    }

    return asignaturaObj;
};
