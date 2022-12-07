import { Flex, Button, Text } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"



export default function DeleteCategory({categories}) {

  async function handleSubmitDeleteCategory(category_id){
    const resp = await api.delete("/category", {data: {category_id}}).then( (res)=> console.log('deu certo :>>', res)
    )
     .catch(err =>
         console.log('resp :>> ', err.response)
     )

     console.log('resp :>> ', resp);

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
  const api = setupApiClient(ctx)

  const { data: categories} = await api.get("/category")

  return{
    props:{
      categories,
    }
  }
})