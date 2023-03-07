import useLocalStorage  from "../../shared/hooks";
import { CREDENTIAL_KEY } from "./consts";
import { UserCredential } from "./types";


export const useAuth = () => {
    const [viewer, setViewer] = useLocalStorage<UserCredential | null>(CREDENTIAL_KEY, null);
    const isAuth = !!viewer;

    const login = (credential: UserCredential) => {
        setViewer(credential);
        window.location.href = `/${credential.username}`;
    };

    const logout = () => {
        setViewer(null);
    };

    return { isAuth, viewer, login, logout };
};