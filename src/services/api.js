import { parseCookies } from "nookies";
import axios from "axios";


export function setupApiClient(ctx){
    let cookies = parseCookies(ctx);

     const api = axios.create({
        baseURL: "http://localhost:3333",
        headers: {
            Authorization: `Bearer ${cookies["nextauth.token"]}`
        }
    
    }) ;
    
    api.interceptors.response.use(response => {
        return response
    }, (error) =>{
        if(error.response.status === 401){
            if(error.response?.data?.code === "token.expired"){
                cookies = parseCookies(ctx);
    
                const { 'nextauth.refreshToken': refreshToken} = cookies;
                const originalConfig = error.config
    
                if(!isRefresh){
                    isRefresh = true
    
                    api.post("/refresh-token", {
                        refreshToken,
                    }).then(response =>{
                        const { token } = response.data;
        
                        setCookie(ctx, 'nextauth.token', token,{
                            maxAge: 60 * 60 *24 * 30, // 30 days
                            path: '/'
                        })
        
                        setCookie(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
                            maxAge: 60 * 60 *24 * 30, // 30 days
                            path: '/'
                        })
        
                        api.defaults.headers['Authorization'] = `Bearer ${token}` 
    
                        failedRequestQueue.forEach(request => request.onSuccess(token))
                        failedRequestQueue = [];
                    }).catch( error =>{
                        failedRequestQueue.forEach(request => request.onFailure(error))
                        failedRequestQueue = [];
    
                        if(typeof window){
                            singOut()
                        }
    
                    }).finally( ()=>{
                        isRefresh = false
                    })
                }
    
                return new Promise((resolve, reject) =>{
                    failedRequestQueue.push({
                        onSuccess: (token)=>{
                            originalConfig.headers['Authorization'] = `Bearer ${token}`
    
                            resolve(api(originalConfig))
                        },
                        onFailure: (error)=>{
                            reject(error)
                        }
                    })
                });
            } else {
                if(process.browser){
                    singOut()
                } else{
                    return Promise.reject(new AuthTokenError())
                }
            }
        }
    
        return Promise.reject(error);
    })

    return api;

}