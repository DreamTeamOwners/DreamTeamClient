import { NavLink } from "react-router-dom"
import { Button, Box, Grid, GridItem } from "@chakra-ui/react"




const Header = () => {
    const links = ['О нас','Компании','Вакансии','Присоединиться к команде','Создать команду']
    const components = links.map((link)=>{
        return(
            <Button as={'a'} fontSize={'sm'} fontWeight={400} color="#011528" variant={'ghost'} href={'#'}>
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
            <GridItem mt={3} p={4} >
                <Box display='flex' justifyContent='center'>
                    <Button 
                        as={'a'} 
                        fontSize={'m'} 
                        fontWeight={400} 
                        color="white" 
                        variant={'ghost'} 
                        href={'#'}
                        _hover={{ bg: '#011528' }}
                        >
                        <NavLink to="/">DreamTeam</NavLink>
                    </Button>
                </Box>
            </GridItem>
            <GridItem colSpan='2'  mt={3} p={2}>
                <Box display='flex' justifyContent={'space-between'} bg='white' borderRadius='50px' px='20px' py={2} color='#011528' > 
                    {components}
                </Box>
            </GridItem>
            <GridItem  mt={3} p={4} >
                <Box  display='flex' justifyContent='center'>
                    <Button 
                    mx={4} 
                    fontSize={'sm'} 
                    fontWeight={400} 
                    color="white" 
                    variant={'ghost'} 
                    href={'#'}
                    _hover={{ bg: 'SteelBlue' }}
                    _active={{bg: '#3f739e'}}
                    >
                        <NavLink to="/login">Sign in</NavLink>
                    </Button>
                    <Button  
                    mx={4} 
                    fontSize={'sm'} 
                    fontWeight={400} 
                    color="white" 
                    variant={'outline'} 
                    href={'#'} 
                    _hover={{ bg: 'SteelBlue' }}
                    _active={{bg: '#3f739e',
                    transform: 'scale(0.98)',}}
                    >
                        <NavLink to="/signup">Sign Up</NavLink>
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Header