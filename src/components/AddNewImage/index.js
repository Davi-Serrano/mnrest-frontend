import { useState } from 'react';
import { FormLabel, Input, Flex, Button, Select } from '@chakra-ui/react'
import { api } from "../../services/api"

export function AddNewImage({id, display, setDisplay={setDisplay}}){
    const [image, setImage] = useState("");


    async function handleAddNewImage(id, image){
        const data = new FormData();
        data.append("id", id);
        data.append("foods", image)
    

        await api.patch("/food/image", data).then( ()=> {})
        .catch(err =>
            console.log('resp :>> ', err.response)
        )

    }

    return (
        <Flex  
            position="absolute"
            display={display}
            h="100%"
            color="black"
            bg="#7b7b7b"
            p="1em"
        >
            <form >
            <FormLabel 
                fontWeight="bold"
                htmlFor="file"
                >
                Selceione uma imagem:
            </FormLabel>
            
                <Input
                type="file"  
                bg="#fff"
                border="1px solid black"
                padding=".2em"  
                accept=".jpg"
                onChange={(e)=> setImage(e.target.files[0])}
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
                    onClick={()=>handleAddNewImage(id, image)}
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