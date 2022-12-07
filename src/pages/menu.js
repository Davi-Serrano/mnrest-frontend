import { useEffect } from "react";
import {useCategories } from "../context/useCategory"

import {api} from "../services/apiClient"

import { Flex, Text } from "@chakra-ui/react";

import { RowCategory } from "../components/RowCategory";
import { ColunmFoods } from "../components/ColumnFoods";


export default function Menu({categories, foods}){
    const { setCategories } = useCategories();

    useEffect(()=> setCategories(categories[0].id), []);
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
            <ColunmFoods  foods={foods}/>
          
        </Flex>
        </Flex>
    )
};

export const getServerSideProps = async ()=>{

    const { data: foods} = await api.get("/food");
    const { data: categories} = await api.get("/category");


    return{
      props:{
        categories,
        foods
      }
    }
  };