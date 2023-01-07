import { Flex, Button, Text, useToast } from "@chakra-ui/react";
import { api } from "../../services/apiClient";


export function ConfirmDeleteFoods({display, id, setDisplay}){
    const toast = useToast()

    async function handleDeleteFoods(){
        await api.delete("/food", {data: {food_id: id}})
            .then(()=> 
                toast({
                    title: "Item deletado com sucesso!",
                    status: "success",
                    position: "top",
                    duration: 2000, // 2seconds
                    isClosable: true,
                }),
                setTimeout(location.reload(), 2000) // 2seconds
              
            ).catch((err)=>
                toast({
                    title: 'Erro ao exclui o item!',
                    description: err.response.data.message,
                    status: 'error',
                    duration: 3000, //3 seconds
                    isClosable: true,
                    position: "top"
                })
            )

            setTimeout(()=> location.reload(), 3000)//2seconds
        }

    return (
        <Flex  
            position="absolute"
            flexDir="column"
            display={ display === id ? "block" : "none" }
            h="10vh"
            color="black"
            bg="whitesmoke"
            p="1em"   
            zIndex={9}    
        >

            <Text>Tem certeza que edseja excluir esse item?</Text>
        
                <Flex>

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
                    onClick={()=>{handleDeleteFoods()}}
                    > 
                    Sim
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
                    Não
                </Button>
                </Flex>
        </Flex>
    )
}