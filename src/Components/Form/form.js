import React from 'react'

export const Form = ({ userInput }) => {
    
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return(
        <>
            <form>
                <input type='text' onChange={handleChange} value={userInput} required/>
                <input type='submit'/>
            </form>
        </>
    )
}