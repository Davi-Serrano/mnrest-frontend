import { Flex, Text } from "@chakra-ui/react";
import { RowCategory } from "../components/RowCategory";
import { ColunmFoods } from "../components/ColumnFoods";

export default function Menu(){
    return(
        <Flex
            flexDir="column"
        >
            <RowCategory />

        <Flex
            flexWrap="wrap"
            justify="space-around"
            w="100%"
        >
            <ColunmFoods />
            <ColunmFoods />
            <ColunmFoods />
            <ColunmFoods />
        </Flex>
        </Flex>
    )
}