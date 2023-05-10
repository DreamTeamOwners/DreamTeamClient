import { NavLink } from "react-router-dom"
import { Button, Box, Grid, GridItem } from "@chakra-ui/react"




const Header = () => {
    const links = [
        { title: 'О нас', to: '/about' },
        { title: 'Компании', to: '/' },
        { title: 'Вакансии', to: '/' },
        { title: 'Присоединиться к команде', to: '/' },
        { title: 'Создать команду', to: '/' }]
    const components = links.map((link) => {
        return (
            <Button as={NavLink} fontSize={'sm'} fontWeight={400} color="#011528" variant={'ghost'} to={link.to}>
                {link.title}
            </Button>
        )
    })
    return (
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
                        as={NavLink}
                        fontSize={'m'}
                        fontWeight={400}
                        color="white"
                        variant={'ghost'}
                        href={'#'}
                        _hover={{ bg: '#011528' }}
                        to="/"
                    >
                        DreamTeam
                    </Button>
                </Box>
            </GridItem>
            <GridItem colSpan='2' mt={3} p={2}>
                <Box display='flex' justifyContent={'space-between'} bg='white' borderRadius='50px' px='20px' py={2} color='#011528' >
                    {components}
                </Box>
            </GridItem>
            <GridItem mt={3} p={4} >
                <Box display='flex' justifyContent='center'>
                    <Button
                        as={NavLink}
                        mx={4}
                        fontSize={'sm'}
                        fontWeight={400}
                        color="white"
                        variant={'ghost'}
                        href={'#'}
                        _hover={{ bg: 'SteelBlue' }}
                        _active={{ bg: '#3f739e' }}
                        to="/login"
                    >
                        Sign in
                    </Button>
                    <Button
                        as={NavLink}
                        mx={4}
                        fontSize={'sm'}
                        fontWeight={400}
                        color="white"
                        variant={'outline'}
                        href={'#'}
                        _hover={{ bg: 'SteelBlue' }}
                        _active={{
                            bg: '#3f739e',
                            transform: 'scale(0.98)',
                        }}
                        to="/signup"
                    >
                        Sign Up
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Header