import { useContext } from "react";
import { DataProvider } from "../../Context/DataContext";

const useData = () =>useContext(DataProvider);
export default useData;