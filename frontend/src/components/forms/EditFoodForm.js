import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {editFood} from '../../actions/nutrition'
import {Form,Button} from 'react-bootstrap'

const EditFoodForm = (props) => {
    const dispatch = useDispatch()

    const [formData,setFormData] = useState({
        name:props.food.name,
        total_calories:props.food.total_calories,
        fat:props.food.fat,
        protein:props.food.protein,
        carbs:props.food.carbs,
        category:props.food.category,
        }      
    )

    const original = {
        total_calories:props.food.total_calories,
        fat:props.food.fat,
        protein:props.food.protein,
        carbs:props.food.carbs,
        id:props.food.id
    }

    

    const submitFood = (e) => {
        e.preventDefault()
        dispatch(editFood(formData,original))
        props.onClickCancel()
    }

    const updateFoodInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    return (
        <tr>
        
            <td>
                <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Alimento" onChange={(e) => updateFoodInput(e)}/> 
            </td>

            <td>
                <Form.Control id="total_calories" size="sm" type="totalCalories" value={formData.total_calories} placeholder="Cals" onChange={(e) => updateFoodInput(e)}/> 
            </td>

            <td>    
                <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Gord (g)" onChange={(e) => updateFoodInput(e)}/>
            </td>

            <td>
                <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Prot (g)" onChange={(e) => updateFoodInput(e)}/>
            </td>

            <td>
                <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Carb (g)" onChange={(e) => updateFoodInput(e)}/>
            </td>

            <td>
                <Button variant="success" type="submit" size="sm" onClick={submitFood}>
                    Editar
                </Button>

                <Button variant="danger" size="sm" onClick={()=>props.onClickCancel(original)}>
                    Cancelar
                </Button>    
            </td>
        </tr>


    )
}

export default EditFoodForm