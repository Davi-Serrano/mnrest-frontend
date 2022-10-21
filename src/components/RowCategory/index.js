import { Flex, Text } from "@chakra-ui/react";


export function RowCategory(){
    return (
        <Flex
            justify="space=around"
            bg="white"
            color="black"
            width="100%"
        >
            <Flex
                px="1em"
            >
                Lanches
            </Flex >
            <Flex
                px="1em"    
            >
                Pizzas
            </Flex>
            <Flex
                px="1em"
            >
                Salgados
            </Flex>
            <Flex
                px="1em"
            >
                Bebidas
            </Flex>

        </Flex>
    );
}