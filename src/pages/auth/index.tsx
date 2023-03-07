import React from "react";
import { Auth } from "../../features";
// import "./index.css";

/**
 * @page Auth
 * @remark
 * - Авторизация проходит через firebase (чтобы работало на всех стендах)
 * Этапы авторизации:
 * 1. Авторизация через Github (/authorize)
 * 2. Получение временного кода доступа
 * 3. Получение токена на основании OAuth данных и полученного кода
 */
const AuthPage = () => {
    const { login } = Auth.useAuth();

    // TODO: add ability to specify redirect url


    return (
        <div className="page page-auth">
            <div className="page-auth__form" >

                <button
                    type="button"
                    className="page-auth__link github"
                    onClick={()=>alert('authorize')}
                    title="Authentication through Github OAuth"
                >
                </button>
            </div>
        </div>
    );
};

export default AuthPage;