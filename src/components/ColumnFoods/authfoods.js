import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AddNewImage } from "../AddNewImage";

export function ColunmFoodsAuth({foods}){
const[ display, setDisplay ] = useState("none")

    return(
        <Flex
            flexDir="column"
            justify="center"
            mt="9em"
        >
            {
            foods.map(food =>
                <Flex
                    key={food.id}
                    justify="start"
                    mt="1em"
                    px="1em"
                    bg="#fff"
                    color="black"
                    h="150px"
                    py=".5em"
                >
                    
                        <Image src="../coxinha.jpg" my=".8em" w="100px" h="100px" alt="Imagem Coxinha" />        
                    

                    <Flex
                        flexDir="column"
                        ml="1em"
                    >
                        <Text fontWeight="bold" fontSize="17px" >
                            {food.name}
                        </Text>
                        <Text 
                            maxW="90%" 
                            mt=".5em"
                            color="gray"
                        >
                            {food.description}
                        </Text>
                        <Text color="green" fontWeight="bold" mt="10%">
                            R${food.price}
                        </Text>
                    </Flex>
                    <Flex
                        flexDir="column"
                        
                    >

                    <Button 
                        bg="green" 
                        color="#fff"
                        mt="1em"
                        ml="1em"
                        _hover={{
                        opacity: .8,
                        cursor: "pointer"
                        }}
                        onClick={()=> display == "none" ? setDisplay("block") : setDisplay("none") }
                    > 
                        Alterar IMagem
                    </Button>

                    <Button 
                        bg="blue" 
                        color="#fff"
                        mt="1em"
                        ml="1em"
                        _hover={{
                        opacity: .8,
                        cursor: "pointer"
                        }}
                    > 
                        Editar Preço
                    </Button>

                    <Button 
                        bg="red" 
                        color="#fff"
                        mt="1em"
                        ml="1em"
                        _hover={{
                        opacity: .8,
                        cursor: "pointer"
                        }}
                    > 
                        Excluir
                    </Button>

                    </Flex>

                    <AddNewImage id={food.id} display={display} setDisplay={setDisplay} />
                </Flex>
                )
            }
        </Flex>
    )
}