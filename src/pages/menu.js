import { Flex, Text } from "@chakra-ui/react";

import {api} from "../services/api"

import { RowCategory } from "../components/RowCategory";
import { ColunmFoods } from "../components/ColumnFoods";

export default function Menu({categories, foods}){
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
            <ColunmFoods  foods={foods} categories={categories} />
          
        </Flex>
        </Flex>
    )
}

export const getServerSideProps = async ()=>{

    const { data: foods} = await api.get("/food")
    const { data: categories} = await api.get("/category")

console.log('foods :>> ', foods);
    return{
      props:{
        categories,
        foods
      }
    }
  }