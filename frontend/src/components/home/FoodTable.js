import React,{useState} from 'react'
import CreateFoodForm from '../forms/CreateFoodForm'
import {Table} from 'react-bootstrap'
import FoodRow from './FoodRow'


const FoodTable = (props) => {

    const renderFoodList = (foodList) => {
        return foodList.map(food =>{
            return (
                <>
                    <FoodRow
                        food={food}
                        onClickTrash={props.onClickTrash}
                    />
                </>
            )
        })
    }

    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Calorias</th>
                        <th>Gorduras</th>
                        <th>Proteinas</th>
                        <th>Carboidratos</th>
                        <th></th>
                    </tr>

                </thead>

                <tbody>
                    <CreateFoodForm category={props.category}/>
                    {renderFoodList(props.foodList)}
                </tbody>

            </Table>


        </>
    )
}

export default FoodTable