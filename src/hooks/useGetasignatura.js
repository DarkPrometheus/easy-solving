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
                            "/AxiomasDeLosNúmerosReales",
                            "/IntervalosySuRepresentaciónGráfica",
                            "/ValorAbsolutoySusPropiedades",
                            "/PropiedadesDeLasDesigualdades",
                            "/ResoluciónDeDesigualdadesDePrimerySegundoGradoConUnaIncógnita",
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
        default:
            asignaturaObj = null;
            break;
    }

    return asignaturaObj;
};
