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

    // posts todo content to db
    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST', 
            body: JSON.stringify({
                content: addTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then(msg => {
            console.log(msg)
            setAddTodo('')
        })
    }

    // updates state to refresh page
    const getLatestTodos = () => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json
            }
        }).then(data => setTodo(data))
    }

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Card listOfTodos={todo}/>
        </>
    )
}