import { useState } from 'react';
import { FormLabel, Input, Flex, Button, Select } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import { formatDiagnostic } from 'typescript';

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

        setDisplay("none")
        alert("Foto alterada com sucesso")
    }

    return (
        <Flex  
            position="absolute"
            display={ display === id ? "block" : "none" }
            h="40vh"
            color="black"
            bg="whitesmoke"
            p="1em"
        >
            <form >
            <FormLabel 
                fontWeight="bold"
                htmlFor="file"
                >
                Selecione uma imagem: 
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