import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadBreakfastList,deleteFood,getCalories} from '../actions/nutrition'
import {Table,Form,Button} from 'react-bootstrap'
import CreateFoodForm from './forms/CreateFoodForm'

import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Breakfast = (props) => {
    var breakfastList = useSelector(state => state.nutrition.breakfast)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadBreakfastList())
    },[])
    
    const updateFood = (food) => {
        dispatch(deleteFood(food))
    }

    const renderBreakfastList = (breakfastList) => {
        return breakfastList.map(breakfast =>{
            return (
                <tr key={breakfast.id}>
                    <td>{breakfast.name}</td>
                    <td>{breakfast.total_calories}</td>
                    <td>{breakfast.carbs}</td>
                    <td>{breakfast.fat}</td>
                    <td>{breakfast.protein}</td>
                    <td>
                        <button onClick={()=>updateFood(breakfast)} style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faTrash} /></button>
                        <button style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faEdit}/></button>
                    </td>
                </tr>
            )
        })
    }
}


export default Breakfast