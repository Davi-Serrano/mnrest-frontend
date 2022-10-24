import { Flex, Text } from "@chakra-ui/react";

import {api} from "../services/api"

import { RowCategory } from "../components/RowCategory";
import { ColunmFoods } from "../components/ColumnFoods";

export default function Menu({categories}){
    return(
        <Flex
            flexDir="column"
        >
            <RowCategory categories={categories}/>

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

export const getServerSideProps = async ()=>{

    const foods = await api.get("/food")
    const { data: categories} = await api.get("/category")


    return{
      props:{
        categories
      }
    }
  }