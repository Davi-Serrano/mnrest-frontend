import { useEffect, useState} from "react"
import NextLink from "next/link"

import { Flex } from "@chakra-ui/react";

export function BtnBackToDashboard(){
    return(   
        <Flex 
            justify="center"
            align="center"
            color="#fff"
            _hover={{
            opacity: .8,
            cursor: "pointer"
            }}
        > 
          <NextLink href="/dashboard" passHref> Voltar  </NextLink>  
      </Flex>
    )
}