import React, { useState } from 'react'

const Form: React.FC = () => {

    interface People {
        name: string,
        age: number
    }

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [people, setPeople] = useState<People[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = {
            name,
            age
        }
        setPeople([...people, formData])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'> </label>
            Name
            <input type='input' id='name' name='name' onChange={e => setName(e.target.value)}></input>
            <br></br>
            <label htmlFor='age'></label>
            Age
            <input type='number' id='age' name='age' onChange={e => setAge(parseInt(e.target.value))}></input>
            <br></br>
            <button>Submit</button>
            <div>
              {people.map(p => (
                <ul>
                    <li>Name: {p.name}</li>
                    <li>Age: {p.age}</li>
                </ul>
              ))}
            </div>
        </form>
    </div>
  )
}

export default Form