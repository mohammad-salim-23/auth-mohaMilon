import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);
 
    return (
        <div>
           <h2 className="text-3xl text-red-500">This is my Home:{authInfo.name}</h2> 
        </div>
    );
};

export default Home;