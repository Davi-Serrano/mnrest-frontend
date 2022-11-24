import {useCategories } from "../../context/useCategory"

import { Flex, Text } from "@chakra-ui/react";

import {api} from "../../services/apiClient"

import { RowCategory } from "../../components/RowCategory";
import { ColunmFoodsAuth } from "../../components/ColumnFoods/authfoods";
import { useEffect } from "react";

import {BtnBackToDashboard} from "../../components/ButtonBackToDashboard"


export default function Menu({categories, foods}){

    const { setCategories } = useCategories()

    
    useEffect(()=> setCategories(categories[0].id), [])
    
    return(
        <Flex
            flexDir="column"
        >
            <BtnBackToDashboard />
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