import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthCotext";
const useAuth = () => useContext(AuthProvider);
export default useAuth;