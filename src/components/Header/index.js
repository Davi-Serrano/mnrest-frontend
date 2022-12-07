import { useContext } from "react";
import { AuthContext } from "../../context/authContext"
import { Flex,Text} from "@chakra-ui/react";
import { BtnBackToDashboard } from "../ButtonBacktoDashboard";


export function Header() {
    const { isAuthenticated } =  useContext(AuthContext)
    return (
        <Flex
          justify="space-between"
          align="center"
          minW="100%"
          px={["1em", "10em"]}
          py="1em"
          bg="#032233"
        >
            <Text as="h1">Restaurante</Text>     

            { isAuthenticated ? <BtnBackToDashboard /> : null}          
        </Flex> 
    )
}