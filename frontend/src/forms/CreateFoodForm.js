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

}

export default CreateFoodForm