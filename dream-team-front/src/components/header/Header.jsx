import { NavLink } from "react-router-dom"
import { Button, Box, Grid, GridItem } from "@chakra-ui/react"




const Header = () => {
    const links = ['О нас','Компании','Вакансии','Присоединиться к команде','Создать команду']
    const components = links.map((link)=>{
        return(
            <Button as={'a'} fontSize={'sm'} fontWeight={400} color="#011528" variant={'link'} href={'#'}>
                <NavLink to="/">{link}</NavLink>
            </Button>
        )
    })
    return(
        <Grid
            h='100px'
            templateColumns='repeat(4,1fr)'
            gap='10px'
            bg='#011528'
            fontFamily='Roboto'
        >
            <GridItem mt='25px' p='20px'>
                <Box display='flex' justifyContent='center'>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} color="white" variant={'link'} href={'#'}>
                        <NavLink to="/">DreamTeam</NavLink>
                    </Button>
                </Box>
            </GridItem>
            <GridItem colSpan='2'  mt='25px'>
                <Box display='flex' justifyContent={'space-between'} bg='white' borderRadius='50px' p='20px'  color='#011528' > 
                    {components}
                </Box>
            </GridItem>
            <GridItem  mt='25px' p='20px'>
                <Box display='flex' justifyContent='center'>
                    <Button as={'a'} mx={4} fontSize={'sm'} fontWeight={400} color="white" variant={'link'} href={'#'}>
                        <NavLink to="/auth/login">Login</NavLink>
                    </Button>
                    <Button as={'a'} mx={4} fontSize={'sm'} fontWeight={400} color="white" variant={'link'} href={'#'}>
                        <NavLink to="/">Sign Up</NavLink>
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Header