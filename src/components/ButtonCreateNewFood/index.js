import { Button, useToast } from "@chakra-ui/react";
import { api } from "../../services/apiClient";
import { useRouter } from 'next/router'





export function BtnCreateNewFood({name, price, category, description}){
    const toast = useToast()
    const router = useRouter()



    const handleSubmitFoods = async()=>{
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

    return(   
        <Button 
            id="btn"
            bg="#0000cd" 
            color="#fff"
            width="80%"
            mt="1em"
            ml="1em"
            onClick={handleSubmitFoods}
            _hover={{
            opacity: .8,
            cursor: "pointer"
            }}
        > 
          Enviar
      </Button>
    )
}