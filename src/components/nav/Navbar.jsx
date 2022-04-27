import React from "react";
import { Exit } from "../resources/Exit";
import { User } from "../resources/User";
import { getAuth, signOut } from "firebase/auth";

export const Navbar = () => {
    const exitSize = 40,
        userSize = 48;

    const auth = getAuth();

    const Salir = () => {
        signOut(auth)
            .then(() => {
                console.log("Signed out");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <nav className="Navbar">
            <div className="left">
                <h1>ITT - Ingenieria Informatica</h1>
            </div>
            <div className="right">
                <div className="user">
                    <User width={userSize} height={userSize} />
                    <span>User name</span>
                </div>
                <div className="exit" onClick={Salir}>
                    <Exit width={exitSize} height={exitSize} />
                </div>
            </div>
        </nav>
    );
};
