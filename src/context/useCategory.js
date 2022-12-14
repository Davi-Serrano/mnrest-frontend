import { useState, createContext, useContext} from "react"

export const CategoriesContext = createContext({});

export default function CategoriesProvider({ children }){
    const [ categories, setCategories ] = useState("não é undefined");

    return(

        <CategoriesContext.Provider
        value={{
            categories,
            setCategories
        }}
        > 
            {children}    
         </CategoriesContext.Provider>
    )
};

export function useCategories(){
    const context = useContext(CategoriesContext)
    const { categories, setCategories }  = context ;

    return  { categories, setCategories };
};