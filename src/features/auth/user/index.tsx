import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";
import { routes } from "../consts";

/**
 * Плашка пользователя с базовой информацией
 */
const User = () => {
    const { isAuth, logout, viewer } = useAuth();

    /**
     * FIXME: Использовать Link?
     * (но для этого нужна будет обертка Auth.Router на уровне App)
     */
    return (
        <span className="auth-user select-none">
            {isAuth && (
                <>
                    {/* FIXME: use h3 instead */}
                    <Link className="m-4 text-white" to={`/${viewer?.username}`}>
                        {viewer?.username}
                    </Link>
                    <button className="m-4"  onClick={logout}>
                        <Link to={routes.logout}>
                            Logout
                        </Link>
                    </button>
                </>
            )}
            {!isAuth && (
                <button className="m-4" >
                    <Link to={routes.login}>
                        Sign In
                    </Link>
                </button>
            )}
        </span>
    );
};

export default User;