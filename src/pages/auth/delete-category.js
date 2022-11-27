import { Flex, Button, Text } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"



export default function DeleteCategory({categories}) {

  console.log('api.headers :>> ', api);

  async function handleSubmitDeleteCategory(category_id){

    alert(category_id)
    const resp = await api.delete("/category", {
        category_id
     }).then( ()=> {})
     .catch(err =>
         console.log('resp :>> ', err.response)
     )

 }


  return (
    <Flex justify="center" mt="2em">
      <Head>
        <title>Excluir categoria </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex  
        flexDir="column"
        align="center" 
        justify="center"         
        color="black"
      >
        {
          categories.map(categorie=> 
           <Flex
            key={categorie.id}
            border="1px solid white "
            borderRadius="5"
            my="0.5em"
            px="1em"
           >

              <Text
                my="1em"
                w="100px"
                fontWeight="bold"
                color="#fff"
              >
                {categorie.name} 
              </Text> 
              
              <Button 
                    bg="red" 
                    color="#fff"
                    my="1em"
                    onClick={()=>handleSubmitDeleteCategory(categorie.id)}
                    _hover={{
                    opacity: .8,
                    cursor: "pointer"
                    }}
                > 
                    Excluir
                </Button>
          </Flex>
            )
        }
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async(ctx)=>{
  const apiClient= setupApiClient(ctx)

  const { data: categories} = await apiClient.get("/category")

  return{
    props:{
      categories,
    }
  }
})