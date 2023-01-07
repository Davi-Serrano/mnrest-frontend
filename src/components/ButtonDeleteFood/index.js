import {useState} from "react"
import { Button, Flex } from "@chakra-ui/react";
import { api } from "../../services/apiClient";
import { ConfirmDeleteFoods } from "./confirmDelete";

export function BtnDeleteFood({food_id}){
    const[ display, setDisplay ] = useState("none")
   
    return(   
        <Flex>

            <Button 
                bg="red" 
                color="#fff"
                w="100%"
                mt="1em"
                ml="1em"
                onClick={()=> setDisplay(food_id)}
                _hover={{
                    opacity: .8,
                    cursor: "pointer"
                }}
                > 
                Excluir
            </Button>
        
            <ConfirmDeleteFoods display={display} id={food_id} setDisplay={setDisplay} />
        </Flex>
    )
}