import { FormLabel, Input, Flex, Button, Select } from '@chakra-ui/react'
import { api } from "../../services/apiClient"
import Head from 'next/head'
import { useState } from 'react'
import {BtnCreateNewFood} from "../../components/ButtonCreateNewFood"





export default function AddNewFood({categories}) {
  const [ name, setName] = useState('')
  const [ price, setPrice ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')

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
              name={name}
              price={price}
              category={category}
              description={description}
            />

          </form>

      </Flex>
    </Flex>
  )
}

export const getServerSideProps = async ()=>{

  const { data: categories} = await api.get("/category")

  return{
    props:{
      categories
    }
  }
}