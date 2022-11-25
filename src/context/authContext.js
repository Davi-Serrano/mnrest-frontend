import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies"
import Router from "next/router";
import { api } from "../services/apiClient";


export const AuthContext = createContext({});

export function singOut(){
    destroyCookie(undefined, "nextauth.token")
    destroyCookie(undefined, "nextauth.refreshToken")

    Router.push('/')
}


export default function AuthProvider({children}){

    const [ user, setUser ] = useState();
    const [ isAuthenticated, setIsAuthenticated ]= useState(false)
    
    useEffect(()=>{
        let authChannel = new BroadcastChannel("auth")

        authChannel.onmessage = (message)=> {
            switch(message.data){
                case 'singOut':
                    singOut();
                break;
                default:
                break
            }
        }
    }, [])


//     useEffect(()=> {
//         const {"nextauth.token": token } = parseCookies()        

//         if(token){
//             api.get('/me').then(response =>{
//                const { user } = response.data
//                setUser(user.name)
//            })
//            .catch( () =>{
//                singOut();
//            })
//         }

//    }, [])


    async function singIn(user){
        try {
            const response = await api.post('/session', {
                user
            })

            setIsAuthenticated(true)
            console.log('response :>> ', response.data, isAuthenticated);
            
            const { token, refresh_token } = response.data

            setCookie(undefined, 'nextauth.token', token,{
                maxAge: 60 * 60 *24 * 30, // 30 days
                path: '/'
            });

            setCookie(undefined, 'nextauth.refreshToken', refresh_token, {
                maxAge: 60 * 60 *24 * 30, // 30 days
                path: '/'
            });

            setUser({
                user,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}` 

            Router.push("/dashboard")
            
       } catch (err) {
            console.log(err)
       }
     }
    

    return(
        <AuthContext.Provider
        value={{
            singIn,
            singOut,
            isAuthenticated,
            user
        }}
        > 
            {children}    
         </AuthContext.Provider>
    )
}