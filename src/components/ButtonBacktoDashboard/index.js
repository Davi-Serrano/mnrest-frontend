import { Flex } from "@chakra-ui/react";
import NextLink from "next/link"

export function BtnBackToDashboard(){
    return(   
        <Flex 
            position="absolute"
            top="10%"
            left="5%"
            justify="center"
            align="center"
            bg="#000" 
            color="#fff"
            width="200px"
            h="80px"
            ml="1em"
            _hover={{
            opacity: .8,
            cursor: "pointer"
            }}
        > 
          <NextLink href="/dashboard" passHref> Voltar  </NextLink>  
      </Flex>
    )
}