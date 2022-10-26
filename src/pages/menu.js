import {useCategories } from "../context/useCategory"

import { Flex, Text } from "@chakra-ui/react";

import {api} from "../services/api"

import { RowCategory } from "../components/RowCategory";
import { ColunmFoods } from "../components/ColumnFoods";
import { useEffect } from "react";

export default function Menu({categories, foods}){

    const { categories: data, setCategories} = useCategories()

    
    useEffect(()=> setCategories(categories), [])
    console.log('data :>> ', data);
    
    return(
        <Flex
            flexDir="column"
        >
            <RowCategory categories={data}/>

        <Flex
            flexWrap="wrap"
            justify="space-around"
            w="100%"
        >
            <ColunmFoods  foods={foods} categories={data} />
          
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