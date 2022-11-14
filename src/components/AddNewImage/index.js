import { useState } from 'react';
import { FormLabel, Input, Flex, Button, Select } from '@chakra-ui/react'
import axios from 'axios';


export function AddNewImage({id}){
    const {image, setImage} = useState("");

    console.log('image :>> ', image);

    async function handleAddNewImage(id, image){
        await api.patch("/food/image", id, image).then( ()=> {})
        .catch(err =>
            console.log('resp :>> ', err.response)
        )

    }

    return (
        <Flex  
            position="absolute"
            // display="none"
            align="center" 
            justify="center" 
            w="98vw"
            h="90vh"
            color="black"
            bg="#7b7b7b"
        >
            <form >
            <FormLabel 
                fontWeight="bold"
                >
                Selceione uma imagem:
            </FormLabel>
            
                <Input
                type="file"  
                bg="#fff"
                border="1px solid black"
                padding=".2em"  
                onChange={()=> setImage(e.target.value)}
                />

                <Button 
                    bg="#000" 
                    color="#fff"
                    width="80%"
                    mt="1em"
                    ml="1em"
                    _hover={{
                        opacity: .8,
                        cursor: "pointer"
                    }}
                    > 
                    Enviar
                </Button>
            

            </form>
        </Flex>
    )
}