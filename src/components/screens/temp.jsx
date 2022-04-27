export const Asignatura = () => {
    const { asignatura } = useParams();
    const [asignaturaObj, setAsignaturaObj] = useState({
        nombreAsignatura: "",
        linkAsignatura: "",
        temas: [""],
        linksTemas: [""],
        subTemas: [""],
        linksSubTemas: [""],
        color: ""
    });

    useEffect(() => {
        console.log(asignatura);
        switch (asignatura) {
            case "CalculoDiferencial":
                console.log("set");
                setAsignaturaObj({
                    nombreAsignatura: "Calculo Diferencial",
                    linkAsignatura: "/CalculoDiferencial",
                    temas: [
                        "Numeros reales",
                        "Funciones",
                        "Limites y continuidad",
                        "Derivadas",
                        "Aplicaciones de la derivada"
                    ],
                    linksTemas: [
                        "/NumerosReales",
                        "/Funciones",
                        "/LimitesyContinuidad",
                        "/Derivadas",
                        "/AplicacionesDeLaDerivada"
                    ],
                    subTemas: [
                        "Los números reales",
                        "Axiomas de los números reales",
                        "Intervalos y su representación gráfica",
                        "Valor absoluto y sus propiedades",
                        "Propiedades de las desigualdades",
                        "Resolución de desigualdades de primersegundo grado con una incógnita",
                        "Resolución de desigualdades que incluyan valor absoluto"
                    ],
                    linksSubTemas: [
                        "/LosNúmerosReales",
                        "/AxiomasDeLosNúmerosReales",
                        "/IntervalosySuRepresentaciónGráfica",
                        "/ValorAbsolutoySusPropiedades",
                        "/PropiedadesDeLasDesigualdades",
                        "/ResoluciónDeDesigualdadesDePrimersegundoGradoConUnaIncógnita",
                        "/ResoluciónDeDesigualdadesQueIncluyanValorAbsoluto"
                    ],
                    color: "color1"
                });
                console.log(asignaturaObj);
                break;
            case "FundamentosDeProgramacion":
                setAsignaturaObj({
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
                });
                break;
            case "AlgebraLineal":
                setAsignaturaObj({
                    title: "Algebra Lineal",
                    list: [
                        "Números complejos",
                        "Matricesy determinantes",
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
                });
                break;
            case "EstructuraDeDatos":
                setAsignaturaObj({
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
                });
                break;
            case "SistemasOperativos":
                setAsignaturaObj({
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
                    linkTitle: "/TallerDeDiseño",
                    linksItem: [
                        "/IntroducciónaLosSistemasOperativos",
                        "/AdministraciónDeProcesosyDelProcesador",
                        "/AdministraciónDeMemoria",
                        "/AdministraciónDeEntrada/salida",
                        "/SistemasDeArchivos",
                        "/ProtecciónySeguridad "
                    ]
                });
                break;
            default:
                break;
        }
        console.log(asignaturaObj);
    }, [asignatura]);

    return (
        <Dashboard>
            <div className="CardAsignatura__container">
                <div className={"CardAsignatura__content color1"}>
                    <Link className="title" to="/Asignaturas">
                        {asignaturaObj.title}
                    </Link>
                    <div className="CardAsignatura__body">
                        {asignaturaObj.list.map((item, index) => (
                            <div key={index} className="CardTema__content">
                                <h1 className="tema__title">{item}</h1>
                                <ul></ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};
