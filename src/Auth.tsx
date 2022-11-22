import { createContext,useState,useContext } from "react";
import { userSignup,userLogin } from "./utils/http/loginRequest";
import axios from "axios";

interface IAuthContext {
    userType: null|"admin"|"user";
    handleLogin: (username:string,password:string)=>Promise<boolean>;
    handleLogout: ()=>void;
    handleSignUp: (email:string,username:string,password:string)=>Promise<boolean>;
}

const AuthContext = createContext<IAuthContext|null>(null);

const AuthProvider = ({ children }) => {
    const init=localStorage.getItem("userType")||null;
    const token=localStorage.getItem("token")||null;
    axios.defaults.headers.common['Authorization'] =token;
    const [userType, setUserType] = useState<null|"admin"|"user">(init as null|"admin"|"user");

    const handleLogin=async (username:string,password:string)=>{
        const body=await userLogin({username,password})
        const {data} = body;
        if(data.token){
            setUserType("user");
            axios.defaults.headers.common['Authorization'] =data.token;
            localStorage.setItem("userType","user");
            localStorage.setItem("id",data.user.id);
            localStorage.setItem("token",data.token);
            return true;
        }else{
            return false;
        }  
    }

    const handleLogout=()=>{
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        setUserType(null)
    }

    const handleSignUp=async (email:string,username:string,password:string,)=>{
        const body=await userSignup({
            email,
            password,
            username
        });
        const {data} = body;
        if(data.msg){
            return true;
        }else{
            return false;
        }
    }

    const value={
        userType,
        handleLogin,
        handleLogout,
        handleSignUp
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}


export {useAuth,AuthProvider};