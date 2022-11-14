import { useState, useContext } from 'react'

import { FormLabel, Input, Flex, Button } from '@chakra-ui/react'
import Head from 'next/head'

import { AuthContext } from '../context/authContext'

import { api } from "../services/api"


export default function Home() {
  const [name, setName] = useState('')
  const [ password, setPassword ] = useState('')
  const { token, setToken } = useContext(AuthContext);


  const user = { 
    name: "davi", 
    password: "davi"
  }

  async function handleSubmitUser(){

       await api.post("/session", {user}).then( (res)=> setToken(res.data))
      .catch(err =>
          console.log('resp :>> ', err.response)
      )
        
        
        
      console.log('state :>> ', token);
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

        <form >
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
              bg="#000" 
              color="#fff"
              width="80%"
              mt="1em"
              ml="1em"
              _hover={{
                opacity: .8,
                cursor: "pointer"
              }}
              onClick={()=>handleSubmitUser()}
            > 
                Entrar
            </Button>
          </form>
      </Flex>
    </Flex>
  )
}

