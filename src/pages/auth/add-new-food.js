import { useState } from 'react'
import Head from 'next/head'

import { FormLabel, Input, Flex, useToast, Select } from '@chakra-ui/react'
import {BtnCreateNewFood} from "../../components/ButtonCreateNewFood"

import { withSSRGuest } from '../../utils/withSSRGuest'
import { setupApiClient } from "../../services/api"

import { api } from "../../services/apiClient";
import { useRouter } from 'next/router'

export default function AddNewFood({categories}) {
  const [ name, setName] = useState('')
  const [ price, setPrice ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')

  const toast = useToast()
  const router = useRouter()

  async function handleSubmitFoods(){
    await api.post("/food", {
         name,
         description,
         category_id: category,
         price
     }).then( ()=> {
         toast({
             title: 'Novo item adicionado com sucesso!',
             status: 'success',
             duration: 2000, // 2seconds
             isClosable: true,
             position: "top"
         });

        setTimeout(()=>router.reload(),  
             2000 /* 2seconds */)
     })
     .catch(err =>
         toast({
             title: 'Erro ao adicionar novo item!',
             description: err.response.data.message,
             status: 'error',
             duration: 3000, //4 seconds
             isClosable: true,
             position: "top"
         })
     )
 }


  return (
    <Flex>
      <Head>
        <title>Registro de nova comida </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Flex  
        align="center" 
        justify="center" 
        w="100vw"
        h="100vh"
        color="black"
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
            <FormLabel 
              fontWeight="bold"
            >
            Descrição:
             </FormLabel>
          
            <Input
              bg="#fff"
              border="1px solid black"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />

            <FormLabel 
              fontWeight="bold"
            >
            Categoria:
            </FormLabel>
          
            <Select 
              placeholder='Selecione uma categoria' 
              bg="#fff"
              onChange={(e)=>setCategory(e.target.value)}
            >
              {categories.map( categorie=>
                  <option 
                    key={categorie.name} 
                    value={categorie.id}
                  >
                            {categorie.name}
                  </option> 
              )
              
            }
            </Select>
              

            <FormLabel fontWeight="bold">
                Preço
            </FormLabel>
            <Input
              bg="#fff"
              value={price}
              
              onChange={(e)=>setPrice(e.target.value)}
              
            />

          
            <BtnCreateNewFood 
              handleSubmitFoods={handleSubmitFoods}
            />

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