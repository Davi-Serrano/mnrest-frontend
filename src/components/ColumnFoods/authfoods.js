import { useState } from "react";
import { useCategories } from "../../context/useCategory";

import { Flex, Text, Image, Button, useToast } from "@chakra-ui/react";
import { api } from "../../services/apiClient"

import { AddNewImage } from "../AddNewImage";
import { BtnDeleteFood } from "../ButtonDeleteFood"
import { EditPrice } from "../EditPrice";

export function ColunmFoodsAuth({foods}){
const[ displayImage, setDisplayImage ] = useState("none")
const[ displayPrice, setDisplayPrice ] = useState("none")

const { categories } = useCategories()

const toast = useToast()

    const filtredFoods = foods.filter(food =>
        food.category_id == categories
    ); 

    async function handleEditPrice(id, price){    
        await api.patch("/food/price", {"id": id, "newPrice": price })
        .then(()=>
            toast({
            title: 'Preço alterado com sucesso!',
            status: 'success',
            duration: 2000, // 2seconds
            isClosable: true,
            position: "top"
            }),

            setTimeout(()=> location.reload(),  
                2000)//2 seconds
        ).catch(err =>
            toast({
                title: 'Erro ao editar preço!',
                description: err.response.data.message,
                status: 'error',
                duration: 3000, //4 seconds
                isClosable: true,
                position: "top"
            })
        )
    }

    return(
        <Flex
            flexDir="column"
            justify="center"
            mt="1em"
            w="80%"
        >
            {
            filtredFoods.map(food =>
                <Flex
                    flexWrap="wrap"
                    key={food.id}
                    justify="space-around"
                    mt="1em"
                    px="1em"
                    bg="#fff"
                    color="black"
                    py=".5em"
                >
                    <Image src="../coxinha.jpg" my=".8em" w="100px" h="100px" alt="Imagem Coxinha" />              

                    <Flex
                        flexDir="column"
                        ml="1em"
                        w="40%"
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

                    <Flex flexDir="column" >
                            <Button 
                                bg="green" 
                                color="#fff"
                                mt="1em"
                                ml="1em"
                                _hover={{
                                opacity: .8,
                                cursor: "pointer"
                                }}
                                onClick={()=> setDisplayImage(food.id)}
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
                                onClick={()=> setDisplayPrice(food.id)}
                            > 
                                Editar Preço
                            </Button>

                            <BtnDeleteFood food_id={food.id}/>
                    </Flex>

                    <AddNewImage id={food.id} display={displayImage} setDisplay={setDisplayImage} />
                    <EditPrice id={food.id} display={displayPrice} setDisplay={setDisplayPrice} handleEditPrice={handleEditPrice} />
                </Flex>
                )
            }
        </Flex>
    )
}