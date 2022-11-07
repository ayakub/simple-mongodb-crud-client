import React, { useState } from 'react';

const Add = () => {
    const [user, setUsers] = useState({ name: 'amuk ali', email: 'amukAli@gmal.com' })
    const handleSubmit = event => {
        event.preventDefault()
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully')
                    event.target.reset()
                }
            })
    }
    const handleInputBlur = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name
        const newUser = { ...user }
        newUser[fieldName] = value;
        setUsers(newUser)

    }
    return (
        <div>
            <h3>please add users</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputBlur} type="text" name="name" id="" /><br />
                <input onChange={handleInputBlur} type="text" name="adderss" id="" />
                <br />
                <input onChange={handleInputBlur} type="email" name="email" id="" />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default Add;