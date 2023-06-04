import React,{useState} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {getUserWeight,updateUserWeight}  from '../../actions/nutrition'
import {getProfileData,updateProfileData}  from '../../actions/auth'

const UpdateWeightForm = () =>{

    const dispatch = useDispatch()
    const [updatedWeight,setUpdatedWeight] = useState(0)
    const onWeightUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserWeight(updatedWeight))
        dispatch(getUserWeight())
    }

    return (
        <>
            <Card body>
                <Form onSubmit={onWeightUpdate}>
                    <Form.Group controlId="weight" >
                        <Form.Label><h5 className="text-center">Atualizar peso atual</h5></Form.Label>
                        <Form.Control 
                            as="input" 
                            placeholder="Salvar peso atual" 
                            value={updatedWeight}
                            onChange = {(e)=>setUpdatedWeight(e.target.value)}
                            />
                    </Form.Group>
                    <Button type="submit" variant="success" size="sm">Atualizar o peso</Button>
                </Form>
            </Card>
        </>
    )
}

export default UpdateWeightForm