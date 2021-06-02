import React from 'react'

export const Card = ({ listOfTodos }) => {
    console.log(listOfTodos)
    return (
        <>
        {listOfTodos.map(todo => {
            return(
                <ul key={todo.id}>
                    <li>{todo.content}</li>
                </ul>
            )
        } )}
        </>
    )
}