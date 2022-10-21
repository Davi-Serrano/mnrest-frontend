import { Flex,Text} from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
          justify="space-between"
          align="center"
          px={["1em", "10em"]}
          py="1em"
          bg="#032233"
        >
            <Text as="h1">Restaurante</Text>               
        </Flex> 
    )
}