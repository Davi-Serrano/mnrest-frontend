import { Button } from "@chakra-ui/react";
import { api } from "../../services/apiClient";

export function BtnDeleteFood({food_id}){

    const handleDeleteFoods = async()=>{
       await api.delete("/food", {data: {food_id}}).then( ()=> {"Food deleted with success"})
        .catch(err =>
            console.log('resp :>> ', err.response)
        )

    }

    return(   
        <Button 
        bg="red" 
        color="#fff"
        mt="1em"
        ml="1em"
        onClick={handleDeleteFoods}
        _hover={{
        opacity: .8,
        cursor: "pointer"
        }}
        > 
          Excluir
      </Button>
    )
}