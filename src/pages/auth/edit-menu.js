import { useEffect } from "react";
import {useCategories } from "../../context/useCategory"

import { Flex, Text } from "@chakra-ui/react";

import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"

import { RowCategory } from "../../components/RowCategory";
import { ColunmFoodsAuth } from "../../components/ColumnFoods/authfoods";



export default function Menu({categories, foods}){

    const { setCategories } = useCategories()

    
    useEffect(()=> setCategories(categories[0].id), [])
    
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
            <ColunmFoodsAuth  foods={foods} categories={categories} />
          
        </Flex>
        </Flex>
    )
}

export const getServerSideProps = withSSRGuest(async(ctx)=>{
    const api = setupApiClient(ctx)

    const { data: foods} = await api.get("/food")
    const { data: categories} = await api.get("/category")

    return{
      props:{
        categories,
        foods
      }
    }
  })