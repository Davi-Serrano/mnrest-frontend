import { Flex, Text } from "@chakra-ui/react";


export function RowCategory({categories}){

    return (
        <Flex
            justify="center"
            bg="white"
            flexWrap="wrap"
            color="black"
            width="100%"
            fontWeight="500"
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