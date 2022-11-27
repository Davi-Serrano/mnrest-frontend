import { FormLabel, Input, Flex, Button } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"



export default function AddNewFood({categories}) {
  const [ name, setName] = useState('')

  async function handleSubmitCategory(){

    const categoriesExisits = categories.find( categorie => categorie.name === name);

    if(categoriesExisits){
        alert("Categoria já existe, cadastre com outro nome!")
        return
    }

    const resp = await api.post("/category", {
         name,
     }).then( ()=> {})
     .catch(err =>
         console.log('resp :>> ', err.response)
     )

 }

  return (
    <Flex>
      <Head>
        <title>Registro de nova categoria </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex  
        align="center" 
        justify="center" 
        w="100vw"
        h="100vh"
        color="black"
        bg="#7b7b7b"
      >

        <form >
          <FormLabel 
              fontWeight="bold"
          >
            Nome:
          </FormLabel>
          
            <Input
              bg="#fff"
              border="1px solid black"
              value={name}
              
              
              onChange={(e)=>setName(e.target.value)}
              
            />

            <Button 
                bg="#000" 
                color="#fff"
                width="80%"
                mt="1em"
                ml="1em"
                onClick={handleSubmitCategory}
                _hover={{
                opacity: .8,
                cursor: "pointer"
                }}
            > 
                Enviar
            </Button>
          

          </form>
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRGuest(async(ctx)=>{
  const api = setupApiClient(ctx)

  const { data: categories} = await api.get("/category")

  return{
    props:{
      categories
    }
  }
})