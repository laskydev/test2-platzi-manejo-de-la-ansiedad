import React from 'react'

export const Results = ({result}:any) => {

    let type: string = '';
    let alert: string = '';
    
    const asignation = () =>{
        if (result<21) {
            type = 'Leve'
            alert = 'success'
        } else if (result>=21 && result<=40){
            type = 'Moderada'
            alert = 'warning'
        } else if (result > 40) {
            type= 'Severa'
            alert = 'danger'
        }
    }
    if(result !== ''){
        console.log('Entro')
        console.log(result)
        asignation()
    }

    console.log(alert)
    return (
    <>
        <div className={`alert alert-${alert} text-center`}>
            <p>Tu nivel de ansiedad es: <span className="text-uppercase fw-bold ">{type}</span></p>
            <p>Tu resultado es: <span className="text-uppercase fw-bold">{result}</span></p>
        </div>
        <div className="container p-3">
            <p>Puntajes debajo de 21 indican una leve ansiedad.</p>
            <p>Puntajes de 22 a 40 indican una ansiedad moderada.</p>
            <p>Puntajes arriba de 40 indican una ansiedad severa.</p>
        </div>
    </>
    )
}
