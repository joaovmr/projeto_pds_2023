import React,{useEffect} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getCalories, getUserWeight} from '../../actions/nutrition'
import {Doughnut} from 'react-chartjs-2'

const TotalCalories = () => {
    const auth = useSelector(state=>state.auth)
    const total = useSelector(state => state.nutrition.calories)
    const nutrition = useSelector(state => state.nutrition)

    const dispatch= useDispatch()

    useEffect(()=>{
        if (auth.isAuthenticated){
            dispatch(getCalories())
            dispatch(getUserWeight())
        } 
    },[])

    const dataSet = {
        labels : ['Gorduras','Proteinas','Carboidratos'],
        datasets : [
            {
                label:'Calorie breakdown',
                backgroundColor:[
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                ],
                data:[total.fat,total.protein,total.carbs]
            }
        ]

    }
    return(
        <>
            <Container fluid className="mt-3">
                <Row>
                    <Col xs={12} md={{span:6,offset:2}}>
                        <Card body className="border-0">
                            <Row>   
                                <Doughnut 
                                    data={dataSet}
                                    height={200}
                                    options={{
                                        title:{
                                            display:true,
                                            text:"Divisão de macros de hoje",
                                            fontSize:20
                                        
                                        },
                                        legend:{
                                            display:true,
                                            position:'bottom'
                                        },
                                        maintainAspectRatio:false
                                    }}
                                />
                            </Row>
                        </Card>
                    </Col>

                    <Col xs={12} md={{span:2,offset:1}}>
                        <Card body className="text-center">
                            <div>
                            <h4>Calorias de hoje</h4>
                            <h6>{total.total ? total.total : 0}</h6>
                            </div>
                            <hr style={{ width: "3rem" }} />
                            <div>
                            <h4>Meta diária</h4>
                            <h6>{auth.userCalorieGoal.daily_calories}</h6>
                            </div>
                            <hr style={{ width: "3rem" }} />
                            <div>
                            <h4>Peso atual</h4>
                            <h6>{nutrition.user_weight}</h6>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TotalCalories