import { Button } from "@chakra-ui/react";
import { api } from "../../services/api";

export function BtnCreateNewFood({name, price, category, description}){

    async function handleSubmitFoods(){
       const resp = await api.post("/food", {
            name,
            description,
            category_id: category,
            price
        }).then( ()=> {})
        .catch(err =>
            console.log('resp :>> ', err.response)
        )

    }

    return(   
        <Button 
            bg="#000" 
            color="#fff"
            width="80%"
            mt="1em"
            ml="1em"
            onClick={handleSubmitFoods}
            _hover={{
            opacity: .8,
            cursor: "pointer"
            }}
        > 
          Enviar
      </Button>
    )
}