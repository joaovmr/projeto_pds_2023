import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadCheatList,deleteFood,getCalories} from '../actions/nutrition'
import {Table} from 'react-bootstrap'
import CreateFoodForm from './forms/CreateFoodForm'

import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Cheat = (props) => {
    const cheatList = useSelector(state => state.nutrition.cheat)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadCheatList())
    },[])
    
    const updateFood = (food) => {
        dispatch(deleteFood(food))
    }
    
    const renderCheatList = (cheatList) => {
        return cheatList.map(cheat =>{
            return (
                <tr key={cheat.id}>
                    <td>{cheat.name}</td>
                    <td>{cheat.total_calories}</td>
                    <td>{cheat.carbs}</td>
                    <td>{cheat.fat}</td>
                    <td>{cheat.protein}</td>
                    <td>
                        <button onClick={()=>updateFood(cheat)} style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faTrash} /></button>
                        <button style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faEdit}/></button>
                    </td>
                </tr>
            )
        })
    }
}


export default Cheat

