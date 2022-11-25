import { createContext,useState,useContext } from "react";
import { userSignup,userLogin } from "./utils/http/loginRequest";
import axios from "axios";
import messageService from "@/components/Message";
interface IAuthContext {
    userType: null|"admin"|"user";
    handleLogin: (username:string,password:string)=>Promise<boolean>;
    handleLogout: ()=>void;
    handleSignUp: (email:string,username:string,password:string)=>Promise<boolean>;
    userState:any;
}

const AuthContext = createContext<IAuthContext|null>(null);

const AuthProvider = ({ children }:{children:any}) => {
    const init=localStorage.getItem("userType")||null;
    const initState=localStorage.getItem("userState")||null;
    const token=localStorage.getItem("token")||null;
    axios.defaults.headers.common['Authorization'] =token||"-";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    const [userType, setUserType] = useState<null|"admin"|"user">(init as null|"admin"|"user");
    const [userState, setUserState] = useState<any>(initState);

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: any) => {
        //   console.log("interceptor error inside", error);
          if(error.response.status===401){
            refreshLoginState();
            setUserType(null);
            setUserState(null);
            messageService.error({content:"The token is expired! Please log in again",duration:3000});
            // location.reload();
            location.href="/loginpage";
          }
          return error;
        },
      );

    const handleLogin=async (username:string,password:string)=>{
        const body=await userLogin({username,password})
        const {data} = body;
        if(data.token){
            setUserType("user");
            setUserState(data);
            axios.defaults.headers.common['Authorization'] =data.token;
            localStorage.setItem("userType","user");
            localStorage.setItem("id",data.user.id);
            localStorage.setItem("token",data.token);
            localStorage.setItem("username",data.user.username);
            return true;
        }else{
            return false;
        }  
    }

    const handleLogout=()=>{
        localStorage.clear();
        setUserType(null)
        setUserState(null)
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
        handleSignUp,
        // userState
    }

    //the token is expired

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

const refreshLoginState=async ()=>{
    localStorage.clear()
}


export {useAuth,AuthProvider};