import { useState, createContext, useContext} from "react"

export const FoodsContext = createContext();


export default function FoodsProvider({ children }){

    const [ foods, setFoods ] = useState("");

    return(

        <FoodsContext.Provider
        value={{
            foods,
            setFoods
        }}
        > 
            
            {children}    
        
         </FoodsContext.Provider>

    )
}

export function usefoods(){
    const context = useContext(FoodsContext)
    const { foods, setFoods }  = context ;

    return  { foods, setFoods };
}