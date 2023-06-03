import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {register} from '../../actions/auth'
import {Redirect} from 'react-router-dom'
import {Form,Col,Row,Button,Card} from 'react-bootstrap'


const Register = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [password2,setPassword2] = useState("")
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const createUser = e => {
        e.preventDefault()
        if(password && password2 && password===password2){
            dispatch(register(username,password))
        } else {
            alert("Passwords do not match")
        }
        setPassword("")
        setPassword2("")
        setUsername("")

    }
    const renderForm = () => {
        return (
            <Card style={{width:'40rem'}}>
                <Card.Body>
                    <Form onSubmit={createUser}>
                        <Form.Group as={Row} controlId="username">
                            <Form.Label column sm={2}>
                                Usuário
                            </Form.Label>
                            <Col sm={10} xs={10}>
                                <Form.Control
                                    type="username"
                                    placeholder ="Insira o usuário"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="password1">
                            <Form.Label column sm={2}>
                            Senha
                            </Form.Label>
                            <Col sm={10} xs={10}>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="password2">
                            <Form.Label column sm={2}>
                            Confirme a senha
                            </Form.Label>
                            <Col sm={10} xs={10}>
                            <Form.Control type="password" placeholder="Confirme a senha"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Crie sua conta
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

    return (<> {auth.isAuthenticated ? <Redirect to="/" /> :renderForm()}</>

    )
}

export default Register