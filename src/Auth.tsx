import { createContext,useState,useContext } from "react";
import { userSignup,userLogin } from "./utils/http/loginRequest";

interface IAuthContext {
    userType: null|"admin"|"user";
    handleLogin: (email:string,password:string)=>Promise<boolean>;
    handleLogout: ()=>void;
    handleSignUp: (email:string,password:string)=>Promise<boolean>;
}

const AuthContext = createContext<IAuthContext|null>(null);

const AuthProvider = ({ children }) => {
    const init=localStorage.getItem("userType")||null;
    const [userType, setUserType] = useState<null|"admin"|"user">(init as null|"admin"|"user");

    const handleLogin=async (email:string,password:string)=>{
        const data=await userLogin(email,password);
        if(data.success){
            setUserType(data.userType);
            localStorage.setItem("userType",data.userType);
            return true;
        }else{
            return false;
        }  
    }

    const handleLogout=()=>{
        localStorage.removeItem("userType");
        setUserType(null)
    }

    const handleSignUp=async (email:string,password:string)=>{
        const data=await userSignup(email,password);
        if(data.success){
            setUserType(data.userType);
            localStorage.setItem("userType",data.userType);
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