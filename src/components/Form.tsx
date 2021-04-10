import { kill } from 'node:process'
import React, { SetStateAction, useState } from 'react'

type FormProps = {
    setNumberQuestion: (numberQuestion: number) =>void,
    numberQuestion: number,
    valueTest: number,
    setValueTest: (valueTest: number) =>void,
}

export const Form = ({setNumberQuestion, numberQuestion, valueTest, setValueTest }:FormProps) => {

    const [error, setError] = useState(false)
    const [inputValue, setInputValue] = useState(0)

    const handleInput = (e:any) =>{
        console.log('im here'+e.target.value)
        const value:number = Number(e.target.value)
        //Validation corrects answer
        if(value > 10 || value < 0 || isNaN(value) ) {
            setError(true)
            return
        }
        //Desactivate error
        setError(false)
        setInputValue(value)
        console.log(inputValue)
    }


    const handleSubmit = (e: any) =>{
        e.preventDefault()
        const killMe: number = parseInt(e.target.firstChild.value);
        if ( killMe < 0 || killMe === null || killMe > 10 || isNaN(killMe) || killMe === undefined) {
            setError(true)
            return 
        }
        else{
            setError(false)
        setValueTest(valueTest + killMe)

        if (numberQuestion < 21){
            setNumberQuestion(numberQuestion + 1)
        }
        }   

        
    }
    const DivError = (
        <div className="alert alert-danger">Ingresa un número entre el 0 y el 10!</div>
    )
    return (
        <>
            {(error)? DivError : null} 
            <form
                onSubmit={handleSubmit}
                className="d-flex flex-column justify-content-center p-2"
                id="form"
            >
                <input
                    type="number"
                    name="response"
                    placeholder="1-10"
                    onChange={handleInput}
                    className="w-50 mx-auto"
                    
                />
                <br/>
                <button 
                    className="btn btn-primary  w-50 mx-auto"
                    type="submit"
                    >
                        Siguiente
                </button>
            </form>
        </>
    )
}
