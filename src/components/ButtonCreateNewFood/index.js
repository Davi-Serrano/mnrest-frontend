import { Button, useToast } from "@chakra-ui/react";


export function BtnCreateNewFood({handleSubmitFoods}){
    
    return(   
        <Button 
            id="btn"
            bg="#0000cd" 
            color="#fff"
            width="80%"
            mt="1em"
            ml="1em"
            onClick={()=> handleSubmitFoods()}
            _hover={{
            opacity: .8,
            cursor: "pointer"
            }}
        > 
          Enviar
      </Button>
    )
}