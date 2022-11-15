import { useState, createContext, useContext} from "react"

export const FoodsContext = createContext({});

export default function FoodProvider({children}){
    const [ foods, setFoods ] = useState([])

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