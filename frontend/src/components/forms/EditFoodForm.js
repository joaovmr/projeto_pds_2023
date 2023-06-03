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

}

export default EditFoodForm