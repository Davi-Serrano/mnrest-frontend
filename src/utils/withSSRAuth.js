import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenErros";
import decode from "jwt-decode"
import { validateUsePermissions } from "./validateUserPermissions";




export function withSSRAuth(fn){
    return async(ctx) =>{
        const cookies = parseCookies(ctx);
        const token = cookies['nextauth.token']

        if(!token){
            return{
                redirect:{
                    destination: "/",
                    permanent: false,
                }
            }
        }


        try {
            return await fn(ctx);
          } catch (err) {
            if (err instanceof AuthTokenError) {
              destroyCookie(ctx, `nextauth.token`);
              destroyCookie(ctx, `nextauth.refreshToken`);
          
              return {
                redirect: {
                  destination: `/`,
                  permanent: false,
                },
              };
            }
          
            return {
              redirect: {
                destination: `/`,
                permanent: false,
              },
            };
            
        }
    }
}