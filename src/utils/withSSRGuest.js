
import { parseCookies } from "nookies"

export function withSSRGuest(fn){
    return async(ctx )=>{
        const cookies = parseCookies(ctx);

        if(!cookies['nextauth.token']){
            return{
                redirect:{
                    destination: "/",
                    permanent: false,
                }
            }
        }

        return await fn(ctx)
    }
}



