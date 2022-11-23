import { useState, useContext } from 'react'

import { FormLabel, Input, Flex, Button } from '@chakra-ui/react'
import Head from 'next/head'

import { AuthContext } from '../context/authContext'



export default function Home() {
  const [name, setName] = useState('')
  const [ password, setPassword ] = useState('')
  const { singIn} = useContext(AuthContext);


  const user = { 
    name: "davi", 
    password: "davi"
  }

  async function handleSubmit(event){
    event.preventDefault();
    
      const user = {
        name,
        password
      }
      await singIn(user)
  }

  return (

    <Flex>
      <Head>
        <title>Cardápio</title>
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

        <form  onSubmit={handleSubmit} >
          <FormLabel 
              fontWeight="bold"
          >
            E-mail
          </FormLabel>
          
            <Input
              bg="#fff"
              border="1px solid black"
              value={name}
              type="text"
              placeholder="nome@email.com"
              onChange={(e)=>setName(e.target.value)}
              _placeholder={{
                opacity: .4
              }}
            />

          <FormLabel fontWeight="bold">
            Senha
          </FormLabel>
            <Input
              bg="#fff"
              value={password}
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              _placeholder={{
                opacity: .4
              }}
            />
            
            <Button
              type='submit' 
              bg="#000" 
              color="#fff"
              width="80%"
              mt="1em"
              ml="1em"
              _hover={{
                opacity: .8,
                cursor: "pointer"
              }}              
            > 
                Entrar
            </Button>
          </form>
      </Flex>
    </Flex>
  )
}

