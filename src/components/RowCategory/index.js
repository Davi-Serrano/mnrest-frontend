import { Flex, Text } from "@chakra-ui/react";
import { useCategories } from "../../context/useCategory";



export function RowCategory({categories}){
    const { setCategories } = useCategories()

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
                        onClick={()=> setCategories(categorie.id)}
                    >
                        {categorie.name} 
                    </Flex >
                )
            }

        </Flex>
    );
}