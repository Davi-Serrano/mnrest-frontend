import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies"
import Router from "next/router";
import { api } from "../services/apiClient";


export const AuthContext = createContext({});

export function singOut(){
    destroyCookie(undefined, "nextauth.token")
    destroyCookie(undefined, "nextauth.refreshToken")
    destroyCookie(undefined, "user.name")

    Router.push('/')
}


export default function AuthProvider({children}){

    const [ user, setUser ] = useState();
    const isAuthenticated = !!user
    
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


    useEffect(()=> {
        const {"nextauth.token": token } = parseCookies()  

        const {"user.name": name } = parseCookies()  

        if(token){
           setUser(name)
        }

   }, [])


    async function singIn(user){
        try {
            const response = await api.post('/session', {
                user
            })
            
            const { token, refresh_token, name } = response.data

            setCookie(undefined, 'nextauth.token', token,{
                maxAge: 60 * 60 *24 * 30, // 30 days
                path: '/'
            });

            setCookie(undefined, 'nextauth.refreshToken', refresh_token, {
                maxAge: 60 * 60 *24 * 30, // 30 days
                path: '/'
            });

            setCookie(undefined, 'user.name', name, {
                maxAge: 60 * 60 *24 * 30, // 30 days
                path: '/'
            });

            setUser({
                name,
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