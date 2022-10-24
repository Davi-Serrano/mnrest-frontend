import { Flex, Text } from "@chakra-ui/react";


export function RowCategory({categories}){

    return (
        <Flex
            justify="space=around"
            bg="white"
            color="black"
            width="100%"
        >
            {
                categories.map( categorie => 
                    <Flex
                        key={categorie.id}
                        px="1em"
                    >
                        {categorie.name}
                    </Flex >
                 )
            }

        </Flex>
    );
}