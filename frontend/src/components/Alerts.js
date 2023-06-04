import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { withAlert } from 'react-alert'



class Alerts extends React.Component {
    
    componentDidUpdate(prevProps){
        const {error,alert} = this.props
        if (error !== prevProps.error){
            if (error.msg.non_field_errors){
                alert.error(`Erro no login: ${error.msg.non_field_errors.join()}`)
            }
            if(error.msg.username){
                alert.error(`Erro no cadastro: ${error.msg.username.join()}`)
            }
            if(error.msg.total_calories || error.msg.fat || error.msg.protein || error.msg.carbs){
                alert.error(`Erro no cadastro do alimento: Somente dados inteiros são aceitos para os campos Calorias, Gordura, Proteína e Carboidratos`)
            }
            if(error.msg.number){
                alert.error(`Erro na atualização do peso: ${error.msg.number.join()}`)
            }
            if(error.msg.daily_calories){
                alert.error(`Erro na atualização de calorias: ${error.msg.daily_calories.join()}`)
            }
        }
    }
    
    render(){
        return (
            <Fragment />
        )
    }
    
}

const mapStateToProps = state => {
    return {
        error:state.errors
    }
}

export default connect(mapStateToProps)(withAlert()(Alerts))