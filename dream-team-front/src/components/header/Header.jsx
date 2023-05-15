import { NavLink } from "react-router-dom"
import { Button, Box, Grid, GridItem } from "@chakra-ui/react"
import { actions, loginAsync } from "../../store/auth/auth.slice";
import { useSelector, useDispatch } from "react-redux";
import SignButtons from "./SignButtons";
import UserButton from "./UserButton";




const Header = () => {

  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(actions.logout());
  };

    const links = [
        { title: 'О нас', to: '/about' },
        { title: 'Компании', to: '/' },
        { title: 'Вакансии', to: '/' },
        { title: 'Присоединиться к команде', to: '/' },
        { title: 'Создать команду', to: '/' }]
    let count = 0
    const components = links.map((link) => {
        return (
            <Button key={++count} as={NavLink} fontSize={'sm'} fontWeight={400} color="#011528" variant={'ghost'} to={link.to}>
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
                {/* <button onClick={handleLogin}>Login</button> */}
                {isAuth ? <UserButton user={user} logout={handleLogout}/> : <SignButtons/>}                
            </GridItem>
        </Grid>
    )
}

export default Header