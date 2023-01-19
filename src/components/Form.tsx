import React, { useState } from 'react'

const Form: React.FC = () => {

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = {
            name,
            age
        }
        console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'> </label>
            <input type='input' id='name' name='name' onChange={e => setName(e.target.value)}></input>
            <br></br>
            <label htmlFor='age'></label>
            <input type='number' id='age' name='age' onChange={e => setAge(parseInt(e.target.value))}></input>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form