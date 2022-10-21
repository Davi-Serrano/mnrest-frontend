import { Flex, Text, Image } from "@chakra-ui/react";

export function ColunmFoods(){
    return(
        <Flex
            flexDir="column"
            mt="1em"
            justify="center"
        >
            <Flex
                flexWrap="wrap"
                justify="space-between"
                px="1em"
                bg="#fff"
                color="black"
            >
                <Flex align="center" >
                    <Image src="./coxinha.jpg" w="100px" h="100px" alt="Imagem Coxinha" />        
                </Flex>

                <Flex
                    flexDir="column"
                >
                    <Text fontWeight="bold" fontSize="17px" >
                        Coxinha
                    </Text>
                    <Text 
                        maxW="90%" 
                        mt=".5em"
                        color="gray"
                    >
                        Coxinha de Frango com catupiry
                    </Text>
                    <Text color="green" fontWeight="bold" mt="10%">
                        R$6,00
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}