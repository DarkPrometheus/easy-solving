import React from "react";
import { Menu } from "../nav/Menu";

export const Dashboard = ({ children }) => {
    /*     const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // TODO: Mover contenido de useEffect a un componente aparte
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user == null) {
                navigate("/login");
            } else {
                setUser(user);
            }
        });
    }, [navigate]); */

    return (
        <div className="Dashboard">
            <Menu />
            <div className="Dashboard__container">{children}</div>
        </div>
    );
};
