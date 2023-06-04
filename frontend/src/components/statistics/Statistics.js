import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap'
import {Line} from 'react-chartjs-2';
import moment from 'moment';

function convertToDataSet(arr) {
    var xLabel;
    var yLabel;
    xLabel = arr.map(p => {
        const dateRecorded = moment.utc(p.date_eaten).local().add(1, 'day');
        return dateRecorded.format('DD/MM/YYYY');
      });
    yLabel = arr.map(p => p.totalCalories);
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
    };
    return dataSet;
  }
  


function convertToWeightDataSet(arr) {
  var xLabel;
  var yLabel;
  xLabel = arr.map(p => {
    const dateRecorded = moment.utc(p.date_recorded).local().add(1, 'day');
    return dateRecorded.format('DD/MM/YYYY');
  });
  yLabel = arr.map(p => p.number);
  const dataSet = {
    labels: xLabel,
    datasets: [
      {
        label: 'Peso (kg)',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: yLabel
      }
    ]
  };
  return dataSet;
}

  

const Statistics = () => {
    const auth = useSelector(state => state.auth)
    const [calorieLineState,updateCalorieLineState] = useState()
    const [weightLineState,updateWeightLineState] = useState()
    const [isLoading,setIsLoading] = useState(true)
    

    useEffect(()=>{
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${auth.token}`
            }
        }
        axios.get('http://localhost:8000/api/30-day-calories',config)
        .then(res=>{
            updateCalorieLineState(convertToDataSet(res.data.data))
            
        })

        axios.get('http://localhost:8000/api/user/30-day-weight',config)
        .then(res=>{
            updateWeightLineState(convertToWeightDataSet(res.data.data))
            setIsLoading(false)
        })

    },[])

    return (
        <>
            {isLoading ? <div>Carregando...</div>:
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Line 
                            data= {calorieLineState}
                            options = {{
                                title:{
                                    display:true,
                                    text:'Consumo calórico diário',
                                    fontSize:20,
                                },
                                scales:{
                                    yAxes:[{
                                        ticks:{
                                            beginAtZero:true
                                        }
                                    }]
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <Line 
                            data= {weightLineState}
                            options = {{
                                title:{
                                    display:true,
                                    text:'Peso diário',
                                    fontSize:20,
                                },
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}

export default Statistics