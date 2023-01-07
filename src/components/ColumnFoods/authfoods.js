import { useState } from "react";
import { useCategories } from "../../context/useCategory";

import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { AddNewImage } from "../AddNewImage";
import { BtnDeleteFood } from "../ButtonDeleteFood"
import { EditPrice } from "../EditPrice";

export function ColunmFoodsAuth({foods}){
const[ displayImage, setDisplayImage ] = useState("none")
const[ displayPrice, setDisplayPrice ] = useState("none")

const { categories } = useCategories()

    const filtredFoods = foods.filter(food =>
        food.category_id == categories
    ); 


    return(
        <Flex
            flexDir="column"
            justify="center"
            mt="1em"
            w="95%"
            maxW="400px"
        >
            {
            filtredFoods.map(food =>
                <Flex
                    flexWrap="wrap"
                    key={food.id}
                    justify="start"
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
                    <EditPrice id={food.id} display={displayPrice} setDisplay={setDisplayPrice} />
                </Flex>
                )
            }
        </Flex>
    )
}