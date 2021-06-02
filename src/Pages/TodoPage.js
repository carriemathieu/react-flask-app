import React,{useState, useEffect} from 'react'
import { Card } from '../Components/Card/card'
import { Form } from '../Components/Form/form'

export const TodoPage = () => {

    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')

    // fetches data from API
    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setTodo(data))
    }, [])

    // sets state to whatever is put in todo form
    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange}/>
            <Card listOfTodos={todo}/>
        </>
    )
}