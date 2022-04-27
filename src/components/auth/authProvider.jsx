import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth, checkUserLoggedIn } from "../../firebase/firebase";

export default function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [loggedin, setLoggedin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const loggedin = await checkUserLoggedIn();
                if (loggedin) {
                    console.log("logged in");
                    navigate("/Dashboard");
                } else {
                    console.log("not logged in");
                }
            }
        });
    }, [navigate]);

    return <div>{!loggedin ? children : <h1>Cargando</h1>}</div>;
}
