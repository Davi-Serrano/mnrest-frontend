import { useState } from 'react';
import { FormLabel, Input, Flex, Button } from '@chakra-ui/react'

export function EditPrice({id, display, setDisplay={setDisplay}, handleEditPrice}){
    const [price, setPrice] = useState("");

    return (
        <Flex  
            position="absolute"
            display={ display === id ? "block" : "none" }
            h="35vh"
            color="black"
            bg="whitesmoke"
            p="1em"   
            zIndex={9}    
        >
            <form >
            <FormLabel 
                fontWeight="bold"
                >
                Digite o novo preço 
            </FormLabel>
            
                <Input  
                bg="#fff"
                border="1px solid black"
                padding=".2em"  
                onChange={(e)=> setPrice(e.target.value)}
                />

                <Button 
                    bg="green" 
                    color="#fff"
                    width="80%"
                    mt="1em"
                    ml="1em"
                    _hover={{
                        opacity: .8,
                        cursor: "pointer"
                    }}
                    onClick={()=>handleEditPrice(id, price)}
                    > 
                    Enviar
                </Button>

                <Button 
                    bg="red" 
                    color="#fff"
                    width="80%"
                    mt="1em"
                    ml="1em"
                    _hover={{
                        opacity: .8,
                        cursor: "pointer"
                    }}
                    onClick={()=> setDisplay("none")}
                    > 
                    Fechar
                </Button>
            

            </form>
        </Flex>
    )
}