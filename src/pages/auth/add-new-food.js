import { FormLabel, Input, Flex, Button } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'


export default function Home() {
  const [ name, setName] = useState('')
  const [ price, setPrice ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ description, setDescription ] = useState('')

  

  return (
    <Flex>
      <Head>
        <title>Regasitro Cardápio</title>
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
          
            <Input
              bg="#fff"
              border="1px solid black"
              value={category}
              
              
              onChange={(e)=>setCategory(e.target.value)}
              
            />

            <FormLabel fontWeight="bold">
                Preço
            </FormLabel>
            <Input
              bg="#fff"
              value={price}
              
              onChange={(e)=>setPrice(e.target.value)}
              
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
            > 
                Imagem
            </Button>
            
            <Button 
              
              display="none"
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
                Enviar
            </Button>

          </form>
      </Flex>
    </Flex>
  )
}
