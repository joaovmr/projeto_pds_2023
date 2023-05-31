import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap'
import {Line} from 'react-chartjs-2';


function convertToDataSet(arr){
    var xLabel;
    var yLabel;
    xLabel = arr.map(p => p.date_eaten)
    yLabel = arr.map(p => p.totalCalories)
    const dataSet = {
        labels: xLabel,
        datasets: [
            {
            label: 'Total de calorias',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: yLabel
            }
        ]
    }
    return dataSet
}

function convertToWeightDataSet(arr){
    var xLabel;
    var yLabel;
    xLabel = arr.map(p => p.date_recorded)
    yLabel = arr.map(p => p.number)
    const dataSet = {
        labels: xLabel,
        datasets: [
            {
            label: 'Weight (lbs)',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: yLabel
            }
        ]
    }
    return dataSet
}

export default Statistics