import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadSnackList,deleteFood,getCalories} from '../actions/nutrition'
import {Table} from 'react-bootstrap'
import CreateFoodForm from './forms/CreateFoodForm'

import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Snacks = (props) => {
    const snacks = useSelector(state => state.nutrition.snacks)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadSnackList())
    },[])

    const updateFood = (food) => {
        dispatch(deleteFood(food))
    }
    
    const renderSnackList = (snacks) => {
        return snacks.map(snack =>{
            return (
                <tr key={snack.id}>
                    <td>{snack.name}</td>
                    <td>{snack.total_calories}</td>
                    <td>{snack.carbs}</td>
                    <td>{snack.fat}</td>
                    <td>{snack.protein}</td>
                    <td>
                        <button onClick={()=>updateFood(snack)} style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faTrash} /></button>
                        <button style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faEdit}/></button>
                    </td>
                </tr>
            )
        })
    }
}


export default Snacks