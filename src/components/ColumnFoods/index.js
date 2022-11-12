import { Flex, Text, Image } from "@chakra-ui/react";

export function ColunmFoods({foods}){
    return(
        <Flex
            flexDir="column"
            justify="center"
            mt="1em"
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
                    h="130px"
                >
                    
                        <Image src="./coxinha.jpg" my=".8em" w="100px" h="100px" alt="Imagem Coxinha" />        
                    

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

                </Flex>
                )
            }
        </Flex>
    )
}