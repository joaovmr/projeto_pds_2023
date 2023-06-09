import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {logout} from '../actions/auth'
const NavBar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <>
        <Navbar variant="light" style={{backgroundColor:"rgba(123, 239, 178, 1)"}}>
            {
            auth.isAuthenticated ?
            <>
                <Navbar.Brand href="/">Bem vindo {auth.user.username}</Navbar.Brand>
                <Nav.Link href="/" onClick={() => dispatch(logout())}>Logout</Nav.Link> 
            </> :
            <>
                <Navbar.Brand href="/">Bem vindo</Navbar.Brand>
                <Nav.Link className="text-dark" href="/register">Cadastrar</Nav.Link>
                <Nav.Link className="text-dark" href="/login">Login </Nav.Link>
            </>
            }
            
            
        </Navbar>
      </>
    )
}

export default NavBar