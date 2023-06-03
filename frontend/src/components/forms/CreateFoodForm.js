import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addFood} from '../../actions/nutrition'
import {Form,Col,Row,Button} from 'react-bootstrap'

const CreateFoodForm = (props) => {
    
    const [formData,setFormData] = useState({
        name:"",
        total_calories:"",
        fat:"",
        protein:"",
        carbs:"",
        category:props.category
    })

    const dispatch = useDispatch()

    const submitFood = (e) => {
        e.preventDefault()
        dispatch(addFood(formData))

        setFormData({
            name:"",
            total_calories:"",
            fat:"",
            protein:"",
            carbs:"",
            category:props.category
        })
    }

    const updateFoodInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    return (
            <tr> 
                <td style={{ width: '30%' }}>
                    <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Alimento" onChange={(e) => updateFoodInput(e)}/>
                </td>
                <td style={{ width: '10%' }}>
                    <Form.Control id="total_calories" size="sm" type="totalCalories" value={formData.total_calories} placeholder="Cals" onChange={(e) => updateFoodInput(e)}/>
                </td>
                <td style={{ width: '10%' }}>
                    <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Gord (g)" onChange={(e) => updateFoodInput(e)}/>
                </td>
                <td style={{ width: '10%' }}>
                    <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Prot (g)" onChange={(e) => updateFoodInput(e)}/>
                </td>
                <td style={{ width: '10%' }}>
                    <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Carb (g)" onChange={(e) => updateFoodInput(e)}/>
                </td>
                <td style={{ width: '10%', maxWidth: '6rem' }}>
                    <Button style={{ width: '5rem' }} variant="success" type="submit" size="sm" onClick={submitFood}>
                        Adicionar 
                    </Button>
                </td>
            </tr>

    )
}

export default CreateFoodForm