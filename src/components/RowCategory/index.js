import { Flex, Text } from "@chakra-ui/react";
import { usefoods } from "../../context/useFoods";


export function RowCategory({categories}){
    const {  foods, setFoods }  = usefoods();


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
                        onClick={()=> alert(categorie.id)}
                    >
                        {categorie.name} 
                    </Flex >
                 )
            }

        </Flex>
    );
}