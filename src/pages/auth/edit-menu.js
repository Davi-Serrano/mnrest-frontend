import {useCategories } from "../../context/useCategory"

import { Flex, Text } from "@chakra-ui/react";

import {api} from "../../services/api"

import { RowCategory } from "../../components/RowCategory";
import { ColunmFoodsAuth } from "../../components/ColumnFoods/authfoods";
import { useEffect } from "react";

export default function Menu({categories, foods}){

    const { categories: dataCategory, setCategories} = useCategories()

    
    useEffect(()=> setCategories(categories), [])
    
    return(
        <Flex
            flexDir="column"
        >
            <RowCategory categories={dataCategory}/>

        <Flex
            flexWrap="wrap"
            justify="space-around"
            w="100%"
        >
            <ColunmFoodsAuth  foods={foods} categories={dataCategory} />
          
        </Flex>
        </Flex>
    )
}

export const getServerSideProps = async ()=>{

    const { data: foods} = await api.get("/food")
    const { data: categories} = await api.get("/category")


    return{
      props:{
        categories,
        foods
      }
    }
  }